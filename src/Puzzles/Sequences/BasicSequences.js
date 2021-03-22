/*
 * Given a sequence of objects, continue it or fill in the missing bits.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { ColourableSequence } from '../PuzzleComponents/Sequence';
import { getSequenceObject } from '../utils/loadPuzzle';
import { sequencesMatch } from '../utils/evaluate';


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

const puzzles = [puzzles1, puzzles2];
const correctSequence = ({ sequence, target }) => sequencesMatch(sequence, target, 'colour');

const Sequences = (n) => 
    <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={correctSequence}
        getPuzzleObject={getSequenceObject}
        displayPuzzle={ColourableSequence}
    />

export default Sequences;
