import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { parse } from 'query-string';

import Toolbar from '../Toolbars/Toolbar';
import Button from '../Toolbars/Button';

import './puzzle.css';


const COLOURS = [
    'rgb(30, 20, 20)',
    'rgb(20, 146, 196)',
    'rgb(196, 20, 96)',
    'rgb(20, 198, 96)',
    'rgb(220, 220, 20)',
];

class PuzzlePage extends React.Component {
    constructor(props) {
        super(props);
   
        const queryString = parse(props.location.search);
        const index = parseInt(queryString.q) || 0;

        this.state = {
            index,
			solved: false,
            selectedColour: null,
        }

        this.update = this.update.bind(this);
        this.getPuzzle = this.getPuzzle.bind(this);
        this.nextPuzzle = this.nextPuzzle.bind(this);
    }

    componentDidMount() {
        // Load the first puzzle
        this.getPuzzle(this.state.index);
    }

    getPuzzle(index) {
        const { getPuzzleObject, puzzles } = this.props;
        const puzzle = puzzles[index];

        if (puzzle) {
            this.setState({
                puzzle: getPuzzleObject(puzzle)
            });
        }
    }

    nextPuzzle() {
        const nextState = this.state.index + 1;
        this.setState({
            index: nextState,
            solved: false,
            selectedColour: null
        });
        this.getPuzzle(nextState);
    }

    // Child element has updated so evaluate to see if puzzle has been solved
    update(puzzle) {
        const solved = this.props.evaluate(puzzle);
        this.setState({ puzzle, solved });
    }

    getNextPuzzleButton() {
        // Only show button if the puzzle has been solved
        if (!this.state.solved) { return null; }

        if (this.state.index < this.props.puzzles.length - 1) {
            // Button to go to the next puzzle
            return <div className="menu-button next-puzzle-button" aria-label="Next puzzle">
                <Button onClick={this.nextPuzzle} flashing/>
            </div>
        } else {
            // Button to go back to the home page
            return <Link to="/pattern-puzzles/" className="menu-button next-puzzle-button" aria-label="Puzzle completed">
                <Button flashing/>
            </Link>
        }
    }

    render() {
        const { index, puzzle, selectedColour } = this.state;
        if (!puzzle) { return null; }

        // Determine what the selected colour is if we have selected one
        const style = selectedColour ? { color: COLOURS[selectedColour] } : {};
        const className = selectedColour ? "colour-selected" : "";

        return <main>
            <nav>
                <Link to="/pattern-puzzles/" className="menu-button back-button" aria-label="Back to menu">
                    <Button />
                </Link>

                { this.getNextPuzzleButton() }
            </nav>

            <svg id="puzzle-chamber" viewBox="-128 -128 256 256" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <filter id="shadow-filter">
                        <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2"/>
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                    <filter id="glow-filter" x="-200%" y="-200%" width="400%" height="400%">
                        <feGaussianBlur stdDeviation="1.5" result="colouredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                <rect className="background" x="-200" y="-200" width="400" height="400" />

                <g id="puzzle" key={index} className={className} style={style}>
                    { this.props.displayPuzzle(puzzle, selectedColour, this.update) }
                </g>

                <circle id="chamber-window" r="212" />
                <Toolbar 
                    puzzle={this}
                    nColours={puzzle.colourPalette}
                    selectedColour={selectedColour}
                />
            </svg>
        </main>
    }
};

export default withRouter(PuzzlePage);
