/*
 * Construct a Hamiltonian path along a graph.
 */

import React from 'react';

import PuzzlePage from '../PuzzlePage';
import { getGraphObject } from '../puzzleLoaders';
import { ColourablePath } from '../PuzzleComponents/Graph';

import { allItemsColoured } from '../../utils/evaluation';
import {
    getNodesOnCircle,
    getLoopOfEdges,
    getLineOfEdges,
    loopGraph,
} from '../../utils/graphUtils';


const R3 = Math.sqrt(3);

const puzzles = [
    {
        colourPalette: 1,
        graph: loopGraph(6)
    }, {
        colourPalette: 1,
        graph: {
            nodes: getNodesOnCircle(6),
            edges: getLoopOfEdges(6).concat([[1, 4]])
        }
    }, {
        colourPalette: 1,
        graph: {
            nodes: getNodesOnCircle(6),
            edges: getLineOfEdges(6)
        }
    }, {
        colourPalette: 1,
        graph: {
            nodes: getNodesOnCircle(6),
            edges: getLineOfEdges(6).concat([[2, 5]])
        }
    }, {
        colourPalette: 1,
        graph: {
            nodes: getNodesOnCircle(6),
            edges: [[2, 3], [3, 4], [4, 5], [5, 0], [1, 4], [0, 3]]
        }
    }, {
        colourPalette: 1,
        graph: {
            nodes: getNodesOnCircle(3, { r: 0.75 })
                    .concat(getNodesOnCircle(3, { r: 2 })),
            edges: getLoopOfEdges(3)
                    .concat(getLoopOfEdges(3, 5))
                    .concat([[2, 5]])
        }
    }, {
        colourPalette: 1,
        graph: {
            nodes: getNodesOnCircle(3, { r: 0.75 })
                    .concat(getNodesOnCircle(3, { r: 2 }))
                    .concat([[-R3, -2], [R3, -2]]),
            edges: getLoopOfEdges(3)
                    .concat(getLoopOfEdges(3, 5))
                    .concat([[0, 3], [2, 5], [3, 6], [4, 7]])
        }
    }, {
        colourPalette: 1,
        graph: {
            nodes: getNodesOnCircle(3, { r: 0.75 })
                    .concat(getNodesOnCircle(3, { r: 2 }))
                    .concat([[-R3, -2], [R3, -2]]),
            edges: getLoopOfEdges(3)
                    .concat(getLoopOfEdges(3, 5))
                    .concat([[2, 5], [3, 6], [4, 7], [5, 6], [5, 7]])
        }
    }
];

const GraphTheory = () =>
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles}
        evaluate={({ nodes }) => allItemsColoured(nodes)}
		getPuzzleObject={({ graph }) => getGraphObject(graph)}
		displayPuzzle={ColourablePath}
    />

export default GraphTheory;
