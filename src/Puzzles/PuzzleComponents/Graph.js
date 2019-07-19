import React from 'react';
import { Line } from './Primitives';
import { isColourable } from './utils';
import { ColourGraph } from '../ColourGraphs';


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
                <circle
                    key={i}
                    r={node.r}
                    cx={node.x}
                    cy={node.y}
                    {...isColourable(node, i, colourNode)}
                />
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
export const ColourablePath = (puzzle, colour, update) => {
    // Function that takes a node index, to colour the node in a graph, and update it
    const colourNode = nodeIndex => {
        const targetNode = puzzle.nodes[nodeIndex];
        updateNodeColour(targetNode, colour);

        // Update nodes
        for (let i = 0; i < puzzle.nodes.length; i++) {
            const node = puzzle.nodes[i];
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

        update(puzzle);
    };

    return <Graph {...puzzle} colourNode={colourNode} />
};