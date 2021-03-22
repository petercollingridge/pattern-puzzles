/*
 * Colour all nodes on a graph such that no edges joins two nodes of the same colour.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { Graph, ColourableGraph } from '../PuzzleComponents/Graph';
import { getGraphAndUncolouredCopy } from '../utils/loadPuzzle';
import { getNodesOnCircle, getLoopOfEdges, getLineOfEdges } from '../utils/graphUtils';
import { graphNodesAreSameColour, samePatternButDifferent } from '../utils/evaluate';


const identity1 = [
	{
		colourPalette: 1,
        nodes: [[0, 0, 1]]
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2]),
        edges: getLineOfEdges(2)
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
        colourPalette: 4,
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

const colour1 = [
	{
		colourPalette: 1,
        nodes: [[0, 0, 2]]
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2]),
        edges: getLineOfEdges(2)
	}, {
		colourPalette: 2,
        nodes: [[-1, 0, 1], [0, 0, 2], [1, 0, 1]],
        edges: getLineOfEdges(3)
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([1, 2, 3]),
        edges: getLoopOfEdges(3)
	}, {
		colourPalette: 2,
        nodes: getNodesOnCircle([1, 2, 1, 2]),
        edges: getLoopOfEdges(4)
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([1, 2, 3, 2]).concat([[0, 0, 3]]),
        edges: getLoopOfEdges(4).concat([[0, 4], [1, 4] ,[2, 4], [3, 4]])
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([1, 2, 3, 1, 2, 3]),
        edges: getLoopOfEdges(6)
	}, {
		colourPalette: 3,
        nodes: getNodesOnCircle([2, 3, 1, 3, 2, 1]),
        edges: getLoopOfEdges(6)
	}
];

const Transformation = ({ puzzles, transform, evaluate }) => {
	const displayGraphs = (puzzle, chamber) =>
		<g>
			<g transform="translate(-60)">
				<Graph {...puzzle.target} />
			</g>
			<g transform={ "translate(60) " + transform }>
				{ ColourableGraph(puzzle.blank, chamber) }
			</g>

			<line className="reflection-line" y1="-200" y2="200" />
		</g>

	return <PuzzlePage
		puzzles={puzzles}
		evaluate={evaluate}
		getPuzzleObject={getGraphAndUncolouredCopy}
		displayPuzzle={displayGraphs} />
};

const patternMatchGraphs = ({ blank, target }) => {
    const seq1 = blank.nodes.map(node => node.colour);
    const seq2 = target.nodes.map(node => node.colour);
    return samePatternButDifferent(seq1, seq2);
}

const puzzles = [
    <Transformation puzzles={identity1} transform="" evaluate={graphNodesAreSameColour} />,
    <Transformation puzzles={reflection1} transform="scale(-1 1)" evaluate={graphNodesAreSameColour}/>,
    <Transformation puzzles={rotation1} transform="rotate(180)" evaluate={graphNodesAreSameColour} />,
    <Transformation puzzles={colour1} transform="" evaluate={patternMatchGraphs} />,
];

const Transformations = (n) => puzzles[n];

export default Transformations;
