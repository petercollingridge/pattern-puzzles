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

export default class Puzzle extends React.Component {
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

    nextPuzzle() {
        if (this.state.index < this.props.puzzles.length - 1) {
            const index = this.state.index + 1;
            this.setState({
                index,
                solved: false,
                selectedColour: null
            });
        } else {

        }
    }

    render() {
        const { puzzles, getPuzzle } = this.props;
        const { index, selectedColour, solved } = this.state;

        const colourPalette = puzzles[index].colourPalette;
        const puzzleElement = getPuzzle(this, index);

        // Determine what the selected colour is if we have selected one
        const style = selectedColour ? { color: COLOURS[selectedColour] } : {};
        const className = selectedColour ? "colour-selected" : "";

        return <main>
            <Link to="/" className="menu-button back-button">
                <svg viewBox="-10 -10 20 20">
                    <circle r="9" />
                </svg>
            </Link>

            { solved &&
                <div className="menu-button next-puzzle-button">
                    <svg viewBox="-10 -10 20 20">
                        <circle r="9" onClick={this.nextPuzzle}/>
                    </svg>
                </div>
            }

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
