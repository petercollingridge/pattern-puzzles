import React from 'react';
import { getNodesOnCircle, getLoopOfEdges, getGraphObject } from '../utils/graphUtils';

import Puzzle from './BasePuzzle';
import Graph from './PuzzleComponents/Graph';


const puzzles = [
	/*{
		// colourPalette: 1,
		// nodes: [[0, 0]]
	},*/{
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

class ColourGraphPuzzle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			index: props.match.params.n || 0
		};
	}

	render() {
		const puzzle = puzzles[this.state.index];
		const graph = getGraphObject(puzzle.nodes, puzzle.edges, 32);

		return <Puzzle colourPalette={puzzle.colourPalette}>
			<Graph {...graph} />
		</Puzzle>
	}
}

export default ColourGraphPuzzle;
