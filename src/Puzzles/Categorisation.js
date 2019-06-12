import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { Categories } from './PuzzleComponents/Categories';
import { getCategoryObjects, getGraphObject } from './puzzleLoaders';
import { allItemsColoured, attributesHaveMapping } from '../utils/evaluation';


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

const displayCategories = (categories, selectedColour, update) => {
    categories.forEach(item => {
        item.component = <Graph {...item} />
    });

    const colourCategory = index => {
        categories[index].colour = selectedColour;
        update(categories);
    };

    return <Categories size="100" categories={categories} colourCategory={colourCategory} />
};

const evaluate = puzzle =>
    allItemsColoured(puzzle) &&
    attributesHaveMapping(puzzle, 'category', 'colour');

const Categorisation = ({ puzzles }) =>
    <PuzzlePage
        puzzles={puzzles}
        evaluate={evaluate}
        getPuzzleObject={getCategoryObjects}
        displayPuzzle={displayCategories} />

export const Categorisation1 = () => <Categorisation puzzles={puzzle1} />
