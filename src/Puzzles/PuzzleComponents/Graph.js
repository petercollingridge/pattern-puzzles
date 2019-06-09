import React from 'react';
import { Line } from './Primitives';
import { getItemColourType } from './utils';


export const Graph = ({ edges, nodes, clickToColour }) =>
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
                const colourNode = () => clickToColour(i);
                const { className, onClick } = getItemColourType(node, colourNode);

                return <circle
                    key={i}
                    className={className}
                    cx={node.x}
                    cy={node.y}
                    r={node.r}
                    onClick={onClick}
                />
            })}
        </g>
    </g>


export const colourableGraph = (page) => {
    // Click nodes colours them with the page's selectedColour
    const clickToColour = (nodeIndex) => {
        const { puzzle, selectedColour } = page.state;
        if (selectedColour) {
            puzzle.nodes[nodeIndex].colour = selectedColour;
            page.update(puzzle);
        }
    };
    
    return <Graph clickToColour={clickToColour} {...page.state.puzzle}/>
};
