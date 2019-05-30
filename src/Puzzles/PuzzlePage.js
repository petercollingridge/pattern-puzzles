import React from 'react';
import { Link } from "react-router-dom";
import Toolbar from '../Toolbars/Toolbar';

import './puzzle.css';


const COLOURS = [
    'rgb(30, 20, 20)',
    'rgb(20, 146, 196)',
    'rgb(196, 20, 96)',
    'rgb(147, 20, 198)',
    'rgb(20, 198, 96)',
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
        this.nextPuzzle = this.nextPuzzle.bind(this);
    }

    update(childState) {
        this.setState({
            solved: this.props.evaluate(childState)
        });
    }

    getNextPuzzleButton() {
        if (!this.state.solved) { return null; }

        if (this.state.index < this.props.puzzles.length - 1) {
            return <div className="menu-button next-puzzle-button" ariaLabel="Next puzzle">
                <svg viewBox="-10 -10 20 20">
                    <circle r="9" onClick={this.nextPuzzle}/>
                </svg>
            </div>
        } else {
            return <Link to="/" className="menu-button next-puzzle-button" ariaLabel="Puzzle completed">
                <svg viewBox="-10 -10 20 20">
                    <circle r="9" />
                </svg>
            </Link>
        }
    }

    nextPuzzle() {
        this.setState({
            index: this.state.index + 1,
            solved: false,
            selectedColour: null
        });
    }

    render() {
        const { puzzles, getPuzzleObject, displayPuzzle } = this.props;
        const { index, selectedColour } = this.state;

        const colourPalette = puzzles[index].colourPalette;
        const puzzleObject = getPuzzleObject(puzzles[index]);
        const puzzleElement = displayPuzzle(this, puzzleObject);

        // Determine what the selected colour is if we have selected one
        const style = selectedColour ? { color: COLOURS[selectedColour] } : {};
        const className = selectedColour ? "colour-selected" : "";

        return <main>
            <nav>
                <Link to="/" className="menu-button back-button" ariaLabel="Back to menu">
                    <svg viewBox="-10 -10 20 20">
                        <circle r="9" />
                    </svg>
                </Link>

                { this.getNextPuzzleButton() }
            </nav>

            <svg id="puzzle-chamber" viewBox="-128 -128 256 256" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="shadow-filter" x="0" y="0" width="120%" height="120%">
                        <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2"/>
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>

                <g id="puzzle" key={index} className={className} style={style}>
                    { puzzleElement }
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
