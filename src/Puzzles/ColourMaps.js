/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';
import {
	allNodesColoured,
	allEdgeNodesDifferent
} from '../utils/graphUtils';

import BasePuzzle from './BasePuzzle';
import Graph from './PuzzleComponents/Graph';


export default ({ puzzles }) => {
	const evaluate = ({ nodes, edges }) => 
		allNodesColoured(nodes) && allEdgeNodesDifferent(edges);
	
	const getPuzzle = (puzzle, index) => <Graph size={32} puzzle={puzzle} {...puzzles[index]} />

	return <BasePuzzle evaluate={evaluate} getPuzzle={getPuzzle} puzzles={puzzles} />
};
