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
    graph: gridGraph(3, 1),
    start: 0,
    end: 2,
}, {
    graph: gridGraph(2, 2),
    start: 0,
    end: 2,
}, {
    graph: gridGraph(3, 2),
    start: 0,
    end: 2,
}, {
    graph: gridGraph(3, 2),
    start: 0,
    end: 1,
}, {
    graph: gridGraph(3, 2),
    start: 0,
    end: 5,
}, {
    graph: gridGraph(4, 2),
    start: 0,
    end: 1,
}, {
    graph: gridGraph(4, 2),
    start: 2,
    end: 4,
}, {
    graph: gridGraph(4, 2),
    start: 0,
    end: 6,
}];

const puzzles2 = [{
    graph: gridGraph(3, 3),
    start: 0,
    end: 4,
}, {
    graph: gridGraph(3, 3),
    start: 0,
    end: 8,
}, {
    graph: gridGraph(3, 3),
    start: 0,
    end: 6,
}, {
    graph: gridGraph(4, 3),
    start: 0,
    end: 3,
}, {
    graph: gridGraph(4, 3),
    start: 0,
    end: 9,
}, {
    graph: gridGraph(4, 3),
    start: 0,
    end: 11,
}, {
    graph: gridGraph(4, 3),
    start: 0,
    end: 7,
}, {
    graph: gridGraph(4, 3),
    start: 3,
    end: 8,
}];

const puzzles = [puzzles1, puzzles2];

const getGraph = ({ graph, start, end }) => {
    const graphObject = getGraphObject(graph);
    graphObject.path = [graphObject.nodes[start]];
    graphObject.nodes[start].colour = 1;
    graphObject.nodes[start].fixed = true;
    graphObject.nodes[start].current = true;
    graphObject.nodes[end].colour = 2;
    graphObject.end = graphObject.nodes[end];
    graphObject.end.colour = 2;
    graphObject.end.fixed = true;

    return graphObject;
}

const evaluate = (graph) => {
    if (allItemsColoured(graph.nodes)) {
        // Add final path segment
        const finalIndex = graph.path[graph.path.length - 1].index;
        graph.end.edges[finalIndex].colour = 1;

        // Hide non-coloured ends
        graph.edges.forEach(edge => {
            if (!edge.colour) {
                edge.hidden = true;
            }
        });
        return true;
    } else {
        // Remove colour of final path segment
        Object.values(graph.end.edges).forEach(edge => edge.colour = 0);

        // Make sure all edges are showing
        graph.edges.forEach(edge => edge.hidden = false);
    }
}

const GridPath = (n) =>
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles[n]}
        evaluate={evaluate}
        getPuzzleObject={getGraph}
        displayPuzzle={ColourableHamilitonianPath}
    />

export default GridPath;
