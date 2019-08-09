/*
 * Construct a Hamiltonian path along a graph.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { getGraphObject } from './puzzleLoaders';
import { ColourablePath, DominatingSet } from './PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluation';
import {
    getNodesOnCircle,
    getLoopOfEdges,
    getLineOfEdges,
    connectNodeToNodes,
    linearGraph,
    loopGraph,
    spokeGraph,
} from '../utils/graphUtils';


const R3 = Math.sqrt(3);
const hamiltonianPath = [
    loopGraph(6),
    {
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[1, 4]])
    }, {
        nodes: getNodesOnCircle(6),
        edges: getLineOfEdges(6)
    }, {
        nodes: getNodesOnCircle(6),
        edges: getLineOfEdges(6).concat([[2, 5]])
    }, {
        nodes: getNodesOnCircle(6),
        edges: [[2, 3], [3, 4], [4, 5], [5, 0], [1, 4], [0, 3]]
    }, {
        nodes: getNodesOnCircle(3, { r: 0.75 })
                .concat(getNodesOnCircle(3, { r: 2 })),
        edges: getLoopOfEdges(3)
                .concat(getLoopOfEdges(3, 5))
                .concat([[2, 5]])
    }, {
        nodes: getNodesOnCircle(3, { r: 0.75 })
                .concat(getNodesOnCircle(3, { r: 2 }))
                .concat([[-R3, -2], [R3, -2]]),
        edges: getLoopOfEdges(3)
                .concat(getLoopOfEdges(3, 5))
                .concat([[0, 3], [2, 5], [3, 6], [4, 7]])
    }, {
        nodes: getNodesOnCircle(3, { r: 0.75 })
                .concat(getNodesOnCircle(3, { r: 2 }))
                .concat([[-R3, -2], [R3, -2]]),
        edges: getLoopOfEdges(3)
                .concat(getLoopOfEdges(3, 5))
                .concat([[2, 5], [3, 6], [4, 7], [5, 6], [5, 7]])
    }
];

const dominatingSet = [
    {
        colourPalette: [1],
        graph: linearGraph(3, { scale: 2, r: 10 })
    }, {
        colourPalette: [1],
        graph: spokeGraph(5, { scale: 2, r: 10 })
    }, {
        colourPalette: [2],
        graph: loopGraph(4, { scale: 2, r: 10 })
    }, {
        colourPalette: [2],
        graph: {
            nodes: getNodesOnCircle(6, { r: 2 }).concat([[0, 0, 0]]),
            edges: getLoopOfEdges(6).concat(connectNodeToNodes(6, [0, 1, 3, 4])),
            r: 10
        }
    }, {
        colourPalette: [3],
        graph: {
            nodes: getNodesOnCircle(5, { r: 3 }).concat(getNodesOnCircle(5, { r: 1.5 })),
            edges: getLoopOfEdges(5).concat([
                [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
                [5, 7], [6, 8], [7, 9], [5, 8], [6, 9]
            ]),
            r: 10
        }
    }, {
        colourPalette: [4],
        graph: {
            nodes: getNodesOnCircle(8, { r: 3 }).concat(getNodesOnCircle(4, { r: 1.5 })).concat([[0, 0, 0]]),
            edges: getLoopOfEdges(8)
                .concat(getLoopOfEdges(8, 11))
                .concat(connectNodeToNodes(12, [8, 9, 10, 11]))
                .concat([
                    [0, 8], [1, 9], [2, 9], [3, 10], [4, 10], [5, 11], [6, 11], [7, 8]
                ]),
            r: 10
        }
    },
];

console.log(getLoopOfEdges(8, 12));

const puzzles = [hamiltonianPath, dominatingSet];

export const GraphTheory = (n) => {
    let graphLoader, graphDisplay;
    if (n === 0) { 
        graphLoader = getGraphObject;
        graphDisplay = ColourablePath;
     } else {
        graphLoader = ({ graph }) => getGraphObject(graph);
        graphDisplay = DominatingSet;
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
