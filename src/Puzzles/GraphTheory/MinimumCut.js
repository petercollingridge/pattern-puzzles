/*
 * Find the smallest dominating set.
 * Colour the vertices of a graph such that each vertex is coloured or adjacent
 * to a vertex that is coloured. The number of vertices you can colour is limited.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { getGraphObject } from '../utils/loadPuzzle';
import { ColourableEdgeGraph } from '../PuzzleComponents/Graph';
import { linearGraph, loopGraph } from '../utils/graphTypes';
import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';
import { graphIsDisjoint } from '../utils/evaluate';


const puzzles = [
    {
        colourPalette: [1],
        graph: linearGraph(2, { scale: 2, r: 10 })
    }, {
        colourPalette: [1],
        graph: linearGraph(3, { scale: 2, r: 10 })
    }, {
        colourPalette: [2],
        graph: loopGraph(4, { scale: 2, r: 10 })
    }, {
        colourPalette: [1],
        graph: {
            r: 10,
            nodes: [[-2.5, -1.6], [-2.5, 1.6], [-0.8, 0], [0.8, 0], [2.5, -1.6], [2.5, 1.6]],
            edges: [[0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [3, 5], [4, 5]]
        }
    }, {
        colourPalette: [1],
        graph: {
            r: 10,
            nodes: getNodesOnCircle(3, { colour: 1, r: 2 }).concat([[0, 0, 1]]),
            edges: [[0, 1], [1, 2], [0, 2], [2, 3]]
        }
    }, {
        colourPalette: [2],
        graph: {
            r: 10,
            nodes: [
                [-3, -1], [-1, -1], [1, -1], [3, -1],
                [3, 1], [1, 1], [-1, 1], [-3, 1] 
            ],
            edges: getLoopOfEdges(8).concat([[0, 6], [1, 7], [2, 4], [3, 5]])
        }
    }, {
        colourPalette: [2],
        graph: {
            r: 10,
            nodes: [
                [-3, -1], [-1, -1], [1, -1], [3, -1],
                [3, 1], [1, 1], [-1, 1], [-3, 1] 
            ],
            edges: getLoopOfEdges(8).concat([[0, 6], [1, 5], [2, 6], [2, 4], [3, 5]])
        }
    }, {
        colourPalette: [2],
        graph: {
            r: 8,
            nodes: [
                [-2.4, -1.8], [-3, -0], [-2.4, 1.8], [-1.8, 0],
                [ 2.4, -1.8], [ 3, -0], [ 2.4, 1.8], [ 1.8, 0],
                [0, -0.9], [-0.6, 0], [0, 0.9], [0.6, 0] 
            ],
            edges: [
                [0, 1], [1, 2], [2, 3], [3, 0], [1, 3],
                [4, 5], [5, 6], [6, 7], [7, 4], [5, 7],
                [8, 9], [9, 10], [10, 11], [11, 8], [8, 10],
                [3, 9], [7, 11], [0, 4], [2, 6]
            ]
        }
    }
];

const GraphTheory = () => 
    <PuzzlePage
        clearButton
        puzzles={puzzles}
        evaluate={({ nodes }) => graphIsDisjoint(nodes)}
		getPuzzleObject={({ graph }) => getGraphObject(graph)}
		displayPuzzle={ColourableEdgeGraph}
    />

export default GraphTheory;
