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
            selectedColour: null
        }
    }

    render() {
        const colourPalette = this.props.colourPalette;

        //  Pass selected colour to children
        const children = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { selectedColour: this.state.selectedColour })
        );

        const style = this.state.selectedColour ? { color: COLOURS[this.state.selectedColour] } : {};
        const className = this.state.selectedColour ? "colour-selected" : "";

        return <main>
            <Link to="/" className="menu-button back-button">
                <svg viewBox="-10 -10 20 20">
                    <circle r="9" />
                </svg>
            </Link>

            <Link to="/" className="menu-button next-puzzle-button">
                <svg viewBox="-10 -10 20 20">
                    <circle r="9" />
                </svg>
            </Link>

            <svg id="puzzle-chamber" viewBox="-128 -128 256 256" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="shadow-filter" x="0" y="0" width="120%" height="120%">
                        <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2"/>
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>

                <g id="puzzle" className={className} style={style}>
                    { children }
                </g>

                <circle id="chamber-window" r="145" />
                <Toolbar 
                    puzzle={this}
                    nColours={colourPalette}
                    selectedColour={this.state.selectedColour}
                />
            </svg>
        </main>
    }
};
