/*
 * Construct a Euler path along a graph.
 * Given a starting node, move along the edges, visiting each edge only once
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { getGraphObject } from '../utils/loadPuzzle';
import { ColourablePath } from '../PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluate';
import {
    loopGraph,
} from '../utils/graphUtils';


const puzzles = [
    {
        colourPalette: 1,
        graph: loopGraph(4)
    }
];

const EulerPath = () =>
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles}
        evaluate={({ edges }) => allItemsColoured(edges)}
		getPuzzleObject={({ graph }) => getGraphObject(graph)}
		displayPuzzle={ColourablePath}
    />

export default EulerPath;
