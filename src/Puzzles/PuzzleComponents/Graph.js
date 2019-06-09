import React from 'react';
import { Line } from './Primitives';
import { getColourClassName } from './utils';


export const Graph = ({ edges, nodes, colourNode }) =>
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
            { nodes.map((node, i) => {
                const onClick = colourNode && !node.fixed ?
                    () => colourNode(i):
                    null;

                return <circle
                    key={i}
                    className={getColourClassName(node)}
                    cx={node.x}
                    cy={node.y}
                    r={node.r}
                    onClick={onClick}
                />
            })}
        </g>
    </g>

// Get a graph with nodes that can be clicked to colour them with the page's selected colour
export const getColourableGraph = getNode => 
    ({puzzle, selectedColour}, update) => {
        const colourNode = nodeIndex => {
            getNode(puzzle, nodeIndex).colour = selectedColour;
            update(puzzle);
        }

        return <Graph {...puzzle} colourNode={colourNode}/>
    }
