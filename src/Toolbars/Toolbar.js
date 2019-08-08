import React from 'react';
import { SVGButton } from './Button';


const TOOLBAR_R = 136;
const DELTA_ANGLE = Math.PI / 18;

export default function ({
    puzzle,
    colours,
    clearPuzzle,
    selectedColour
}) {
    const r = 8;
    const positionR = TOOLBAR_R + r;

    const nColours = colours.length;
    const nButtons = nColours + (clearPuzzle ? 1 : 0);
    const startAngle = Math.PI - DELTA_ANGLE * (nButtons - 1) / 2;

    // Array of button positions
    const position = Array(nButtons)
        .fill()
        .map((_, i) => {
            const angle = startAngle + i * DELTA_ANGLE;
            return {
                angle,
                x: positionR * Math.cos(angle),
                y: positionR * Math.sin(angle)
            }
        });

    const buttons = [];
    for (let i = 0; i < nColours; i++) {
        const { x, y } = position[i];
        const color = i + 1;
        const setColour = () => puzzle.setState({ selectedColour: color });

        let className = `colour-palette colour-${ color }`;
        if (selectedColour === color) {
            className += ' selected';
        }

        const button = <SVGButton
            className={className}
            role="radio"
            aria-checked={selectedColour === color}
            key={i}
            cx={x}
            cy={y}
            r={r}
            onClick={setColour}
        />

        if (colours[i] > -1) {
            //  Indicate number of times we can use this colour
            buttons.push(<g key={i}>
                { button }
                <text x={x} y={y} fill="white">{ colours[i] }</text>
            </g>);
        } else {
            buttons.push(button);
        }

    }

    if (clearPuzzle) {
        const { x, y } = position.pop();
        buttons.push(<SVGButton
            className="colour-palette"
            color="white"
            key="clear-button"
            cx={x}
            cy={y}
            r={r}
            onClick={clearPuzzle}
        />);
    }

    let selectColourIndicator = "selected-colour-indicator";
    if (selectedColour) {
        selectColourIndicator += ` colour-${selectedColour}`;
    }

    return <g className="toolbar">
        <circle className={selectColourIndicator} r="132" />
        <g className="colour-palette" role="radiogroup">
            { buttons }
        </g>
    </g>;
}
