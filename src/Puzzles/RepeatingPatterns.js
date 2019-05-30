/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import Map from './PuzzleComponents/Map';
import { getSequenceObject } from '../utils/getPuzzleObjects';
import { allItemsFilled, sequencesMatch } from '../utils/graphUtils';


var puzzles1 = [
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

const ColourMap = ({ puzzles }) => {
	const evaluate = ({ sequence, target }) => 
        allItemsFilled(sequence) && sequencesMatch(sequence, target);

	const displayMap = (page, mapObject) => <Map page={page} {...mapObject} />

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getSequenceObject}
		displayPuzzle={displayMap} />;
};

export const ColourMap1 = (props) => <ColourMap puzzles={puzzles1} {...props} />