import React from 'react';
import { Line } from './Primitives';
import { isColourable } from './utils';


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

export const ColourableGraph = (graph, chamber) =>
    <Graph {...graph} chamber={chamber} />

// Same as a colourable graph, except you can only colour points next to the one you last coloured
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
                
                // Nodes  connected to the targetNode are open, the others are fixed
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

    return <Graph {...graph} chamber={chamber} onColour={onColour} />
};

// A colourable graph, where colouring a node causes any attached nodes to also be coloured
export const DominatingSet = (graph, chamber) => {
    const onColour = node => {
        const nodeIndex = node.index;
        const targetNode = graph.nodes[nodeIndex];
        const neighbours = Object.keys(targetNode.edges);

        if (targetNode.colour) {
            // Colour neighbours
            neighbours.forEach(n => {
                if (!graph.nodes[n].colour) {
                    graph.nodes[n].colour = 2;
                }
            })
        } else {
            // Remove colour from neighbour unless they are next to other coloured nodes
            neighbours.forEach(n => {
                const node = graph.nodes[n];
                if (node.colour === 2) {
                    // Check neighbours for nodes that are coloured
                    if (Object.keys(node.edges).every(n2 => graph.nodes[n2].colour !== 1)) {
                        node.colour = 0;
                    } 
                } else if (node.colour === 1) {
                    // This node is next to a different coloured node, so colour with colour 2
                    targetNode.colour = 2;
                }
            })
        }
    }

    return <Graph {...graph} chamber={chamber} onColour={onColour} />
};
