/****************************************************************
 * Graph object consisting of node and edges.
 * Both nodes and edges may be coloured or colourable.
*****************************************************************/
import React from 'react';
import { Line } from './Primitives';
import { isColourable } from '../utils/isColourable';


// A connection between two nodes
function Edge(props) {
    const flashing = props.flashing ? 'flashing' : '';
    const edgeColour = props.colour ? `stroke-${ props.colour }`: '';
    return (
        <g className={flashing}>
            <Line className="edge-outline" {...props} />
            <Line className={edgeColour} {...props} />
        </g>
    );
}

function ColourableEdge({ chamber, onColour, edge }) {
    const dx = edge.x2 - edge.x1;
    const dy = edge.y2 - edge.y1;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    const length = Math.sqrt(dx * dx + dy * dy);

    return (
        <rect
            transform={`translate(${edge.x1} ${edge.y1}) rotate(${angle})`}
            y={-3}
            width={length}
            height={6}
            {...isColourable(edge, chamber, { onColour })}
        />
    );
}

// Display a graph in which the nodes have the potential to be coloured
export const Graph = ({ edges=[], nodes=[], chamber, onColour }) =>
    <g className="graph">
        <g className="graph-edges">
            { edges.map((edge, i) => <Edge key={i} {...edge} /> )}
        </g>
        <g className="graph-nodes">
            { nodes.map((node, i) => 
                <g key={i} transform={`translate(${ node.x } ${ node.y })`}>
                    <circle className="node-outline" r={node.r} />
                    <circle r={node.r} {...isColourable(node, chamber, { onColour })} />
                </g>
            )}
        </g>
    </g>

// A graph where the edges can be selected
export const EdgeGraph = ({ edges=[], nodes=[], chamber, onColour }) => {
    return <g className="graph">
        <g className="graph-edges">
            { edges.map((edge, i) => <ColourableEdge key={i} chamber={chamber} onColour={onColour} edge={edge} />) }
        </g>
        <g className="graph-nodes">
            { nodes.map((node, i) => {
                let className = node.colour ? `fill-${node.colour}` : 'no-fill';
                if (node.current) { className += ' current'; }
                return (
                    <g key={i} transform={`translate(${node.x} ${node.y})`}>
                        <circle className="node-outline" r={node.r} />
                        <circle className={className} r={node.r} />
                    </g>
                );
            }
            )}
        </g>
    </g>
}

export const ColourableGraph = (graph, chamber) => <Graph {...graph} chamber={chamber} />

export const ColourableEdgeGraph = (graph, chamber) => <EdgeGraph {...graph} chamber={chamber} />

// A colourable graph where one node starts coloured and you can colour its edges
// Colouring an edge will colour the next node and let you colour its edges
export const ColourablePath = (graph, chamber) => {
    const colour = chamber.state.selectedColour;

    const onColour = node => {
        const nodeIndex = node.index;

        if (node.colour) {
            node.current = true;

            if (!graph.path) { graph.path = []; }

            // Colour the edge of the path
            const previousNode = graph.path.slice(-1)[0];
            if (previousNode) {
                previousNode.edges[nodeIndex].colour = colour;
            }

            // Add new node to the path
            graph.path.push(node);
        } else {
            // Remove the node we clicked on
            graph.path.pop();
            const previousNode = graph.path.slice(-1)[0];
            if (previousNode) {
                previousNode.fixed = false;
                previousNode.edges[nodeIndex].colour = 0;
            }
            // The active node is now the previous node in the path
            node = previousNode;
        }

        // Update nodes
        if (node) {
            for (let i = 0; i < graph.nodes.length; i++) {
                const _node = graph.nodes[i];
                if (_node === node) { continue; }
                
                // Nodes connected to the targetNode are open, the others are fixed
                if (!_node.colour) {
                    if (_node.edges[node.index]) {
                        _node.fixed = false;
                    } else {
                        _node.fixed = true;
                    }
                }
            }
        } else {
            // No nodes left in the path, so all nodes are active
            graph.nodes.forEach(node => node.fixed = false);
        }
    };

    return <Graph {...graph} chamber={chamber} onColour={onColour} />
};

// Colour an Euler path - visiting every edge once, but vertices more than once
// A colourable graph where you start by colouring one node, then and you can colour its edges
// Colouring an edge will colour the next node and let you colour its edges
export function ColourableEulerPath(graph, chamber) {
    // Inactive edges are those not next to the current nodes
    function labelInactiveEdges() {
        graph.edges.forEach(edge => {
            edge.inactive = (!edge.node1.current && !edge.node2.current) ||
                (edge.colour && edge !== graph.path[graph.path.length - 1]);
        });
    }

    // Function that updates graph state when an edge is coloured,
    // making the next node in the path current and activating the others.
    const onColourEdge = edge => {
        // Update path depending on whether we are colouring or decolouring an edge
        if (edge.colour) {
            graph.path.push(edge);
        } else {
            graph.path.pop();
        }

        if (edge.node1.current) {
            edge.node1.colour = edge.colour;
            edge.node1.current = false;
            edge.node2.current = true;
        } else {
            edge.node2.colour = edge.colour;
            edge.node2.current = false;
            edge.node1.current = true;
        }
        labelInactiveEdges();
    };

    const onColourNode = node => {
        node.colour = 0;
        node.current = true;
        graph.path = [];
        labelInactiveEdges();
    };

    if (graph.nodes.some(node => node.current)) {
        return <EdgeGraph {...graph} chamber={chamber} onColour={onColourEdge} />;
    } else {
        // Need to select a node first
        return <Graph {...graph} chamber={chamber} onColour={onColourNode} />;
    }
}

// A colourable graph, where colouring a node also colours any adjacent nodes
export const DominatingSet = (graph, chamber) => {
    const onColour = node => {
        const nodeIndex = node.index;
        const targetNode = graph.nodes[nodeIndex];
        const neighbours = Object.keys(targetNode.edges);

        if (targetNode.colour) {
            // Colour neighbours
            neighbours.forEach(n => {
                // Colour node if it is not coloured
                if (!graph.nodes[n].colour) {
                    graph.nodes[n].colour = 2;
                }
                // Colour edge
                targetNode.edges[n].active = 2;
            })
        } else {
            // Remove colour from neighbour unless they are next to other coloured nodes
            neighbours.forEach(n => {
                targetNode.edges[n].active = 0;
                const node = graph.nodes[n];
                if (node.colour === 2) {
                    // Check neighbours for nodes that are coloured
                    if (Object.keys(node.edges).every(n2 => graph.nodes[n2].colour !== 1)) {
                        node.colour = 0;
                    } 
                } else if (node.colour === 1) {
                    // This node is next to a different coloured node, so colour with colour 2
                    targetNode.colour = 2;
                    targetNode.edges[n].active = 2;
                }
            })
        }
    }

    return <Graph {...graph} chamber={chamber} onColour={onColour} />
};
