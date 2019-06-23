/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Sequence } from './PuzzleComponents/Sequence';
import { getSequenceObject } from './puzzleLoaders';
import { allItemsColoured, sequencesMatch } from '../utils/evaluation';


const puzzles1 = [
    {
        colourPalette: 1,
        pattern: [1, 1, 1, 1, 0],
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

const puzzles = [puzzles1];

const evaluate = ({ sequence, target }) =>
    allItemsColoured(sequence) &&
    sequencesMatch(sequence, target, 'colour');

const ColourableSequence = (puzzle, selectedColour, update) => {
    const colourItem = index => {
        puzzle.sequence[index].colour = selectedColour;
        update(puzzle);
    }

    return <Sequence {...puzzle} colourItem={colourItem}/>
};

export const Sequences = (n) =>
    <PuzzlePage
		puzzles={puzzles[n]}
		evaluate={evaluate}
		getPuzzleObject={getSequenceObject}
		displayPuzzle={ColourableSequence} />
