/*
 * Construct a Hamiltonian path along a graph.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { getGraphWithPath } from './puzzleLoaders';
import { ColourablePath } from './PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluation';
import { getPointsOnACircle, getLoopOfEdges, getLineOfEdges } from '../utils/graphUtils';


const R3 = Math.sqrt(3);
const hamiltonianPath = [
	{
        nodes: getPointsOnACircle(6),
        edges: getLoopOfEdges(6)
    }, {
        nodes: getPointsOnACircle(6),
        edges: getLoopOfEdges(6).concat([[1, 4]])
    }, {
        nodes: getPointsOnACircle(6),
        edges: getLineOfEdges(6)
    }, {
        nodes: getPointsOnACircle(6),
        edges: getLineOfEdges(6).concat([[2, 5]])
    }, {
        nodes: getPointsOnACircle(6),
        edges: [[2, 3], [3, 4], [4, 5], [5, 0], [1, 4], [0, 3]]
    }, {
        nodes: getPointsOnACircle(3, { r: 0.75 })
                .concat(getPointsOnACircle(3, { r: 2 })),
        edges: getLoopOfEdges(3)
                .concat(getLoopOfEdges(3, 5))
                .concat([[2, 5]])
    }, {
        nodes: getPointsOnACircle(3, { r: 0.75 })
                .concat(getPointsOnACircle(3, { r: 2 }))
                .concat([[-R3, -2], [R3, -2]]),
        edges: getLoopOfEdges(3)
                .concat(getLoopOfEdges(3, 5))
                .concat([[0, 3], [2, 5], [3, 6], [4, 7]])
    }, {
        nodes: getPointsOnACircle(3, { r: 0.75 })
                .concat(getPointsOnACircle(3, { r: 2 }))
                .concat([[-R3, -2], [R3, -2]]),
        edges: getLoopOfEdges(3)
                .concat(getLoopOfEdges(3, 5))
                .concat([[2, 5], [3, 6], [4, 7], [5, 6], [5, 7]])
    }
];

const puzzles = [hamiltonianPath];

export const GraphTheory = (n) =>
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles[n]}
        evaluate={({ nodes }) => allItemsColoured(nodes)}
		getPuzzleObject={getGraphWithPath}
		displayPuzzle={ColourablePath}
    />

