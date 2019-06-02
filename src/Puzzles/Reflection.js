/*
 * Colour all nodes on a graph such that no edges joins two nodes of the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import Graph from './PuzzleComponents/Graph';
import { getTwoGraphObjects } from './puzzleLoaders';
import { allItemsColoured, allConnectedItemsHaveDifferentColours } from '../utils/evaluationUtils';


const puzzles1 = [
	{
		colourPalette: 1,
		nodes: [[0, 0, 1]]
	}
];

const Reflection = ({ puzzles }) => {
	const evaluate = ({ nodes, edges }) => 
	    allItemsColoured(nodes) && allConnectedItemsHaveDifferentColours(edges);

	const displayGraph = (page, {target, blank}) => <g>
            <Graph page={page} {...target} />
        </g>

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getTwoGraphObjects}
		displayPuzzle={displayGraph} />;
};

export const Reflection1 = () => <Reflection puzzles={puzzles1} />
