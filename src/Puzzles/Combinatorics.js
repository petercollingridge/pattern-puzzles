/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from '../PuzzleChamber/PuzzleChamber';
import { Sequence2D } from './PuzzleComponents/Sequence';
import { getPermutationObject } from './puzzleLoaders';
import { allItemsColoured, extractAttribute } from '../utils/evaluation';


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

// Permutations using linear graphs
const puzzles2 = [
    {
        colourPalette: 2,
        loop: true,
        pattern: [[1, 1, 2, 2], [2, 1, 2, 0]],
    }
];

const puzzles = [puzzles1, puzzles2];

// Check the the given set of sequences matches a set of sequences.
const sequencesMatch = ({ sequences, target }) => {
    // Check all the sequences are fully coloured
    if (!sequences.every(graph => allItemsColoured(graph.nodes))) {
        return false;
    }
    // Get a set of sequence values
    const sequenceSet = new Set(sequences.map(sequence => extractAttribute(sequence.nodes, 'colour').join('-')))
    
    // Check the this set of sequences matches the set of permutations
    return (sequenceSet.size === target.size) &&
        [...sequenceSet].every(value => target.has(value));
}

export const PermutationPuzzles = (n) =>
     <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={sequencesMatch}
        getPuzzleObject={getPermutationObject}
        displayPuzzle={Sequence2D} />
