import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { Categories } from './PuzzleComponents/Categories';
import { getCategoryObjects, getGraphObject } from './puzzleLoaders';
import { createLogicalAnd } from 'typescript';


const puzzle1 = [
	{
		colourPalette: 2,
        categories: [
            { type: 1, item: getGraphObject({ nodes: [[0, 0, 1]] }) },
            { type: 1, item: getGraphObject({ nodes: [[0, 0, 1]] }) },
            { type: 2, item: getGraphObject({ nodes: [[0, 0, 2]] }) },
        ]
    }
];

const displayCategories = (puzzle, selectedColour, update) => {
    const items = puzzle.map(item => <Graph {...item.item} />)

    const colourCategory = nodeIndex => {
        puzzle.categories[nodeIndex].colour = selectedColour;
        update(puzzle);
    };

    return <Categories size="100" items={items} colourCategory={colourCategory} />
};

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
