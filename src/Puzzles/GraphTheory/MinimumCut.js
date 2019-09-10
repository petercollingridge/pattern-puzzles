/*
 * Find the smallest dominating set.
 * Colour the vertices of a graph such that each vertex is coloured or adjacent
 * to a vertex that is coloured. The number of vertices you can colour is limited.
 */

import React from 'react';

import PuzzlePage from '../PuzzlePage';
import { getGraphObject } from '../puzzleLoaders';
import { ColourableEdgeGraph } from '../PuzzleComponents/Graph';

import { linearGraph } from '../../utils/graphUtils';
import { allItemsColoured } from '../../utils/evaluation';


const puzzles = [
    {
        colourPalette: [1],
        graph: linearGraph(2, { scale: 2, r: 10 })
    }
];

const GraphTheory = () => 
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles}
        evaluate={({ nodes }) => allItemsColoured(nodes)}
		getPuzzleObject={({ graph }) => getGraphObject(graph)}
		displayPuzzle={ColourableEdgeGraph}
    />

export default GraphTheory;
