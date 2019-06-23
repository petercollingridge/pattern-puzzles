/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Map } from './PuzzleComponents/Map';
import { getMapObject } from './puzzleLoaders';
import { allItemsColoured, allConnectedItemsHaveDifferentColours } from '../utils/evaluation';


const puzzles1 = [
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

const puzzles2 = [
    {
        colourPalette: 2,
        regions: [[0, 0, 96, 96], [0, 0, 32, 32]],
        connections: [[0, 1]]
    }, {
        colourPalette: 3,
        regions: [[-24, 0, 48, 96], [24, 0, 48, 96], [0, 0, 32, 32]],
        connections: [[0, 1], [1, 2], [0, 2]]
    }, {
        colourPalette: 4,
        regions: [[0, -32, 96, 32], [-24, 16, 48, 64], [24, 16, 48, 64], [0, 0, 32, 32]],
        connections: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
    }, {
        colourPalette: 3,
        regions: [[-24, -24, 48, 48], [24, -24, 48, 48], [-24, 24, 48, 48], [24, 24, 48, 48], [0, 0, 32, 32]],
        connections: [[0, 1], [2, 3], [0, 2], [1, 3], [0, 4], [1, 4], [2, 4], [3, 4]]
    }, {
        colourPalette: 3,
        regions: [[-16, -32, 64, 32], [32, -16, 32, 64], [-32, 16, 32, 64], [16, 32, 64, 32], [0, 0, 32, 32]],
        connections: [[0, 1], [2, 3], [0, 2], [1, 3], [0, 4], [1, 4], [2, 4], [3, 4]]
    }, {
        colourPalette: 2,
        regions: [
            [-32, -32, 32, 32], [0, -32, 32, 32], [32, -32, 32, 32],
            [-32, 0, 32, 32], [0, 0, 32, 32], [32, 0, 32, 32],
            [-32, 32, 32, 32], [0, 32, 32, 32], [32, 32, 32, 32]
        ],
        connections: [
            [0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8],
            [0, 3], [1, 4], [2, 5], [3, 6], [4, 7], [5, 8]
        ]
    }
];

const puzzles = [puzzles1, puzzles2];

const ColourableMap = (puzzle, selectedColour, update) => {
    const colourItem = index => {
        puzzle.regions[index].colour = selectedColour;
        update(puzzle);
    }

    return <Map {...puzzle} colourItem={colourItem}/>
};

const evaluate = ({ regions, connections }) => 
    allItemsColoured(regions) &&
    allConnectedItemsHaveDifferentColours(connections);

export const ColourMap = (n) =>
	<PuzzlePage
		puzzles={puzzles[n]}
		evaluate={evaluate}
		getPuzzleObject={getMapObject}
		displayPuzzle={ColourableMap} />
