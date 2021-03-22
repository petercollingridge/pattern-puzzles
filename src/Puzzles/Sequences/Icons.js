import React from 'react';


const SequencesIcon1 = () => 
    <g className="graph-nodes">
        <rect className="colour-1" x="-37.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
        <rect className="colour-2" x="-22.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
        <rect className="colour-1" x="-7.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
        <rect className="colour-2" x="7.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
        <rect className="colour-1" x="22.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
    </g>

const SequencesIcon2 = () => 
    <g className="graph-nodes">
        {[1, 2, 1, 0, 1, 2, 1].map((colour, index) =>
            <rect
                key={index}
                className={"colour-" + colour}
                x={-42 + index * 12}
                y="-7.5"
                width="12" height="12" rx="2" ry="2" />
        )}
    </g>

const SequencesIcon3 = () => <g>
    <defs>
        <g id="triangle" className="graph-edges">
            <line x1="-15" y1="13" x2="0" y2="-13" />
            <line x1="-15" y1="13" x2="15" y2="13" />
            <line x1="0" y1="-13" x2="15" y2="13" />
        </g>
        <g id="triangle-1">
            <use href="#triangle" />
            <g className="graph-nodes">
                <circle className="colour-1" cx="-15" cy="13" r="7" />
                <circle className="colour-2" cx="0" cy="-13" r="7" />
                <circle className="colour-1" cx="15" cy="13" r="7" />
            </g>
        </g>
        <g id="triangle-2">
            <use href="#triangle" />
            <g className="graph-nodes">
                <circle className="colour-2" cx="-15" cy="13" r="7" />
                <circle className="colour-1" cx="0" cy="-13" r="7" />
                <circle className="colour-2" cx="15" cy="13" r="7" />
            </g>
        </g>
    </defs>

    <use href="#triangle-1" transform="translate(-34, -4) scale(0.45)"/>
    <use href="#triangle-2" transform="translate(-11, -4) scale(0.45)"/>
    <use href="#triangle-1" transform="translate(11, -4) scale(0.45)"/>
    <use href="#triangle-2" transform="translate(34, -4) scale(0.45)"/>
</g>

export default [
    SequencesIcon1,
    SequencesIcon2,
    SequencesIcon3,
];
