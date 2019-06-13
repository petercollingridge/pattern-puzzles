import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { Categories } from './PuzzleComponents/Categories';
import { getCategoryObjects, getGraphObject } from './puzzleLoaders';
import { linearGraph } from '../utils/graphUtils';
import { allItemsColoured, attributesHaveMapping } from '../utils/evaluation';


const puzzle1 = [
	{
        colourPalette: 3,
        randomRotate: true,
        categories: [
            { type: 1, item: getGraphObject(linearGraph([1, 1, 1])) },
            { type: 2, item: getGraphObject(linearGraph([1, 2, 1])) },
            { type: 2, item: getGraphObject(linearGraph([1, 2, 1])) },
            { type: 3, item: getGraphObject(linearGraph([2, 2, 2])) },
        ]
    }, {
		colourPalette: 2,
        categories: [
            { type: 1, item: getGraphObject(linearGraph([1, 1])) },
            { type: 1, item: getGraphObject(linearGraph([1, 1])) },
            { type: 2, item: getGraphObject(linearGraph([1, 2])) },
        ]
    }, {
		colourPalette: 2,
        categories: [
            { type: 1, item: getGraphObject({ nodes: [[0, 0, 1]] }) },
            { type: 2, item: getGraphObject({ nodes: [[0, 0, 2]] }) },
        ]
    }
];

const displayCategories = (categories, selectedColour, update) => {
    categories.forEach(item => {
        item.component = <Graph {...item.object} />
    });

    const colourCategory = index => {
        categories[index].colour = selectedColour;
        update(categories);
    };

    return <Categories size="132" categories={categories} colourCategory={colourCategory} />
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
