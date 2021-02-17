import React from 'react';
import { handleKeyDown, nTimes } from '../../utils/common';


export const SVGButton = (props) =>
    <circle
        r="9"
        role="button"
        tabIndex="0"
        onKeyDown={evt => handleKeyDown(evt, props.onClick)}
        {...props} />

// Get an array of dots around the colour button to show how many times we can use it
const showColourCounter = (n, colour, x, y, angle, r) => {
    if (!n) { return null; }
    const dAngle = Math.PI * 2 / (3 * n);
    angle += dAngle * (n - 1) / 2;

    return nTimes(n, (_, index) => (
        <circle
            key={index}
            className={`fill-${ colour }`}
            r={r * 0.3}
            cx={x + (r * 1.6) * Math.cos(angle - index * dAngle)}
            cy={y + (r * 1.6) * Math.sin(angle - index * dAngle)}
        />
    ));
}

export const ColourButton = ({
    colour,
    count,
    angle,
    puzzle,
    ...props,
}) => {
    const selectedColour = puzzle.state.selectedColour;
    const setColour = () => puzzle.setState({ selectedColour: colour });

    const button = (
        <SVGButton
            className={`colour-palette colour-${ colour }`}
            aria-checked={selectedColour === colour}
            r="8"
            onClick={setColour}
            {...props}
        />
    );

    if (count > 0) {
        return (
            <g key={colour}>
                { button }
                { showColourCounter(count, colour, props.cx, props.cy, angle, props.r) }
         </g>
        );
    } else {
        return button;
    }
};

export const Button = (props) =>
    <svg viewBox="-15 -15 31 31">
        <SVGButton r="9" {...props} />
    </svg>
