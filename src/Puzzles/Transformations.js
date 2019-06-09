/*
 * Colour all nodes on a graph such that no edges joins two nodes of the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph, colourableGraph } from './PuzzleComponents/Graph';
import { getGraphAndUncolouredCopy } from './puzzleLoaders';
import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';
import { allItemsColoured, sequencesMatch } from '../utils/evaluation';


const identity1 = [
	{
		colourPalette: 1,
        nodes: [[0, 0, 1]]
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2]),
        edges: getLoopOfEdges(2)
	}, {
		colourPalette: 2,
        nodes: [[-1, 0, 1], [0, 0, 2], [1, 0, 1]],
        edges: [[0, 1], [1, 2]]
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([1, 2, 3], {offsetAngle: 30}),
        edges: getLoopOfEdges(3)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2, 1, 2]),
        edges: getLoopOfEdges(4)
	}, {
		colourPalette: 4,
        nodes: getNodesOnCircle([1, 2, 3, 4]),
        edges: getLoopOfEdges(4)
	}, {
        size: 24,
        colourPalette: 3,
        nodes: [[-1, -1, 1], [1, -1, 1], [-0.5, 0, 2], [0.5, 0, 3], [-1, 1, 3], [1, 1, 2]],
        edges: [[0, 2], [2, 3], [3, 1], [2, 4], [3, 5]]
    }, {
        size: 24,
        colourPalette: 3,
        nodes: [[-1.5, -1, 1], [-0.5, -1, 2], [0.5, -1, 1], [-0.5, 0, 1], [0.5, 0, 3], [-0.5, 1, 3], [0.5, 1, 4], [1.5, 1, 3]],
        edges: [[0, 1], [1, 2], [1, 3], [3, 4], [4, 6], [5, 6], [6, 7]]
    }
];

const reflection1 = [
	{
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2, 1], {offsetAngle: 30}),
        edges: getLoopOfEdges(3)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2, 2], {offsetAngle: 30}),
        edges: getLoopOfEdges(3)
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([1, 2, 3], {offsetAngle: 30}),
        edges: getLoopOfEdges(3)
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([1, 2, 1]),
        edges: getLoopOfEdges(3)
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([1, 2, 3]),
        edges: getLoopOfEdges(3)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 1, 1, 2]),
        edges: getLoopOfEdges(4)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 1, 2, 2]),
        edges: getLoopOfEdges(4)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2, 1, 2]),
        edges: getLoopOfEdges(4)
	}, {
		colourPalette: 4,
        nodes: getNodesOnCircle([1, 2, 3, 4]),
        edges: getLoopOfEdges(4)
	}
];

const rotation1 = [
	{
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 1, 2], { dy: 0.25 }),
		edges: getLoopOfEdges(3)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2], { offsetAngle: 90 }),
		edges: getLoopOfEdges(2)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2]),
		edges: getLoopOfEdges(2)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 1, 2, 2]),
		edges: getLoopOfEdges(4)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 1, 1, 2]),
		edges: getLoopOfEdges(4)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2, 1, 2]),
        edges: getLoopOfEdges(4)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2, 2], { dy: 0.25 }),
        edges: getLoopOfEdges(3)
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([1, 2, 3], { dy: 0.25 }),
		edges: getLoopOfEdges(3)
	}, {
		colourPalette: 4,
        nodes: getNodesOnCircle([1, 2, 3, 4]),
        edges: getLoopOfEdges(4)
	}
];

// Check the blank graph looks like the target
const evaluate = ({ blank, target }) => {
	return allItemsColoured(blank.nodes) &&
		sequencesMatch(blank.nodes, target.nodes, 'colour');
};

const Transformation = ({ puzzles, transform }) => {
	const displayGraphs = (page, {target, blank}) => <g>
        <g transform="translate(-50)">
            <Graph page={page} {...target} />
        </g>
        <g transform={"translate(50) " + transform }>
            <colourableGraph page={page} {...blank} />
        </g>

        <line className="reflection-line" y1="-200" y2="200" />
    </g>

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getGraphAndUncolouredCopy}
		displayPuzzle={displayGraphs} />
};

export const Identity1 = () => <Transformation puzzles={identity1} transform=""/>

export const Reflection1 = () => <Transformation puzzles={reflection1} transform="scale(-1 1)"/>

export const Rotation1 = () => <Transformation puzzles={rotation1} transform="rotate(180)"/>
