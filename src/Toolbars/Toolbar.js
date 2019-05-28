import React from 'react';


const TOOLBAR_R = 112;
const DELTA_ANGLE = Math.PI / 16;

export default function ({ puzzle, nColours, selectedColour }) {
    const r = 6;
    let angle = Math.PI - DELTA_ANGLE * (nColours - 1) / 2;

    const colours = [];
    for (let i = 1; i <= nColours; i++) {
        const cx = (TOOLBAR_R + r) * Math.cos(angle);
        const cy = (TOOLBAR_R + r) * Math.sin(angle);
        let className = `colour-palette colour-${i}`;
        if (selectedColour === i) {
            className += ' selected';
        }

        colours.push(
            <circle
                className={className}
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                onClick={() => puzzle.setState({ selectedColour: i})}
            />
        );

        angle += DELTA_ANGLE;
    }

    let selectColourIndicator = "selected-colour-indicator";
    if (selectedColour) {
        selectColourIndicator += ` colour-${selectedColour}`;
    }

    return <g className="toolbar">
        <circle className={selectColourIndicator} r="109" />
        <g className="colour-pallete">
            { colours }
        </g>
    </g>;
}