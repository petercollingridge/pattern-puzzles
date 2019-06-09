import React from 'react';
import { getColourClassName, getClickToColour } from './utils';


export const Map = ({ regions=[], colourItem }) =>
    <g className="graph">
        <g className="graph-nodes">
            { regions.map((region, i) =>
                <rect
                    key={i}
                    x={region.x}
                    y={region.y}
                    width={region.width}
                    height={region.height}
                    rx="3"
                    ry="3"
                    className={getColourClassName(region)}
                    onClick={getClickToColour(colourItem, region, i)}
                />
            )}
        </g>
    </g>
