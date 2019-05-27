import React from 'react';
import {
	getNodesOnCircle,
	getLoopOfEdges,
	allNodesColoured,
	allEdgeNodesDifferent
} from '../utils/graphUtils';

import Puzzle from './BasePuzzle';
import Graph from './PuzzleComponents/Graph';


const puzzles = [
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

export default class ColourGraphPuzzle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			index: props.match.params.n || 0,
			solved: false,
		};

		this.evaluate = this.evaluate.bind(this);
		this.nextPuzzle = this.nextPuzzle.bind(this);
	}

	evaluate({ nodes, edges }) {
		if (allNodesColoured(nodes) &&
			allEdgeNodesDifferent(edges)) {
				this.setState({
					solved: true
				});
		}
	}

	//  TODO: move to general puzzle wrapper
	nextPuzzle() {
		if (this.state.index < puzzles.length - 1) {
			this.setState({
				index: this.state.index + 1
			});
		} else {

		}
	}

	render() {
		const puzzle = puzzles[this.state.index];

		return <Puzzle
			key={this.state.index}
			colourPalette={puzzle.colourPalette}
			solved={this.state.solved}
			nextPuzzle={this.nextPuzzle}
		>
			<Graph key={this.state.index} puzzle={this} size={32} {...puzzle} />
		</Puzzle>
	}
};
