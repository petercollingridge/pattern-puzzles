/*
 * Colour all nodes on a graph such that no edges joins two nodes of the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import Graph from './PuzzleComponents/Graph';
import { getTwoGraphObjects } from './puzzleLoaders';
import { allItemsColoured, sequencesMatch } from '../utils/evaluationUtils';


const puzzles1 = [
	{
        size: 24,
		colourPalette: 1,
        nodes: [[0, 0, 1]],
	}, {
        size: 24,
		colourPalette: 2,
        nodes: [[0, -1, 1], [0, 1, 2]],
        edges: [[0, 1]]
	}, {
        size: 24,
		colourPalette: 2,
        nodes: [[-1, 1, 1], [1, 1, 1], [-1, -1, 2]],
        edges: [[0, 1]]
	}
];

const Reflection = ({ puzzles }) => {
	const evaluate = (blank, { target }) => 
	    allItemsColoured(blank.nodes) && sequencesMatch(blank.nodes, target.nodes);

	const displayGraph = (page, {target, blank}) => <g>
        <g transform="translate(-50)">
            <Graph page={page} {...target} />
        </g>
        <g transform="translate(50) scale(-1, 1)">
            <Graph page={page} {...blank} />
        </g>
    </g>

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getTwoGraphObjects}
		displayPuzzle={displayGraph} />;
};

export const Reflection1 = () => <Reflection puzzles={puzzles1} />
