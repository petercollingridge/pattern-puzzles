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
                <circle className="colour-2" cx="12" cy="0" r="5" />
                <circle className="colour-1" cx="-11" cy="15" r="5" />
                <circle className="colour-1" cx="-11" cy="-15" r="5" />
            </g>
        </g>
    </defs>

    <circle className="spotlight" cx="0" cy="0" r="49" />
    <line className="reflection-line" y1="-50" y2="50" />

    <use href="#reflection-1-puzzle" transform="translate(-20)"/>
    <use href="#reflection-1-puzzle" transform="translate(20) scale(-1, 1)"/>
</svg>

export const Rotation1 = () => <svg viewBox="-50 -50 100 100">
    <defs>
        <g id="rotation-1-puzzle">
            <g className="graph-edges">
                <line x1="-16" y1="13" x2="-2" y2="-13" />
                <line x1="-16" y1="13" x2="12" y2="13" />
                <line x1="-2" y1="-13" x2="12" y2="13" />
            </g>
            <g className="graph-nodes">
                <circle className="colour-1" cx="-16" cy="13" r="5" />
                <circle className="colour-2" cx="-2" cy="-13" r="5" />
                <circle className="colour-1" cx="12" cy="13" r="5" />
            </g>
        </g>
    </defs>

    <circle className="spotlight" cx="0" cy="0" r="49" />
    <line className="reflection-line" y1="-50" y2="50" />

    <use href="#rotation-1-puzzle" transform="translate(-20)"/>
    <use href="#rotation-1-puzzle" transform="translate(20) rotate(180)"/>
</svg>
