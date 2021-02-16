/*
 * Given a grid, categorise it depend on whether you can create a path through it or not.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { gridGraph } from '../utils/graphTypes';
import { Graph } from '../PuzzleComponents/Graph';
import { Categories } from '../PuzzleComponents/Categories';
import { getCategoryObjects, getGraphObject } from '../utils/loadPuzzle';

import { extractAttribute, sequencesAreEquivalent } from '../utils/evaluate';


const puzzle1 = [{
    colourPalette: 2,
    categories: [
        { type: 1, item: getGridGraph(2, 2, 0, 2) },
        { type: 2, item: getGridGraph(2, 2, 0, 3) },
    ]
}, {
    colourPalette: 2,
    categories: [
        { type: 1, item: getGridGraph(3, 2, 0, 1) },
        { type: 1, item: getGridGraph(3, 2, 0, 2) },
        { type: 2, item: getGridGraph(3, 2, 2, 3) },
    ]
}, {
    colourPalette: 2,
    categories: [
        { type: 1, item: getGridGraph(3, 2, 0, 5) },
        { type: 2, item: getGridGraph(3, 2, 0, 4) },
        { type: 2, item: getGridGraph(3, 2, 0, 3) },
    ]
}];

const puzzles = [puzzle1];

function getGridGraph(width, height, start, end) {
    const graph = gridGraph(width, height);
    graph.nodes[start][2] = 1;
    graph.nodes[end][2] = 2;
    return graph
}

const displayCategories = (categories, chamber) => {
    categories.forEach(item => {
        item.component = <Graph {...getGraphObject(item.object)} chamber={chamber} />
    });

    return <Categories size="128" categories={categories} chamber={chamber} />
};

const evaluate = puzzle => {
    return sequencesAreEquivalent(
        extractAttribute(puzzle, 'category'),
        extractAttribute(puzzle, 'colour')
    );
}

const CategoriseGrids = (n) =>
    <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={evaluate}
        getPuzzleObject={getCategoryObjects}
        displayPuzzle={displayCategories} />

export default CategoriseGrids;
