/*
 * Colour all nodes on a graph such that no edges joins two nodes of the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import Graph from './PuzzleComponents/Graph';
import { getTwoGraphObjects } from './puzzleLoaders';
import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';
import { allItemsColoured, sequencesMatch } from '../utils/evaluationUtils';


const puzzles1 = [
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

const puzzles2 = [
	{
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 1, 2], {dy: 0.25}),
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

const Transformation = ({ puzzles, transform }) => {
	const evaluate = (blank, { target }) => {
		return allItemsColoured(blank.nodes) && sequencesMatch(blank.nodes, target.nodes, 'colour');
	}

	const displayGraph = (page, {target, blank}) => <g>
        <g transform="translate(-50)">
            <Graph page={page} {...target} />
        </g>
        <g transform={"translate(50) " + transform }>
            <Graph page={page} {...blank} />
        </g>

        <line className="reflection-line" y1="-200" y2="200" />
    </g>

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getTwoGraphObjects}
		displayPuzzle={displayGraph} />;
};

export const Reflection1 = () => <Transformation puzzles={puzzles1} transform="scale(-1 1)"/>

export const Rotation1 = () => <Transformation puzzles={puzzles2} transform="rotate(180)"/>
