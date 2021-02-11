/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { GraphRow, GraphColumn } from '../PuzzleComponents/Sequence';
import { getGraphSet } from '../utils/loadPuzzle';
import { sequenceSetMatches } from '../utils/evaluate';
import { getPermutations} from '../../utils/common';


// Given a set of rows of linear graphs
// Colour them so you have all permutations of colours with a fixed number of colours.
// e.g. (1, 2, 2) => (1, 2, 2), (2, 1, 2), (2, 2, 1)
const puzzles1 = [{
    colourPalette: 2,
    graphs: [[1, 2], [2, 0]],
}, {
    colourPalette: 2,
    graphs: [[1, 2, 2], [2, 1, 2], [2, 2, 0]],
}, {
    colourPalette: 2,
    graphs: [[2, 2, 1], [1, 2, 2], [0, 0, 0]],
}, {
    colourPalette: 2,
    graphs: [[2, 1, 2], [0, 0, 0], [0, 0, 0]],
}, {
    colourPalette: 2,
    graphs: [[1, 2, 2, 2], [2, 1, 2, 2], [0, 0, 0, 0], [0, 0, 0, 0]],
}, {
    colourPalette: 2,
    graphs: [[1, 1, 2, 2], [1, 2, 1, 2], [1, 2, 2, 1], [2, 1, 1, 2], [2, 1, 2, 1], [2, 0, 0, 0]],
}, {
    colourPalette: 2,
    graphs: [[1, 1, 2, 2], [1, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [2, 0, 0, 0], [2, 0, 0, 0]],
}, {
    colourPalette: 2,
    graphs: [[1, 1, 2, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
}];

const puzzles2 = [{
    colourPalette: 2,
    graphs: [[1, 1], [1, 2], [2, 1], [2, 0]],
}];

// Permutations of colours on looped graphs, so rotations count as the same thing.
// e.g. [1,2,1]
const puzzles3 = [
    {
        colourPalette: 2,
        loop: true,
        graphs: [[1, 1, 1], [1, 1, 2], [1, 2, 2], [0, 0, 0]],
    }, {
        colourPalette: 2,
        loop: true,
        graphs: [[1, 1, 2, 2], [2, 1, 2, 0]],
    }
];

const puzzles = [puzzles1, puzzles2, puzzles3];

// Return the set of all permutation of colours based on the first pattern in the pattern array
const getSolutionSet = ({ graphs }) => {
    const permutations = getPermutations(graphs[0]);
    return new Set(permutations.map(permutation => permutation.join('-')))
};

// Display linear graphs one under another, and loop graphs in a row
function displayGraphSequence({ sequence, loop }, chamber) {
    if (loop) {
        return GraphRow({ sequence }, chamber);
    } else {
        return GraphColumn({ sequence }, chamber);
    }
}

// TODO: Evaluation for permutations with replacement on loops

export const PermutationPuzzles = (n) => {
    return (
        <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={sequenceSetMatches}
            getPuzzleObject={getGraphSet}
            getSolutionObject={getSolutionSet}
            displayPuzzle={displayGraphSequence} />
    );
}
