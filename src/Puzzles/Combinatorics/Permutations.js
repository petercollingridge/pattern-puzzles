/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { Sequence2D } from '../PuzzleComponents/Sequence';
import { getPermutations} from '../../utils/common';
import { getLinearGraphs } from '../utils/loadPuzzle';
import { sequenceSetMatches } from '../utils/evaluate';


// Given a set of rows of linear graphs
// Colour them so you have all permutations of colours, e.g. one red node and one blue node
const puzzles1 = [
    {
        colourPalette: 2,
        pattern: [[1, 2], [2, 0]],
    }, {
        colourPalette: 2,
        pattern: [[1, 2, 2], [2, 1, 2], [2, 2, 0]],
    }, {
        colourPalette: 2,
        pattern: [[2, 2, 1], [1, 2, 2], [0, 0, 0]],
    }, {
        colourPalette: 2,
        pattern: [[2, 1, 2], [0, 0, 0], [0, 0, 0]],
    }, {
        colourPalette: 2,
        pattern: [[1, 2, 2, 2], [2, 1, 2, 2], [0, 0, 0, 0], [0, 0, 0, 0]],
    }, {
        colourPalette: 2,
        pattern: [[1, 1, 2, 2], [1, 2, 1, 2], [1, 2, 2, 1], [2, 1, 1, 2], [2, 1, 2, 1], [2, 0, 0, 0]],
    }, {
        colourPalette: 2,
        pattern: [[1, 1, 2, 2], [1, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [2, 0, 0, 0], [2, 0, 0, 0]],
    }, {
        colourPalette: 2,
        pattern: [[1, 1, 2, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    }
];

// Permutations of colours on looped graphs, so rotations count as the same thing.
// e.g. [1,2,1]
const puzzles2 = [
    {
        colourPalette: 2,
        loop: true,
        pattern: [[1, 1, 1], [1, 1, 2], [1, 2, 2], [0, 0, 0]],
    }, {
        colourPalette: 2,
        loop: true,
        c: [[1, 1, 2, 2], [2, 1, 2, 0]],
    }
];

const puzzles = [puzzles1, puzzles2];

// Return the set of all permutation of colours based on the first pattern in the pattern array
const getSolutionSet = ({ pattern }) => {
    const permutations = getPermutations(pattern[0]);
    return new Set(permutations.map(permutation => permutation.join('-')))
};

export const PermutationPuzzles = (n) => {
    return (
        <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={sequenceSetMatches}
            getPuzzleObject={getLinearGraphs}
            getSolutionObject={getSolutionSet}
            displayPuzzle={Sequence2D} />
    );
}
