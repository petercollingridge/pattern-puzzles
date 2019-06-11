import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { getCategoryObjects, getGraphObject } from './puzzleLoaders';
import { getLinearGraph, getPointsOnACircle } from '../utils/graphUtils';
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
    const phi = Math.PI * (0.5 - 1 / n);
    const cPhi = Math.cos(phi);
    const r = R / (1 + cPhi);
    const points = getPointsOnACircle(n, { r });

    return {
        categoryPositions: points,
        categorySize: r * cPhi
    };
}

const displayCategories = (puzzle, selectedColour, update) => {
    const outerR = 100;
    const { categoryPositions, categorySize } = getCirclePackedInCircle(outerR, puzzle.length);

    return <g>
        { categoryPositions.map((category, i) =>
        <g key={i} transform={`translate(${ category[0] } ${ category[1] })`}>
                <circle className="colourable category" r={categorySize} />
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
