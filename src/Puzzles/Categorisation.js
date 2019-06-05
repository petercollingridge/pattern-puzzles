import React from 'react';

import PuzzlePage from './PuzzlePage';
import Graph from './PuzzleComponents/Graph';
import { getCategoryObjects } from './puzzleLoaders';
import { getLinearGraph } from '../utils/graphUtils';
import { allItemsColoured, sequencesMatch } from '../utils/evaluationUtils';


const puzzle1 = [
	{
		colourPalette: 1,
        categories: [
            [{ nodes: [[0, 0, 1]] }],
            [getLinearGraph([1, 1])]
        ]
    }
];

const getCircleOffsets = (n) => n;

const displayCategories = (page, puzzle) => {
    
return <g>

</g>}


const Categorisation = ({ puzzles, transform }) => {
	const evaluate = (blank, target) => {
		return true;
    };

    return <PuzzlePage
        puzzles={puzzles}
        evaluate={evaluate}
        getPuzzleObject={getCategoryObjects}
        displayPuzzle={displayCategories} />;
};
    

export const Categorisation1 = () => <Categorisation puzzles={puzzle1} />
