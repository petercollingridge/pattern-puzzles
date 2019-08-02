import React from 'react';
import { Graph } from './Graph';
import { isColourable } from './utils';


const getSize = n =>  Math.min(24, 200 / n);

const Sequence = ({ sequence=[], y=0, chamber }) => {
    const size = getSize(sequence.length);
    const startX = -(sequence.length * size) / 2;

    return <g className="sequence">
        { sequence.map((item, i) =>
            <rect
                key={i}
                x={startX + i * size }
                y={y - size / 2}
                width={size - 1}
                height={size - 1}
                rx="3"
                ry="3"
                {...isColourable(item, chamber)}
            />
        )}
    </g>
};

export const ColourableSequence = (puzzle, chamber) => 
    <Sequence {...puzzle} chamber={chamber}/>

export const Sequence2D = (puzzle, chamber) => {
    const sequences = puzzle.sequences;
    const size = getSize(Math.max(sequences.length, sequences[0].length));
    const sizeWithGap = size * 1.25;
    const startY = -((sequences.length - 1) * sizeWithGap) / 2
    return sequences.map((sequence, index) =>
        <Sequence sequence={sequence} y={startY + index * sizeWithGap} key={index} chamber={chamber}/>
    );
}

export const GraphSequence = (puzzle, chamber) => {
    const sequence = puzzle.sequence;

    let size = Math.min(120, 240 / sequence.length);
    const scale = Math.min(1, size / 90);
    size /= scale;
    const startX = -size * (sequence.length - 1) / 2;

    const graphs = sequence.map((graph, i) =>
        <g key={i} transform={`translate(${ startX + i * size })`}>
            <Graph {...graph} chamber={chamber} />
        </g>
    );

    return <g className="sequence" transform={`scale(${ scale })`}>
        { graphs }
    </g>
};
