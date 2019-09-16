/*
 * Given a sequence of objects, continue it or fill in the missing bits.
 */

import React from 'react';

import PuzzlePage from '../PuzzleChamber/PuzzleChamber';
import { ColourableSequence, GraphSequence } from './PuzzleComponents/Sequence';
import { getSequenceObject, getGraphSequence } from './utils/loadPuzzle';
import { sequencesMatch } from './utils/evaluate';
import { triangleGraph, squareGraph } from '../utils/graphUtils';


// Sequence of coloured blocks with uncoloured blocks at the end
const puzzles1 = [
    {
        colourPalette: 1,
        pattern: [1, 1, 1, 0],
        answer: [1]
    }, {
        colourPalette: 2,
        pattern: [1, 1, 1, 1, 0, 0],
        answer: [1, 1]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 1, 2, 1, 2, 0, 0],
        answer: [1, 2]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 1, 2, 3, 0, 0, 0],
        answer: [1, 2, 3]
    }, {
        colourPalette: 2,
        pattern: [1, 1, 2, 2, 1, 1, 0, 0],
        answer: [2, 2]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 2, 1, 2, 2, 0, 0, 0],
        answer: [1, 2, 2]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 3, 1, 2, 3, 3, 0, 0, 0, 0],
        answer: [1, 2, 3, 3]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 0, 0, 0, 0],
        answer: [1, 2, 1, 1]
    }
];

// Sequence of coloured blocks with uncoloured blocks in the middle of the sequence
const puzzles2 = [
    {
        colourPalette: 1,
        pattern: [1, 1, 0, 1, 1],
        answer: [1]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 1, 0, 1, 2, 1],
        answer: [2]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 0, 2, 3],
        answer: [1]
    }, {
        colourPalette: 2,
        pattern: [1, 1, 2, 2, 1, 0, 0, 2],
        answer: [1, 2]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 2, 1, 2, 0, 0, 2, 2],
        answer: [2, 1]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1],
        answer: [3]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 0, 0, 3, 1, 2, 3, 2, 1],
        answer: [2, 1]
    }, {
        colourPalette: 3,
        pattern: [1, 1, 0, 0, 0, 1, 2, 3, 1, 1, 2, 3],
        answer: [2, 3, 1]
    }
];

// Sequence of coloured graphs with uncoloured one at the end
const t1 = triangleGraph(1);
const t2 = triangleGraph(2);
const t112 = triangleGraph([1, 1, 2]);
const t221 = triangleGraph([2, 2, 1]);
const t121 = triangleGraph([1, 2, 1]);
const t211 = triangleGraph([2, 1, 1]);
const t123 = triangleGraph([1, 2, 3]);
const t231 = triangleGraph([2, 3, 1]);
const t312 = triangleGraph([3, 1, 2]);

const s1122 = squareGraph([1, 1, 2, 2]);
const s2211 = squareGraph([2, 2, 1, 1]);
const s2112 = squareGraph([2, 1, 1, 2]);
const s1221 = squareGraph([1, 2, 2, 1]);
const s1212 = squareGraph([1, 2, 1, 2]);
const s2121 = squareGraph([2, 1, 2, 1]);

const puzzles3 = [
    {
        colourPalette: 1,
        graphs: [t1, t1, t1, null],
        answer: [t1]
    }, {
        colourPalette: 2,
        graphs: [t1, t2, t1, t2, null],
        answer: [t1]
    }, {
        colourPalette: 2,
        graphs: [t112, t221, t112, t221, null],
        answer: [t112]
    }, {
        colourPalette: 2,
        graphs: [s1122, s2211, s1122, s2211, null],
        answer: [s1122]
    }, {
        colourPalette: 2,
        graphs: [s1212, s2121, s1212, s2121, s1212, null],
        answer: [s2121]
    }, {
        colourPalette: 2,
        graphs: [s1122, s1221, s2211, null],
        answer: [s2112]
    }, {
        colourPalette: 2,
        graphs: [t112, t121, t211, t112, t121, null],
        answer: [t211]
    }, {
        colourPalette: 3,
        graphs: [t123, t231, t312, t123, null],
        answer: [t312]
    }
];

const puzzles = [puzzles1, puzzles2, puzzles3];

const correctSequence = ({ sequence, target }) =>
    sequencesMatch(sequence, target, 'colour');

const correctGraphSequence = ({ sequence, target }) =>
    sequence.every((graph, index) =>
        sequencesMatch(graph.nodes, target[index].nodes, 'colour')
    );

export const Sequences = (n) => {
    if (n < 2) {
        return <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={correctSequence}
            getPuzzleObject={getSequenceObject}
            displayPuzzle={ColourableSequence} />
    } else {
        return <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={correctGraphSequence}
            getPuzzleObject={getGraphSequence}
            displayPuzzle={GraphSequence} />
    }
}
