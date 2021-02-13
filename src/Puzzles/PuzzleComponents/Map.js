import React from 'react';
import { isColourable } from '../utils/isColourable';


export const Map = ({ regions=[], chamber }) =>
    <g className="graph">
        <g className="graph-nodes">
            { regions.map((item, i) =>
                <rect
                    key={i}
                    x={item.x}
                    y={item.y}
                    width={item.width}
                    height={item.height}
                    rx="3"
                    ry="3"
                    {...isColourable(item, chamber)}
                />
            )}
        </g>
    </g>

export const ColourableMap = (puzzle, chamber) =>
    <Map {...puzzle} chamber={chamber} />
