/*
 * Find all the combinations for colouring a linear graph
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { getGraphSet } from '../utils/loadPuzzle';
import { setOfSetsEqual } from '../utils/evaluate';
import { GraphColumn } from '../PuzzleComponents/Sequence';
import { getCombinationsWithReplacement, getArrayOfN } from '../../utils/common';


// Given a set of rows of linear graphs
// Colour them so you have all combinations of colours
const puzzles1 = [{
    colourPalette: 2,
    items: [1, 2],
    graphs: [[1, 1], [1, 2], [2, 0]],
}, {
    colourPalette: 2,
    items: [1, 2],
    graphs: [[1, 1, 1], [2, 2, 2], [1, 1, 2], [0, 0, 0]],
}, {
    colourPalette: 2,
    items: [1, 2],
    graphs: [[1, 1, 1, 1], [1, 1, 1, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
}, {
    colourPalette: 3,
    items: [1, 2, 3],
    graphs: [[1, 1], [2, 2], [3, 3], [1, 2], [0, 0], [0, 0]],
}];

const puzzles = [puzzles1];

// Check the the given set of sequences matches a set of sequences.
const getSolutionSet = ({ colourPalette, graphs }) => {
    const combinationLength = graphs[0].length;

    // Find all combinations using this colour palette
    const colours = getArrayOfN(colourPalette);
    const combinations = getCombinationsWithReplacement(colours, combinationLength);
    const combinationSet = new Set(combinations.map(combination => combination.sort().join('-')));
    
    return combinationSet
};

export const CombinationPuzzles = (n) => {
    const puzzle = puzzles[n];
    return (
        <PuzzlePage
            puzzles={puzzle}
            evaluate={setOfSetsEqual}
            getPuzzleObject={getGraphSet}
            getSolutionObject={getSolutionSet}
            displayPuzzle={GraphColumn} />
    );
}
