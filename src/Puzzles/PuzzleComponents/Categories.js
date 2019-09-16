import React from 'react';
import { getPointsOnACircle } from '../utils/graphUtils';
import { isColourable } from './utils';


const getCirclePackedInCircle = (R, n) => {
    const phi = Math.PI * (0.5 - 1 / n);
    const cPhi = Math.cos(phi);
    const r = R / (1 + cPhi);
    const points = getPointsOnACircle(n, { r });

    return {
        scale: cPhi / (1 + cPhi),
        categorySize: r * cPhi,
        categoryPositions: points
    };
};

export const Categories = ({ size, categories, chamber }) => {
    const { scale, categorySize, categoryPositions } = getCirclePackedInCircle(size, categories.length);

    return <g>
        { categories.map((category, i) => {
            let transform = `translate(${ categoryPositions[i][0] } ${ categoryPositions[i][1] })`;
            if (category.rotate) {
                transform += ` rotate(${ category.rotate })`;
            }

            return <g key={i} transform={transform}>
                <circle
                    {...isColourable(category, chamber, { className: 'category' })}
                    r={categorySize * 0.95}
                    />
                <g className="no-pointer" transform={`scale(${ scale * 2 } ${ scale * 2 })`}>
                    { category.component }
                </g>
            </g>
        })}
    </g>
}
