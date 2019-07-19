/*
 * Construct a Hamiltonian path along a graph.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { getGraphObject } from './puzzleLoaders';
import { ColourablePath } from './PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluation';
import { getPointsOnACircle, getLoopOfEdges } from '../utils/graphUtils';


const hamiltonianPath = [
	{
        nodes: getPointsOnACircle(4),
        edges: getLoopOfEdges(4)
    }, {
        nodes: getPointsOnACircle(6),
        edges: getLoopOfEdges(6)
    }, {
        nodes: getPointsOnACircle(4),
        edges: getLoopOfEdges(4).concat([[1, 3]])
    }, {
        nodes: getPointsOnACircle(4),
        edges: [[0, 3], [2, 3], [0, 2], [1, 3]]
    }, {
        nodes: getPointsOnACircle(4, { r: 2 }).concat([[Math.SQRT2, 0]]),
        edges: [[0, 1], [2, 3], [0, 3], [1, 3], [2, 4]]
    }, {
        nodes: getPointsOnACircle(3).concat(getPointsOnACircle(3, { r: 2.5 })),
        edges: getLoopOfEdges(3).concat(getLoopOfEdges(3, 5)).concat([[2, 5]])
    }
];

const puzzles = [hamiltonianPath];

export const GraphTheory = (n) =>
    <PuzzlePage
        colourPalette={1}
        puzzles={puzzles[n]}
        evaluate={({ nodes }) => allItemsColoured(nodes)}
		getPuzzleObject={getGraphObject}
		displayPuzzle={ColourablePath}
    />

