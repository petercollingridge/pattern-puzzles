/*
 * Colour all nodes on a graph such that no edges joins two nodes of the same colour.
 */

import React from 'react';
import {
    getNodesOnCircle,
    getLoopOfEdges,
	allNodesColoured,
    allEdgeNodesDifferent,
} from '../utils/graphUtils';

import PuzzlePage from './PuzzlePage';
import Graph from './PuzzleComponents/Graph';
import { getGraphObject } from '../utils/graphUtils';


const puzzles1 = [
	{
		colourPalette: 1,
		nodes: [[0, 0]]
	}, {
		colourPalette: 2,
		nodes: [[-1, 0], [1, 0]],
		edges: [[0, 1]],
	}, {
		colourPalette: 2,
		nodes: [[-2, 0], [0, 0], [2, 0]],
		edges: [[0, 1], [1, 2]],
	}, {
		colourPalette: 3,
		nodes: getNodesOnCircle(3),
		edges: getLoopOfEdges(3),
	}, {
		colourPalette: 2,
		nodes: getNodesOnCircle(4),
		edges: getLoopOfEdges(4),
	}, {
		colourPalette: 3,
		nodes: getNodesOnCircle(4),
		edges: getLoopOfEdges(4).concat([[1, 3]]),
	}, {
		colourPalette: 4,
		nodes: getNodesOnCircle(4),
		edges: getLoopOfEdges(4).concat([[1, 3], [0, 2]]),
	}, {
		colourPalette: 3,
		nodes: [[0, 0]].concat(getNodesOnCircle(4)),
		edges: getLoopOfEdges(1, 4).concat([[0, 1], [0, 2], [0, 3], [0, 4]]),
	}
];

const puzzles2 = [
    {
        colourPalette: 2,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6),
    }, {
        colourPalette: 2,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[1, 4]]),
    }, {
        colourPalette: 2,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 3]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4], [2, 4]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4], [1, 4], [2, 4]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4], [1, 4], [1, 3]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: getNodesOnCircle(3).concat(getNodesOnCircle(3, 2, Math.PI / 3)),
        edges: getLoopOfEdges(3).concat([[0, 3], [1, 3], [1, 4], [2, 4], [0, 5], [2, 5]]),
    }, {
        colourPalette: 3,
        scale: 16,
        nodes: getNodesOnCircle(3).concat(getNodesOnCircle(3, 4, Math.PI / 3)),
        edges: getLoopOfEdges(3)
            .concat(getLoopOfEdges(3, 5))
            .concat([[0, 3], [1, 3], [1, 4], [2, 4], [0, 5], [2, 5]]),
    }
];

// TODO: Give more colourPalette than required
const puzzles3 = [
    {
        colourPalette: 2,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6),
    }, {
        colourPalette: 2,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[2, 5]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[0, 2], [2, 4]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[0, 2], [2, 4], [0, 4]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[1, 3], [0, 4], [2, 5]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[2, 4], [1, 3], [0, 4], [1, 5]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[0, 3], [1, 4], [2, 5]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[0, 2], [1, 3], [2, 4], [3, 5], [4, 0], [5, 1]]),
    }
];

const ColourGraph = ({ puzzles }) => {
	const evaluate = ({ nodes, edges }) => 
		allNodesColoured(nodes) && allEdgeNodesDifferent(edges);
	
	const getGraph = puzzle => getGraphObject(puzzle.nodes, puzzle.edges);

	const displayGraph = (page, graphObject) => <Graph page={page} {...graphObject} size={32} nodeRadius={8} />

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getGraph}
		displayPuzzle={displayGraph} />;
};

export const ColourGraph1 = (props) => <ColourGraph puzzles={puzzles1} {...props} />

export const ColourGraph2 = (props) => <ColourGraph puzzles={puzzles2} {...props} />

export const ColourGraph3 = (props) => <ColourGraph puzzles={puzzles3} {...props} />
