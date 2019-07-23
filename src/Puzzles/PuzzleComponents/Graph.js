import React from 'react';
import { Line } from './Primitives';
import { isColourable } from './utils';


export const Graph = ({ edges=[], nodes=[], colourNode }) =>
    <g className="graph">
        <g className="graph-edges">
            { edges.map((edge, i) =>
                <g key={i}>
                    <Line className="edge-outline" {...edge} />
                    <Line {...edge} />
                </g>
            )}
        </g>

        <g className="graph-nodes">
            { nodes.map((node, i) => 
                <g key={i} transform={`translate(${ node.x } ${ node.y })`}>
                    <circle className="node-outline" r={node.r} />
                    <circle r={node.r} {...isColourable(node, i, colourNode)} />
                </g>
            )}
        </g>
    </g>

// Colour node with the given colour, unless it already is that colour, in which remove
const updateNodeColour = (node, colour) => {
    if (node.colour !== colour) {
        node.colour = colour;
    } else if (!node.fixed) {
        node.colour = 0;
    }
}

// <puzzle> is an object representing the puzzle and what the update function uses to determine
//  whether the puzzle has been solved
// <selectedColour> is colour currently select by the user, so what a node will be coloured when clicked
// <update> is the puzzle's update function which allows the puzzle's state to be updated and then evaluated
export const ColourableGraph = (puzzle, colour, update) => {
    // Function that takes a node index, to colour the node in a graph, and update it
    const colourNode = nodeIndex => {
        const targetNode = puzzle.nodes[nodeIndex];
        updateNodeColour(targetNode, colour);
        update(puzzle);
    };

    return <Graph {...puzzle} colourNode={colourNode} />
};

// Same as a colourable graph, except you can only colour points next to the one you last coloured
// TODO: need to remember path, in case have to undo it
export const ColourablePath = (graph, colour, update) => {
    // Function that takes a node index, to colour the node in a graph, and update it
    const colourNode = nodeIndex => {
        if (!colour) { return; }

        let targetNode = graph.nodes[nodeIndex];
        updateNodeColour(targetNode, colour);

        if (targetNode.colour) {
            graph.path.push(targetNode);
        } else {
            // Remove the node we clicked on
            graph.path.pop();
            // The active node is now the previous node in the path
            targetNode = graph.path.slice(-1)[0];
            if (targetNode) {
                targetNode.fixed = false
            }
        }

        // Update nodes
        if (targetNode) {
            // All nodes are fixed other than those connected to the targetNodes
            for (let i = 0; i < graph.nodes.length; i++) {
                const node = graph.nodes[i];
                if (node === targetNode) { continue; }

                node.fixed = true;
                if (!node.colour) {
                    // Non-coloured node connected to the target node are colourable
                    node.edges.forEach(edge => {
                        if (edge.node1 === targetNode || edge.node2 === targetNode) {
                            node.fixed = false;
                        }
                    })
                }
            }
        } else {
            // No nodes left in the path, so all nodes are active
            graph.nodes.forEach(node => node.fixed = false);
        }

        update(graph);
    };

    return <Graph {...graph} colourNode={colourNode} />
};