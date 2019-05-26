import React from 'react';


const TOOLBAR_R = 112;
const DELTA_ANGLE = Math.PI / 16;


export default function ({ puzzle, nColours }) {
    const r = 6;
    let angle = Math.PI - DELTA_ANGLE * (nColours - 1) / 2;

    const colours = [];
    for (let i = 1; i <= nColours; i++) {
        const cx = (TOOLBAR_R + r) * Math.cos(angle);
        const cy = (TOOLBAR_R + r) * Math.sin(angle);

        colours.push(
            <circle
                className={"colour-palette colour-" + i}
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                onClick={() => puzzle.setState({ selectedColour: i})}
            />
        );
        angle += DELTA_ANGLE;
    }

    return <g id="toolbar">
        <g className="colour-pallete">
            { colours }
        </g>
    </g>;
}
