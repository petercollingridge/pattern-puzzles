/*
 * Find the smallest dominating set.
 * Colour the vertices of a graph such that each vertex is coloured or adjacent
 * to a vertex that is coloured. The number of vertices you can colour is limited.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { getGraphObject } from '../utils/loadPuzzle';
import { DominatingSet } from '../PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluate';
import { getNodesOnCircle, getLoopOfEdges, connectNodeToNodes } from '../utils/graphUtils';
import { linearGraph, loopGraph, spokeGraph } from '../utils/graphTypes';


const puzzles = [
    {
        colourPalette: [1],
        graph: linearGraph(3, { scale: 2, r: 10 })
    }, {
        colourPalette: [1],
        graph: spokeGraph(5, { scale: 2, r: 10 })
    }, {
        colourPalette: [2],
        graph: loopGraph(6, { scale: 2, r: 10 })
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
            nodes: getNodesOnCircle(6, { r: 1.5 })
                .concat(getNodesOnCircle(3, { r: 3, offsetAngle: 30 }))
                .concat([[0, 0, 0]]),
            edges: getLoopOfEdges(6)
                .concat([[0, 6], [2, 7], [4, 8]])
                .concat(connectNodeToNodes(9, [1, 3, 5])),
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
    }, {
        colourPalette: [5],
        graph: {
            nodes: getNodesOnCircle(12, { r: 3 }).concat(getNodesOnCircle(4, { r: 1.5 })).concat([[0, 0, 0]]),
            edges: getLoopOfEdges(12)
                .concat(getLoopOfEdges(12, 15))
                .concat(connectNodeToNodes(16, [12, 13, 14, 15]))
                .concat([
                    [0, 12], [2, 13], [3, 13], [5, 14], [6, 14], [8, 15], [9, 15], [11, 12]
                ]),
            r: 10
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
		displayPuzzle={DominatingSet}
    />

export default GraphTheory;
