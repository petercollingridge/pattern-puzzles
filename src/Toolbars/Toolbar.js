import React from 'react';
import { SVGButton } from './Button';


const TOOLBAR_R = 136;
const DELTA_ANGLE = Math.PI / 18;

export default function ({
    puzzle,
    nColours,
    clearButton,
    selectedColour
}) {
    const r = 8;
    const positionR = TOOLBAR_R + r;
    const nButtons = nColours + (clearButton ? 1 : 0);
    let angle = Math.PI - DELTA_ANGLE * (nButtons - 1) / 2;

    // Array of button positions
    const position = Array(nButtons)
        .fill()
        .map((_, i) => ({
            x: positionR * Math.cos(angle + i * DELTA_ANGLE),
            y: positionR * Math.sin(angle + i * DELTA_ANGLE)
        }));

    const colours = [];
    for (let i = 1; i <= nColours; i++) {
        const { x, y } = position[i - 1];
        const setColour = () => puzzle.setState({ selectedColour: i });
        let className = `colour-palette colour-${i}`;

        if (selectedColour === i) {
            className += ' selected';
        }

        colours.push(
            <SVGButton
                className={className}
                role="radio"
                aria-checked={selectedColour === i}
                key={i}
                cx={x}
                cy={y}
                r={r}
                onClick={setColour}
            />
        );

        angle += DELTA_ANGLE;
    }

    let selectColourIndicator = "selected-colour-indicator";
    if (selectedColour) {
        selectColourIndicator += ` colour-${selectedColour}`;
    }

    return <g className="toolbar">
        <circle className={selectColourIndicator} r="132" />
        <g className="colour-palette" role="radiogroup">
            { colours }
        </g>
    </g>;
}
