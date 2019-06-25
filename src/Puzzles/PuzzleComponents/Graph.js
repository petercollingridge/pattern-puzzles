import React from 'react';
import { Line } from './Primitives';
import { getColourClassName, getClickToColour } from './utils';


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
                    className={getColourClassName(node)}
                    onClick={getClickToColour(colourNode, node, i)}
                />
            )}
        </g>
    </g>

// <puzzle> is an object representing the puzzle and what the update function uses to determine
//  whether the puzzle has been solved
// <selectedColour> is colour currently select by the user, so what a node will be coloured when clicked
// <update> is the puzzle's update function which allows the puzzle's state to be updated and then evaluated
export const ColourableGraph = (puzzle, selectedColour, update) => {
    // Function that takes a node index, to colour the node in a graph, and update it
    const colourNode = nodeIndex => {
        puzzle.nodes[nodeIndex].colour = selectedColour;
        update(puzzle);
    };

    return <Graph {...puzzle} colourNode={colourNode} />
};
