import React from 'react';

export const Reflection1 = () => <svg viewBox="-50 -50 100 100">
    <defs>
        <g id="reflection-1-puzzle">
            <g className="graph-edges">
                <line x1="12" y1="0" x2="-11" y2="-15" />
                <line x1="12" y1="0" x2="-11" y2="15" />
                <line x1="-11" y1="-15" x2="-11" y2="15" />
            </g>
            <g className="graph-nodes">
                <circle color="rgb(196, 20, 96)" cx="12" cy="0" r="5" />
                <circle color="rgb(20, 146, 196)" cx="-11" cy="15" r="5" />
                <circle color="rgb(20, 146, 196)" cx="-11" cy="-15" r="5" />
            </g>
        </g>
    </defs>

    <circle className="spotlight" cx="0" cy="0" r="49" />
    <line className="reflection-line" y1="-50" y2="50" />

    <use href="#reflection-1-puzzle" transform="translate(-20)"/>
    <use href="#reflection-1-puzzle" transform="translate(20) scale(-1, 1)"/>
</svg>
