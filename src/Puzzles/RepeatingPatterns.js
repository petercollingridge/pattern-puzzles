/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import Sequence from './PuzzleComponents/Sequence';
import { getSequenceObject } from '../utils/getPuzzleObjects';
import { allItemsColoured, sequencesMatch } from '../utils/evaluationUtils';


const puzzles1 = [
    {
        colourPalette: 1,
        pattern: [1, 1, 1, 1],
        answer: [1]
    }, {
        colourPalette: 2,
        pattern: [1, 1, 1, 1],
        answer: [1, 1]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 1, 2, 1, 2],
        answer: [1, 2]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 1, 2, 3],
        answer: [1, 2, 3]
    }, {
        colourPalette: 2,
        pattern: [1, 1, 2, 2, 1, 1],
        answer: [2, 2]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 2, 1, 2, 2],
        answer: [1, 2, 2]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 2, 3, 3, 3, 1, 2, 2],
        answer: [3, 3, 3]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 1, 1, 2, 1, 2, 1, 1, 2],
        answer: [1, 2, 1, 1]
    }
];

const RepeatingPatterns = ({ puzzles }) => {
	const evaluate = ({ sequence }, { target }) => {
        return allItemsColoured(sequence) && sequencesMatch(sequence, target, 'colour');
    }

	const displaySequence = (page, sequence) => <Sequence page={page} {...sequence} />

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getSequenceObject}
		displayPuzzle={displaySequence} />;
};

export const RepeatingPatterns1 = (props) => <RepeatingPatterns puzzles={puzzles1} {...props} />