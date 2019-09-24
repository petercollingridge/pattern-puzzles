import React from 'react';
import { Line } from './Primitives';
import { isColourable } from './utils';


// Display a graph in which the nodes have the potential to be coloured
export const Graph = ({ edges=[], nodes=[], chamber, onColour }) =>
    <g className="graph">
        <g className="graph-edges">
            { edges.map((edge, i) =>
                <g key={i}>
                    <Line className="edge-outline" {...edge} />
                    <Line className={edge.active ? `stroke-${ edge.active }`: null} {...edge} />
                </g>
            )}
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
export const EdgeGraph = ({ edges=[], nodes=[], chamber, onColour }) =>
    <g className="graph">
        <g className="graph-edges">
            { edges.map((edge, i) => {
                const dx = edge.x2 - edge.x1;
                const dy = edge.y2 - edge.y1;
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                const length = Math.sqrt(dx * dx + dy * dy);
        
                return <rect
                    key={i}
                    transform={`translate(${edge.x1} ${edge.y1}) rotate(${angle})`}
                    y={-4}
                    width={length}
                    height={8}
                    {...isColourable(edge, chamber, { onColour })}
                />
            })}
        </g>
        <g className="graph-nodes">
            { nodes.map((node, i) => 
                <g key={i} transform={`translate(${node.x} ${node.y})`}>
                    <circle className="node-outline" r={node.r} />
                    <circle className={node.current ? 'current' : 'no-fill'} r={node.r} />
                </g>
            )}
        </g>
    </g>

export const ColourableGraph = (graph, chamber) =>
    <Graph {...graph} chamber={chamber} />

export const ColourableEdgeGraph = (graph, chamber) =>
    <EdgeGraph {...graph} chamber={chamber} />

// A colourable graph where you can only colour points next to the one you last coloured
// You can pick any node as the first node you colour
export const ColourablePath = (graph, chamber) => {
    const colour = chamber.state.selectedColour;

    // Function that updates graph state when a node is coloured,
    // making only nodes next to the last coloured one colourable 
    const onColour = node => {
        const nodeIndex = node.index;
        let targetNode = graph.nodes[nodeIndex];

        if (targetNode.colour) {
            if (!graph.path) { graph.path = []; }

            // Colour the edge of the path
            const previousNode = graph.path.slice(-1)[0];
            if (previousNode) {
                previousNode.edges[nodeIndex].active = colour;
            }

            // Add new node to the path
            graph.path.push(targetNode);
        } else {
            // Remove the node we clicked on
            graph.path.pop();
            const previousNode = graph.path.slice(-1)[0];
            if (previousNode) {
                previousNode.fixed = false;
                previousNode.edges[nodeIndex].active = false;
            }
            // The active node is now the previous node in the path
            targetNode = previousNode;
        }

        // Update nodes
        if (targetNode) {
            for (let i = 0; i < graph.nodes.length; i++) {
                const node = graph.nodes[i];
                if (node === targetNode) { continue; }
                
                // Nodes connected to the targetNode are open, the others are fixed
                if (!node.colour) {
                    if (node.edges[targetNode.index]) {
                        node.fixed = false;
                    } else {
                        node.fixed = true;
                    }
                }
            }
        } else {
            // No nodes left in the path, so all nodes are active
            graph.nodes.forEach(node => node.fixed = false);
        }
    };

    return <EdgeGraph {...graph} chamber={chamber} onColour={onColour} />
};

// A colourable graph where the first node starts coloured and you can to colour adjacent edges 
export const ColourableEulerPath = (graph, chamber) => {
    const colour = chamber.state.selectedColour;

    graph.nodes[0].current = true;

    // Function that updates graph state when an edge is coloured,
    // making only nodes next to the last coloured one colourable 
    const onColour = edge => {
        // Update selected nodes and which edges can be coloured
    };

    return <EdgeGraph {...graph} chamber={chamber} onColour={onColour} />
};

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
