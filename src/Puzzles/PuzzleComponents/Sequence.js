    import React from 'react';
    import { Graph } from './Graph';
    import { sum } from '../../utils/common';
    import { isColourable } from './utils';
    import { getGraphSize } from '../utils/graphUtils';


    // Calculate the size of items in a sequence based on the number of items in the sequence
    const getSize = n =>  Math.min(24, 200 / n);

    // Sequence of blocks in a line, some of which may be colourable
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

    // Wrapper function to return Sequence component
    export function ColourableSequence(puzzle, chamber) {
        return <Sequence {...puzzle} chamber={chamber} />;
    }

    // Given an array of sequences, draw each graph in the sequence, on after another
    export function GraphRow({ sequences }, chamber) {
        const n = sequences.length;

        // Get size of graphs with 10% for the gap
        const GAP = 0.1

        let totalWidth = (1 + GAP) * sum(sequences.map(getGraphSize), graph => graph.width);
        const scale = Math.min(1, 200 / totalWidth);
        totalWidth *= scale;

        const startX = -totalWidth / 2;
        const graphSize = totalWidth / n;
        const gapSize = totalWidth * GAP * (n + 1) / (n * n);
        
        return sequences.map((graph, index) =>
            <g key={index} transform={`translate(${startX + index * (graphSize + gapSize)} 0) scale(${scale})`}>
                <Graph {...graph} chamber={chamber}/>
            </g>
        );
    }

    // Draw a set of graphs, one below the other
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

    // Draw a set of graph, one after another
    export const GraphSequence = ({ sequence }, chamber) => {
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
