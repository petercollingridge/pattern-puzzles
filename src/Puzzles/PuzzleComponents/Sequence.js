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
    const graphs = puzzle.sequences;
    const size = 1.25 * getSize(Math.max(graphs.length, graphs[0].nodes.length));
    const startY = -((graphs.length - 1) * size) / 2;

    return graphs.map((graph, index) =>
        <g key={index} transform={`translate(0 ${startY + index * size})`}>
            <Graph {...graph} chamber={chamber}/>
        </g>
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
