import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { Categories } from './PuzzleComponents/Categories';
import { getCategoryObjects, getGraphObject } from './puzzleLoaders';
import { linearGraph, loopGraph } from '../utils/graphUtils';
import { allItemsColoured, attributesHaveMapping } from '../utils/evaluation';


// Same graph type, different colours
const puzzle1 = [
	{
        colourPalette: 2,
        categories: [
            { type: 1, item: getGraphObject({ nodes: [[0, 0, 1]] }) },
            { type: 2, item: getGraphObject({ nodes: [[0, 0, 2]] }) },
        ]
    }, {
		colourPalette: 2,
        categories: [
            { type: 1, item: getGraphObject(linearGraph([1, 1])) },
            { type: 1, item: getGraphObject(linearGraph([1, 1])) },
            { type: 2, item: getGraphObject(linearGraph([2, 2])) },
        ]
    }, {
		colourPalette: 3,
        categories: [
            { type: 1, item: getGraphObject(linearGraph([1, 1])) },
            { type: 2, item: getGraphObject(linearGraph([1, 2])) },
            { type: 3, item: getGraphObject(linearGraph([2, 2])) },
            { type: 3, item: getGraphObject(linearGraph([2, 2])) },
        ]
    }, {
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
        randomRotate: true,
        categories: [
            { type: 1, item: getGraphObject(loopGraph([1, 1, 2], 0.75)) },
            { type: 1, item: getGraphObject(loopGraph([1, 1, 2], 0.75)) },
            { type: 1, item: getGraphObject(loopGraph([1, 1, 2], 0.75)) },
            { type: 2, item: getGraphObject(loopGraph([1, 2, 2], 0.75)) },
            { type: 2, item: getGraphObject(loopGraph([1, 2, 2], 0.75)) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: getGraphObject(linearGraph([1, 2, 1])) },
            { type: 1, item: getGraphObject(linearGraph([1, 2, 1])) },
            { type: 2, item: getGraphObject(linearGraph([2, 1, 2])) },
            { type: 2, item: getGraphObject(linearGraph([2, 1, 2])) },
            { type: 2, item: getGraphObject(linearGraph([2, 1, 2])) },
        ]
    }, {
        colourPalette: 3,
        randomRotate: true,
        categories: [
            { type: 1, item: getGraphObject(loopGraph([1, 1, 2, 2], 0.75)) },
            { type: 1, item: getGraphObject(loopGraph([1, 1, 2, 2], 0.75)) },
            { type: 2, item: getGraphObject(loopGraph([1, 2, 1, 2], 0.75)) },
            { type: 2, item: getGraphObject(loopGraph([1, 2, 1, 2], 0.75)) },
            { type: 3, item: getGraphObject(loopGraph([1, 1, 1, 2], 0.75)) },
            { type: 3, item: getGraphObject(loopGraph([1, 1, 1, 2], 0.75)) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: getGraphObject(loopGraph([1, 2, 3], 0.75)) },
            { type: 1, item: getGraphObject(loopGraph([1, 2, 3], 0.75)) },
            { type: 2, item: getGraphObject(loopGraph([1, 3, 2], 0.75)) },
            { type: 2, item: getGraphObject(loopGraph([1, 3, 2], 0.75)) },
            { type: 2, item: getGraphObject(loopGraph([1, 3, 2], 0.75)) },
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

    return <Categories size="128" categories={categories} colourCategory={colourCategory} />
};

const evaluate = puzzle =>
    allItemsColoured(puzzle) &&
    attributesHaveMapping(puzzle, 'category', 'colour') &&
    attributesHaveMapping(puzzle, 'colour', 'category', 'colour');

const Categorisation = ({ puzzles }) =>
    <PuzzlePage
        puzzles={puzzles}
        evaluate={evaluate}
        getPuzzleObject={getCategoryObjects}
        displayPuzzle={displayCategories} />

export const Categorisation1 = () => <Categorisation puzzles={puzzle1} />
