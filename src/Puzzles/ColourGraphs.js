/*
 * Colour all nodes on a graph such that no edges joins two nodes of the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { getGraphObject } from './puzzleLoaders';
import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';
import { graphIsChromatic } from '../utils/evaluation';


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
        nodes: getNodesOnCircle(3).concat(getNodesOnCircle(3, { r: 2, offsetAngle: 60 })),
        edges: getLoopOfEdges(3).concat([[0, 3], [1, 3], [1, 4], [2, 4], [0, 5], [2, 5]]),
    }, {
        colourPalette: 3,
        scale: 16,
        nodes: getNodesOnCircle(3).concat(getNodesOnCircle(3, { r: 4, offsetAngle: 60 })),
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

const puzzles = [puzzles1, puzzles2, puzzles3];

const ColourableGraph = (puzzle, selectedColour, update) => {
    const colourNode = nodeIndex => {
        puzzle.nodes[nodeIndex].colour = selectedColour;
        update(puzzle);
    };

    return <Graph {...puzzle} colourNode={colourNode}/>
};

export const ColourGraph = (n) =>
    <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={graphIsChromatic}
		getPuzzleObject={getGraphObject}
		displayPuzzle={ColourableGraph}
    />
