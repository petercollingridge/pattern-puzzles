/*
 * Find all the combinations for colouring a linear graph
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { Sequence2D } from '../PuzzleComponents/Sequence';
import { getCombinationObject } from '../utils/loadPuzzle';
import { allItemsColoured, extractAttribute } from '../utils/evaluate';


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
        colourPalette: 3,
        items: [1, 2, 3],
        pattern: [[1, 1], [2, 2], [3, 3], [1, 2], [0, 0], [0, 0]],
    }
];

const puzzles = [puzzles1];

// Check the the given set of sequences matches a set of sequences.
const sequencesMatch = ({ sequences, target }) => {
    // Check all the sequences are fully coloured
    if (!sequences.every(graph => allItemsColoured(graph.nodes))) {
        return false;
    }
    // Get a set of sequence values,
    // where a sequence value is a string of numbers separated by hypens, e.g. 1-2
    const sequenceSet = new Set(sequences.map(sequence => extractAttribute(sequence.nodes, 'colour').sort().join('-')))
    
    // Check the this set of sequences matches the set of permutations
    return (sequenceSet.size === target.size) &&
        [...sequenceSet].every(value => target.has(value));
}

export const CombinationPuzzles = (n) =>
     <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={sequencesMatch}
        getPuzzleObject={getCombinationObject}
        displayPuzzle={Sequence2D} />
