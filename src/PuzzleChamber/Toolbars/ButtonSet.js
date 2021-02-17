import React from 'react';
import { nTimes } from '../../utils/common';


// Size of chamber
const TOOLBAR_R = 136;

// Angle between button
const DELTA_ANGLE = Math.PI / 18;

function getPositionsAroundCircle(n, r, baseAngle=0) {
    const direction = baseAngle < 0 ? 1 : -1;
    const startAngle = baseAngle - direction * (DELTA_ANGLE * (n - 1) / 2);

    // Array of button positions
    return nTimes(n, (_, i) => {
        const angle = startAngle + direction * i * DELTA_ANGLE;
        return {
            angle,
            x: r * Math.cos(angle),
            y: r * Math.sin(angle)
        }
    });
}

function ButtonSet({ buttons, startAngle }) {
    const r = 8;
    const positionR = TOOLBAR_R + r;
    const positions = getPositionsAroundCircle(buttons.length, positionR, startAngle);

    return (
        <g className="toolbar" role="radiogroup">
            {
                buttons.map(({ component, ...props }, index) => {
                    const position = positions[index];
                    const Component = component;
                    props.angle = position.angle;
                    return (
                        <Component
                            key={index}
                            role="radio"
                            cx={position.x}
                            cy={position.y}
                            r={r}
                            {...props}
                        />
                    );
                })
            }
        </g>
    );
}

export default ButtonSet;
