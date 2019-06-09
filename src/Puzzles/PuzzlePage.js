import React from 'react';
import { Link } from "react-router-dom";
import Toolbar from '../Toolbars/Toolbar';

import './puzzle.css';


const COLOURS = [
    'rgb(30, 20, 20)',
    'rgb(20, 146, 196)',
    'rgb(196, 20, 96)',
    'rgb(20, 198, 96)',
    'rgb(147, 20, 198)',
];

export default class PuzzlePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
			solved: false,
            selectedColour: null,
        }

        this.update = this.update.bind(this);
        this.getPuzzle = this.getPuzzle.bind(this);
        this.nextPuzzle = this.nextPuzzle.bind(this);
    }

    componentDidMount() {
        // Load the first puzzle
        this.getPuzzle(0);
    }

    getPuzzle(index) {
        const { getPuzzleObject, puzzles } = this.props;
        this.setState({
            puzzle: getPuzzleObject(puzzles[index]),
            colourPalette: puzzles[index].colourPalette
        });
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
        const solved = this.props.evaluate(puzzle)
        this.setState({ puzzle, solved });
    }

    getNextPuzzleButton() {
        // Only show button if the puzzle has been solved
        if (!this.state.solved) { return null; }

        if (this.state.index < this.props.puzzles.length - 1) {
            // Button to go to the next puzzle
            return <div className="menu-button next-puzzle-button" aria-label="Next puzzle">
                <svg viewBox="-10 -10 20 20">
                    <circle r="9" onClick={this.nextPuzzle}/>
                </svg>
            </div>
        } else {
            // Button to go back to the home page
            return <Link to="/pattern-puzzles/" className="menu-button next-puzzle-button" aria-label="Puzzle completed">
                <svg viewBox="-10 -10 20 20">
                    <circle r="9" />
                </svg>
            </Link>
        }
    }

    render() {
        const { index, puzzle, selectedColour, colourPalette } = this.state;
        if (!puzzle) { return null; }

        // Determine what the selected colour is if we have selected one
        const style = selectedColour ? { color: COLOURS[selectedColour] } : {};
        const className = selectedColour ? "colour-selected" : "";

        return <main>
            <nav>
                <Link to="/pattern-puzzles/" className="menu-button back-button" aria-label="Back to menu">
                    <svg viewBox="-10 -10 20 20">
                        <circle r="9" />
                    </svg>
                </Link>

                { this.getNextPuzzleButton() }
            </nav>

            <svg id="puzzle-chamber" viewBox="-128 -128 256 256" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="shadow-filter">
                        <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2"/>
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                    <filter id="glow-filter" x="-200%" y="-200%" width="400%" height="400%">
                        <feGaussianBlur stdDeviation="1" result="colouredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                <g id="puzzle" key={index} className={className} style={style}>
                    { this.props.displayPuzzle(puzzle, selectedColour, this.update) }
                </g>

                <circle id="chamber-window" r="145" />
                <Toolbar 
                    puzzle={this}
                    nColours={colourPalette}
                    selectedColour={selectedColour}
                />
            </svg>
        </main>
    }
};
