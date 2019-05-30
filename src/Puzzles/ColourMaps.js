/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import Map from './PuzzleComponents/Map';
import { getMapObject } from '../utils/getPuzzleObjects';
import {
	allItemsColoured,
	allConnectedItemsHaveDifferentColours
} from '../utils/graphUtils';


var puzzles1 = [
    {
        colourPalette: 1,
        regions: [[0, 0, 32, 32]]
    }, {
        colourPalette: 2,
        regions: [[-16, 0, 32, 32], [16, 0, 32, 32]],
        connections: [[0, 1]]
    }, {
        colourPalette: 2,
        regions: [[-32, 0, 32, 32], [0, 0, 32, 32], [32, 0, 32, 32]],
        connections: [[0, 1], [1, 2]]
    }, {
        colourPalette: 3,
        regions: [[-16, 16, 32, 32], [16, 16, 32, 32], [0, -16, 64, 32]],
        connections: [[0, 1], [1, 2], [0, 2]]
    }, {
        colourPalette: 2,
        regions: [[-16, 16, 32, 32], [16, 16, 32, 32], [-16, -16, 32, 32], [16, -16, 32, 32]],
        connections: [[0, 1], [2, 3], [0, 2], [1, 3]]
    }, {
        colourPalette: 3,
        regions: [[-16, 16, 32, 32], [16, 16, 32, 32], [-16, -16, 32, 32], [16, -16, 32, 32], [0, 0, 28, 28]],
        connections: [[0, 1], [2, 3], [0, 2], [1, 3], [0, 4], [1, 4], [2, 4], [3, 4]]
    }, {
        colourPalette: 3,
        regions: [[0, 0, 72, 72], [-12, 12, 24, 24], [12, 12, 24, 24], [-12, -12, 24, 24], [12, -12, 24, 24], [0, 0, 24, 24]],
        connections: [[1, 2], [3, 4], [1, 3], [2, 4], [0, 1], [0, 2], [0, 3], [0, 4], [5, 1], [5, 2], [5, 3], [5, 4]]
    }, {
        colourPalette: 4,
        regions: [[-16, 16, 32, 32], [16, 16, 32, 32], [0, -16, 64, 32], [0, 0, 28, 28]],
        connections: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
    }
];

const ColourMap = ({ puzzles }) => {
	const evaluate = ({ regions, connections }) => 
	    allItemsColoured(regions) && allConnectedItemsHaveDifferentColours(connections);

	const displayMap = (page, mapObject) => <Map page={page} {...mapObject} />

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getMapObject}
		displayPuzzle={displayMap} />;
};

export const ColourMap1 = (props) => <ColourMap puzzles={puzzles1} {...props} />