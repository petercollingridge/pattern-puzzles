import React from 'react';


const TOOLBAR_R = 136;
const DELTA_ANGLE = Math.PI / 18;

const handleKeyDown = (evt, callback) => {
    if (evt.key === 'Enter' || evt.keyCode === 32) {
        callback();
    }
};

export default function ({ puzzle, nColours, selectedColour }) {
    const r = 8;
    let angle = Math.PI - DELTA_ANGLE * (nColours - 1) / 2;

    const colours = [];
    for (let i = 1; i <= nColours; i++) {
        const cx = (TOOLBAR_R + r) * Math.cos(angle);
        const cy = (TOOLBAR_R + r) * Math.sin(angle);
        
        let className = `colour-palette colour-${i}`;
        if (selectedColour === i) {
            className += ' selected';
        } else if (i === 1 && !selectedColour) {
            className += ' flashing';
        }

        const setColour = () => puzzle.setState({ selectedColour: i });

        colours.push(
            <circle
                className={className}
                role="radio"
                aria-checked={selectedColour === i}
                tabIndex="0"
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                onClick={setColour}
                onKeyDown={(evt) => handleKeyDown(evt, setColour) }
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
