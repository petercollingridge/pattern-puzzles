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
import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';


const puzzles1 = [{
    graph: loopGraph(4),
}, {
    graph: (() => {
        const graph = loopGraph(4);
        graph.edges.push([0, 2]);
        return graph;
    })(),
}, {
    graph: (() => {
        const graph = loopGraph(4);
        graph.nodes.push([0, 0]);
        graph.edges.push([3, 4]);
        return graph;
    })(),
}, {
    graph: (() => {
        const graph = loopGraph(4);
        graph.nodes.push([0, -1.6]);
        graph.edges.push([2, 4], [3, 4]);
        return graph;
    })(),
}, {
    graph: {
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[1, 4]])
    }
}];

const puzzles = [puzzles1];

// Get a graph object with the first node coloured
const getGraph = (puzzle) => {
    puzzle.graph.size = 50;
    const graphObject = getGraphObject(puzzle.graph);
    return graphObject;
};

const EulerPath = (n) =>
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles[n]}
        evaluate={({ edges }) => allItemsColoured(edges)}
        getPuzzleObject={getGraph}
        displayPuzzle={ColourableEulerPath}
    />

export default EulerPath;
