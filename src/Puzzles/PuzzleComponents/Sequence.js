import React from 'react';
import { Graph } from './Graph';
import { sum } from '../../utils/common';
import { isColourable } from './utils';
import { getGraphBBox } from '../utils/graphUtils';


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

// Given an array of sequences, draw each graph in the sequence, one after another
export function GraphRow({ sequence }, chamber) {
    // Get size of graphs with 10% for the gap
    const GAP = 0.1

    const n = sequence.length;
    let totalWidth = sum(sequence.map(getGraphBBox), graph => graph.width);
    const gapSize = GAP * totalWidth / (n + 1);
    totalWidth *= (1 + GAP);
    const scale = Math.min(1, 240 / totalWidth);
    totalWidth *= scale;

    const graphs = [];
    let x = -totalWidth / 2;

    sequence.forEach((graph, index) => {
        const bbox = getGraphBBox(graph);
        graphs.push(
            <g key={index} transform={`translate(${x - bbox.x1} 0) scale(${scale})`}>
                <Graph {...graph} chamber={chamber}/>
            </g>
        );
        x += scale * (gapSize + bbox.width);
    });
    
    return graphs;
}
// Given an array of sequences, draw each graph in the sequence, one under another
export function GraphColumn({ sequence }, chamber) {
    // Get size of graphs with 10% for the gap
    const GAP = 1;

    const n = sequence.length;
    let totalHeight = sum(sequence.map(getGraphBBox), graph => graph.height);
    const gapSize = GAP * totalHeight / (n + 1);
    totalHeight *= (1 + GAP);
    const scale = Math.min(1, 240 / totalHeight);
    totalHeight *= scale;

    const graphs = [];
    let y = -totalHeight / 2;

    sequence.forEach((graph, index) => {
        const bbox = getGraphBBox(graph);
        graphs.push(
            <g key={index} transform={`translate(0 ${y - bbox.y1}) scale(${scale})`}>
                <Graph {...graph} chamber={chamber}/>
            </g>
        );
        y += scale * (gapSize + bbox.height);
    });
    
    return graphs;
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
