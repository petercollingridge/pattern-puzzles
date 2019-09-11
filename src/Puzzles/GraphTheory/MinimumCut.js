/*
 * Find the smallest dominating set.
 * Colour the vertices of a graph such that each vertex is coloured or adjacent
 * to a vertex that is coloured. The number of vertices you can colour is limited.
 */

import React from 'react';

import PuzzlePage from '../PuzzlePage';
import { getGraphObject } from '../puzzleLoaders';
import { ColourableEdgeGraph } from '../PuzzleComponents/Graph';

import {
    getNodesOnCircle,
    linearGraph,
    loopGraph
} from '../../utils/graphUtils';
import { graphIsDisjoint } from '../../utils/evaluation';


const puzzles = [
    {
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
            nodes: getNodesOnCircle([1, 1, 1], { r: 2 }).concat([[0, 0, 1]]),
            edges: [[0, 1], [1, 2], [0, 2], [2, 3]]
        }
    }, {
        colourPalette: [2],
        graph: loopGraph(4, { scale: 2, r: 10 })
    }, {
        colourPalette: [1],
        graph: linearGraph(3, { scale: 2, r: 10 })
    }, {
        colourPalette: [1],
        graph: linearGraph(2, { scale: 2, r: 10 })
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
