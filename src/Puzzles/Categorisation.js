import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { getCategoryObjects, getGraphObject } from './puzzleLoaders';
import { getLinearGraph } from '../utils/graphUtils';
import { allItemsColoured, sequencesMatch } from '../utils/evaluation';


const puzzle1 = [
	{
		colourPalette: 1,
        categories: [
            [getGraphObject({ nodes: [[0, 0, 1]] })],
            [getGraphObject({ nodes: [[0, 0, 2]] })],
            [getGraphObject({ nodes: [[0, 0, 1]] })],
        ]
    }
];

const getCircleOffsets = (n) => n;

const displayCategories = (puzzle, selectedColour, update) => {
    const R = 96;
    const n = puzzle.length;
    const theta =  Math.PI * 2 / n;

    const phi = Math.PI * (0.5 - 1 / n);
    const cPhi = Math.cos(phi);
    const d = R / (1 + cPhi);
    const r = d * cPhi;

    const items = [];
    for (let i = 0; i < n; i++) {
        const x = d * Math.sin(i * theta);
        const y = d * Math.cos(i * theta);
        items.push(<circle fill="#eee" key={i} cx={x} cy={y} r={r} />)
    }

    return <g>
        { items }
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
