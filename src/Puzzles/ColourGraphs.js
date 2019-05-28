import React from 'react';
import {
	allNodesColoured,
	allEdgeNodesDifferent
} from '../utils/graphUtils';

import Puzzle from './BasePuzzle';
import Graph from './PuzzleComponents/Graph';


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
		if (this.state.index < this.props.puzzles.length - 1) {
			this.setState({
				index: this.state.index + 1,
				solved: false
			});
		} else {

		}
	}

	render() {
		const puzzle = this.props.puzzles[this.state.index];

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
