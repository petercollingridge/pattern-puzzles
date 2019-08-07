/*
 * Construct a Hamiltonian path along a graph.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { getGraphObject } from './puzzleLoaders';
import { ColourablePath } from './PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluation';
import {
    getPointsOnACircle, 
    getLoopOfEdges,
    getLineOfEdges,
    linearGraph,
    loopGraph,
} from '../utils/graphUtils';


const R3 = Math.sqrt(3);
const hamiltonianPath = [
    loopGraph(6),
    {
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

const dominatingSet = [
    {
        maxColours: 1,
        graph: linearGraph(3)
    }
];

const puzzles = [hamiltonianPath, dominatingSet];

export const GraphTheory = (n) => {
    let graphLoader, graphDisplay;
    if (n === 0) { 
        graphLoader = getGraphObject;
        graphDisplay = ColourablePath;
     } else {
        graphLoader = ({ graph }) => getGraphObject(graph);
        graphDisplay = ColourablePath;
     }

    return <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles[n]}
        evaluate={({ nodes }) => allItemsColoured(nodes)}
		getPuzzleObject={graphLoader}
		displayPuzzle={graphDisplay}
    />
}
