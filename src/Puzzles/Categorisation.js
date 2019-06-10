import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { getCategoryObjects, getGraphObject } from './puzzleLoaders';
import { getLinearGraph } from '../utils/graphUtils';
import { allItemsColoured, sequencesMatch } from '../utils/evaluation';


const puzzle1 = [
	{
		colourPalette: 2,
        categories: [
            [getGraphObject({ nodes: [[0, 0, 1]] })],
            [getGraphObject({ nodes: [[0, 0, 2]] })],
            // [getGraphObject({ nodes: [[0, 0, 1]] })],
            // [getGraphObject({ nodes: [[0, 0, 1]] })],
        ]
    }
];

const getCirclePackedInCircle = (R, n) => {
    const dAngle = Math.PI * 2 / n;
    const phi = Math.PI * (0.5 - 1 / n);
    const cPhi = Math.cos(phi);
    const d = R / (1 + cPhi);
    const r = d * cPhi;

    const circles = [];
    for (let i = 0; i < n; i++) {
        circles.push([
            d * Math.sin((i - 0.5) * dAngle),
            d * Math.cos((i - 0.5) * dAngle),
            r
        ]);
    }

    return circles;
}

const displayCategories = (puzzle, selectedColour, update) => {
    const outerR = 100;
    const categories = getCirclePackedInCircle(outerR, puzzle.length);

    return <g>
        { categories.map((category, i) =>
        <g key={i} transform={`translate(${ category[0] } ${ category[1] })`}>
                <circle className="colourable category" r={category[2]} />
                <Graph {...puzzle[i].item} />
            </g>)
        }
    </g>
}

const evaluate = (blank, target) => {
    return true;
};

const Categorisation = ({ puzzles }) =>
    <PuzzlePage
        puzzles={puzzles}
        evaluate={evaluate}
        getPuzzleObject={getCategoryObjects}
        displayPuzzle={displayCategories} />

export const Categorisation1 = () => <Categorisation puzzles={puzzle1} />
