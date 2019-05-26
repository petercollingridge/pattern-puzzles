import React from 'react';
import Toolbar from '../Toolbars/Toolbar';

import './puzzle.css';


export default class Puzzle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedColour: null
        }
    }

    render() {
        const colourPalette = this.props.colourPalette;
        
        return <main>
            <svg id="puzzle-chamber" viewBox="-128 -128 256 256" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="shadow-filter" x="0" y="0" width="120%" height="120%">
                        <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2"/>
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>

                <g id="puzzle"></g>

                <circle id="chamber-window" r="144" />
                <Toolbar nColours={colourPalette} puzzle={this} />
            </svg>
        </main>
    }
};
