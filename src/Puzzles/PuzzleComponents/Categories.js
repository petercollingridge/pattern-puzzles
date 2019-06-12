import React from 'react';
import { getPointsOnACircle } from '../../utils/graphUtils';
import { getColourClassName, getClickToColour } from './utils';


const getCirclePackedInCircle = (R, n) => {
    const phi = Math.PI * (0.5 - 1 / n);
    const cPhi = Math.cos(phi);
    const r = R / (1 + cPhi);
    const points = getPointsOnACircle(n, { r });

    return {
        categoryPositions: points,
        categorySize: r * cPhi
    };
};

export const Categories = ({ size, categories, colourCategory }) => {
    const { categoryPositions, categorySize } = getCirclePackedInCircle(size, categories.length);

    return <g>
        { categories.map((category, i) => {
            let transform = `translate(${ categoryPositions[i][0] } ${ categoryPositions[i][1] })`;
            if (category.rotate) {
                transform += ` rotate(${ category.rotate })`;
            }

            return <g key={i} transform={transform}>
                <circle
                    className={'category ' + getColourClassName(category)}
                    onClick={getClickToColour(colourCategory, category, i)}
                    r={categorySize * 0.9}
                    />
                <g className="no-pointer">
                    { category.component }
                </g>
            </g>
        })}
    </g>
}
