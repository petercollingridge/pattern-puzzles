import React from 'react';
import { Graph } from './Graph';
import { isColourable } from './utils';


export const Sequence = ({ sequence=[], y=0, colourItem }) => {
    const size = Math.min(24, 200 / sequence.length);
    const startX = -(sequence.length * size) / 2;

    return <g className="sequence">
        { sequence.map((item, i) => {
            return <rect
                key={i}
                x={startX + i * size }
                y={y - size / 2}
                width={size - 1}
                height={size - 1}
                rx="3"
                ry="3"
                {...isColourable(item, i, colourItem)}
            />
        })}
    </g>
};

export const ColourableSequence = (puzzle, selectedColour, update) => {
    const colourItem = index => {
        if (puzzle.sequence[index].colour === selectedColour) {
            puzzle.sequence[index].colour = 0;
        } else {
            puzzle.sequence[index].colour = selectedColour;
        }
        update(puzzle);
    }

    return <Sequence {...puzzle} colourItem={colourItem}/>
};

export const Sequence2D = (puzzle, selectedColour, update) => {
    
}

export const GraphSequence = (puzzle, selectedColour, update) => {
    const sequence = puzzle.sequence;

    let size = Math.min(120, 240 / sequence.length);
    const scale = Math.min(1, size / 90);
    size /= scale;
    const startX = -size * (sequence.length - 1) / 2;

    return <g className="sequence"  transform={`scale(${ scale })`}>
        { sequence.map((graph, i) => {
            const colourNode = nodeIndex => {
                graph.nodes[nodeIndex].colour = selectedColour;
                update(puzzle);
            };

            return <g key={i} transform={`translate(${ startX + i * size })`}>
                <Graph {...graph} colourNode={colourNode} />
            </g>
        })}
    </g>
};
