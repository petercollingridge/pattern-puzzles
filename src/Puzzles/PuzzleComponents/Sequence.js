import React from 'react';
import { getColourClassName, getClickToColour } from './utils';


export const Sequence = ({ sequence=[], colourItem }) => {
    const size = Math.min(24, 160 / sequence.length);
    const startX = -(sequence.length * size) / 2;

    return <g className="sequence">
        { sequence.map((item, i) => {
            return <rect
                key={i}
                x={startX + i * size }
                y={-size / 2}
                width={size - 1}
                height={size - 1}
                rx="3"
                ry="3"
                className={getColourClassName(item)}
                onClick={getClickToColour(colourItem, item, i)}
            />
        })}
    </g>
};
