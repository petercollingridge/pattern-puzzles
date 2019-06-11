import React from 'react';
import { getColourClassName, getClickToColour } from './utils';

export const Category = ({ size, item }, colourNode) =>
    <g className="graph">
        <circle
            r={size}
            className={"category " + getColourClassName(noiteme)}
            onClick={getClickToColour(colourNode, item)}
            />
    </g>
