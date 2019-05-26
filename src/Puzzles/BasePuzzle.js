import React from 'react';

import './puzzle.css';


export default function Puzzle(props) {
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
            <g id="toolbar"></g>
        </svg>
    </main>
};
