/*
 * Construct a Hamiltonian path along a graph.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { getGraphObject } from './puzzleLoaders';
import { ColourablePath } from './PuzzleComponents/Graph';
import { allItemsColoured } from '../utils/evaluation';


const hamiltonianPath = [
	{
        colourPalette: 1,
        nodes: [[-1, 0], [0, 0], [1, 0]],
        edges: [[0, 1], [1, 2]]
    }
];

const puzzles = [hamiltonianPath];

export const ColourGraph = (n) =>
    <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={({ nodes }) => allItemsColoured(nodes)}
		getPuzzleObject={getGraphObject}
		displayPuzzle={ColourablePath}
    />

