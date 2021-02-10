/*
 * Find all the combinations for colouring a linear graph
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { Sequence2D } from '../PuzzleComponents/Sequence';
import { getGraphSet } from '../utils/loadPuzzle';
import { getCombinationsWithReplacement, getArrayOfN } from '../../utils/common';
import { sequenceSetMatches } from '../utils/evaluate';


// Given a set of rows of linear graphs
// Colour them so you have all combinations of colours
const puzzles1 = [
    {
        colourPalette: 2,
        items: [1, 2],
        pattern: [[1, 1], [1, 2], [2, 0]],
    }, {
        colourPalette: 2,
        items: [1, 2],
        pattern: [[1, 1, 1], [2, 2, 2], [1, 1, 2], [0, 0, 0]],
    }, {
        colourPalette: 2,
        items: [1, 2],
        pattern: [[1, 1, 1, 1], [1, 1, 1, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    }, {
        colourPalette: 3,
        items: [1, 2, 3],
        pattern: [[1, 1], [2, 2], [3, 3], [1, 2], [0, 0], [0, 0]],
    }
];

const puzzles = [puzzles1];

// Check the the given set of sequences matches a set of sequences.
const getSolutionSet = ({ colourPalette, pattern }) => {
    const combinationLength = pattern[0].length;

    // Find all combinations using this colour palette
    const colours = getArrayOfN(colourPalette);
    const permutations = getCombinationsWithReplacement(colours, combinationLength);
    const permutationSet = new Set(permutations.map(permutation => permutation.join('-')))

    return permutationSet
};

export const CombinationPuzzles = (n) => {
    const puzzle = puzzles[n];
    return (
        <PuzzlePage
            puzzles={puzzle}
            evaluate={sequenceSetMatches}
            getPuzzleObject={getGraphSet}
            getSolutionObject={getSolutionSet}
            displayPuzzle={Sequence2D} />
    );
}
