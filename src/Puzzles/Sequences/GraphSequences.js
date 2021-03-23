/*
 * Given a sequence of objects, continue it or fill in the missing bits.
 */

import React from 'react';

import Icons from './Icons';
import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { GraphRow } from '../PuzzleComponents/Sequence';
import { getGraphSequence } from '../utils/loadPuzzle';
import { sequencesMatch } from '../utils/evaluate';
import { triangleGraph, squareGraph } from '../utils/graphUtils';


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

const puzzle = [
    {
        colourPalette: 1,
        sequence: [t1, t1, t1, null],
        answer: [t1]
    }, {
        colourPalette: 2,
        sequence: [t1, t2, t1, t2, null],
        answer: [t1]
    }, {
        colourPalette: 2,
        sequence: [t112, t221, t112, t221, null],
        answer: [t112]
    }, {
        colourPalette: 2,
        sequence: [s1122, s2211, s1122, s2211, null],
        answer: [s1122]
    }, {
        colourPalette: 2,
        sequence: [s1212, s2121, s1212, s2121, s1212, null],
        answer: [s2121]
    }, {
        colourPalette: 2,
        sequence: [s1122, s1221, s2211, null],
        answer: [s2112]
    }, {
        colourPalette: 2,
        sequence: [t112, t121, t211, t112, t121, null],
        answer: [t211]
    }, {
        colourPalette: 3,
        sequence: [t123, t231, t312, t123, null],
        answer: [t312]
    }
];

// Check every node in a sequence of graphs matches the target node colours
const correctGraphSequence = ({ sequence, target }) =>
    sequence.every((graph, index) =>
        sequencesMatch(graph.nodes, target[index].nodes, 'colour')
    );

const GraphSequences = {
    name: 'Sequences 3',
    slug: 'sequences-3',
    icon: Icons[2],
    component: () => <PuzzlePage
        puzzles={puzzle}
        evaluate={correctGraphSequence}
        getPuzzleObject={getGraphSequence}
        displayPuzzle={GraphRow}
    />,
};

export default GraphSequences;
