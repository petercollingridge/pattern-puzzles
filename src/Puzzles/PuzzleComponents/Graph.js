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
