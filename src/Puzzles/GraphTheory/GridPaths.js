/*
 * Given a grid, construct a path that goes through every node exactly once.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { getGraphObject } from '../utils/loadPuzzle';
import { ColourableHamilitonianPath } from '../PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluate';
import { gridGraph } from '../utils/graphTypes';


const puzzles1 = [{
    colourPalette: 1,
    graph: gridGraph(3, 2),
    start: 0,
    end: 5,
}];

const puzzles = [puzzles1];

const getGraph = ({ graph, start, end }) => {
    const graphObject = getGraphObject(graph);
    graphObject.path = [graphObject.nodes[start]];
    graphObject.nodes[start].colour = 1;
    graphObject.nodes[start].fixed = true;
    graphObject.nodes[start].current = true;
    graphObject.nodes[end].colour = 1;
    graphObject.nodes[end].fixed = true;
    return graphObject;
}

const GridPath = (n) =>
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles[n]}
        evaluate={({ nodes }) => allItemsColoured(nodes)}
        getPuzzleObject={getGraph}
        displayPuzzle={ColourableHamilitonianPath}
    />

export default GridPath;
