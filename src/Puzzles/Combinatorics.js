/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Sequence2D } from './PuzzleComponents/Sequence';
import { getPermutationObject } from './puzzleLoaders';
import { allItemsColoured, extractAttribute } from '../utils/evaluation';


// Sequence of coloured blocks with uncoloured blocks at the end
const puzzles1 = [
    {
        colourPalette: 2,
        pattern: [[1, 2], [2, 0]],
    }
];

const puzzles = [puzzles1];

// Check the the given set of sequences matches a set of sequences.
const sequencesMatch = ({ sequences, target }) => {
    // Check all the sequences are fully coloured
    if (!sequences.every(sequence => allItemsColoured(sequence))) {
        return false;
    }
    // Get a set of sequence values
    const sequenceSet = new Set(sequences.map(sequence => extractAttribute(sequence, 'colour').join('-')))
    
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
