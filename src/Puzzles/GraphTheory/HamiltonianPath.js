/*
 * Construct a Hamiltonian path along a graph.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { getGraphObject } from '../utils/loadPuzzle';
import { ColourableHamilitonianPath } from '../PuzzleComponents/Graph';

import { allItemsColoured } from '../utils/evaluate';
import { loopGraph } from '../utils/graphTypes';
import {
    getNodesOnCircle,
    getLoopOfEdges,
    getLineOfEdges,
} from '../utils/graphUtils';


const R3 = Math.sqrt(3);

const puzzles = [
    {
        graph: loopGraph(6)
    }, {
        graph: {
            nodes: getNodesOnCircle(6),
            edges: getLoopOfEdges(6).concat([[1, 4]])
        }
    }, {
        graph: {
            nodes: getNodesOnCircle(6),
            edges: getLineOfEdges(6)
        }
    }, {
        graph: {
            nodes: getNodesOnCircle(6),
            edges: getLineOfEdges(6).concat([[2, 5]])
        }
    }, {
        graph: {
            nodes: getNodesOnCircle(6),
            edges: [[2, 3], [3, 4], [4, 5], [5, 0], [1, 4], [0, 3]]
        }
    }, {
        graph: {
            nodes: getNodesOnCircle(3, { r: 0.75 })
                    .concat(getNodesOnCircle(3, { r: 2 })),
            edges: getLoopOfEdges(3)
                    .concat(getLoopOfEdges(3, 5))
                    .concat([[2, 5]])
        }
    }, {
        graph: {
            nodes: getNodesOnCircle(3, { r: 0.75 })
                    .concat(getNodesOnCircle(3, { r: 2 }))
                    .concat([[-R3, -2], [R3, -2]]),
            edges: getLoopOfEdges(3)
                    .concat(getLoopOfEdges(3, 5))
                    .concat([[0, 3], [2, 5], [3, 6], [4, 7]])
        }
    }, {
        graph: {
            nodes: getNodesOnCircle(3, { r: 0.75 })
                    .concat(getNodesOnCircle(3, { r: 2 }))
                    .concat([[-R3, -2], [R3, -2]]),
            edges: getLoopOfEdges(3)
                    .concat(getLoopOfEdges(3, 5))
                    .concat([[2, 5], [3, 6], [4, 7], [5, 6], [5, 7]])
        }
    }
];

// Get a graph object with the first node coloured
const getGraph = ({ graph }) => {
    graph.size = 50;
    const graphObject = getGraphObject(graph);
    return graphObject;
};

const GraphTheory = () =>
    <PuzzlePage
        colourPalette={1}
        clearButton
        puzzles={puzzles}
        evaluate={({ nodes }) => allItemsColoured(nodes)}
        getPuzzleObject={getGraph}
        displayPuzzle={ColourableHamilitonianPath}
    />

export default GraphTheory;
