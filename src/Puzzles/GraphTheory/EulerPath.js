/*
 * Construct a Euler path along a graph.
 * Given a starting node, move along the edges, visiting each edge only once
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { getGraphObject } from '../utils/loadPuzzle';
import { ColourableEulerPath } from '../PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluate';
import { loopGraph } from '../utils/graphTypes';


const puzzles = [
    {
        colourPalette: 1,
        graph: loopGraph(4)
    }
];

// Get a graph object with the first node coloured
const getGraph = ({ graph }) => {
    graph.size = 50;
    const graphObject = getGraphObject(graph);
    graphObject.nodes[0].current = true;
    return graphObject;
};

const EulerPath = () =>
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles}
        evaluate={({ edges }) => allItemsColoured(edges)}
		getPuzzleObject={getGraph}
		displayPuzzle={ColourableEulerPath}
    />

export default EulerPath;
