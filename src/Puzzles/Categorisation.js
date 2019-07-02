import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Graph } from './PuzzleComponents/Graph';
import { Categories } from './PuzzleComponents/Categories';
import { getCategoryObjects, getGraphObject } from './puzzleLoaders';
import {
    linearGraph,
    loopGraph,
    triangleGraph,
    getPointsOnACircle,
    getLineOfEdges,
    getLoopOfEdges
} from '../utils/graphUtils';
import { allItemsColoured, sequencesAreEquivalent } from '../utils/evaluation';


// Graphs are all the same colour and need to be match by shape
const puzzle1 = [
    {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: { nodes: [[0, 0, 1]] }},
            { type: 2, item: linearGraph([1, 1]) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, copies: 3, item: linearGraph([1, 1, 1]) },
            { type: 2, copies: 2, item: triangleGraph(1, 0.8) }
        ]
    }, {
        colourPalette: 3,
        randomRotate: true,
        categories: [
            { type: 1, copies: 2, item: linearGraph([1, 1, 1]) },
            { type: 2, copies: 2, item: triangleGraph(1, 0.8) },
            { type: 3, copies: 2, item: {
                nodes: [[0.5, 0.5], [-0.5, 0.5], [0.5, -0.5]],
                edges: [[0, 1], [0, 2]],
                colour: 1
            }}
        ]
    }, {
        colourPalette: 3,
        randomRotate: true,
        categories: [
            { type: 1, copies: 2, item: loopGraph([1, 1, 1, 1], 0.8) },
            {
                type: 2,
                copies: 3,
                item: {
                    nodes: getPointsOnACircle(4, { r: 0.8 }),
                    edges: getLineOfEdges(4),
                    colour: 1
                }
            }, {
                type: 3,
                item: {
                    nodes: getPointsOnACircle(4, { r: 0.8 }),
                    edges: [[0, 1], [0, 2], [0, 3]],
                    colour: 1
                }
            },
        ]
    }, {
        colourPalette: 3,
        randomRotate: true,
        categories: [
            {
                type: 1,
                copies: 2,
                item: {
                    nodes: getPointsOnACircle(4, { r: 0.8 }),
                    edges: [[0, 1], [0, 2], [0, 3]],
                    colour: 1
                }
            }, {
                type: 2,
                copies: 2,
                item: {
                    nodes: getPointsOnACircle(4, { r: 0.8 }),
                    edges: [[0, 1], [0, 2], [2, 3]],
                    colour: 1
                }
            }, {
                type: 3,
                copies: 2,
                item: {
                    nodes: getPointsOnACircle(4, { r: 0.8 }),
                    edges: [[0, 1], [0, 2], [0, 3], [2, 3]],
                    colour: 1
                }
            },
        ]
    }, {
        colourPalette: 4,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 1, 1, 1, 1], 0.8) },
            {
                type: 2,
                copies: 2, 
                item: {
                    nodes: getPointsOnACircle(5, { r: 0.8 }),
                    edges: getLineOfEdges(5),
                    colour: 1
                }
            }, {
                type: 3 ,
                copies: 2,
                item: {
                    nodes: getPointsOnACircle(5, { r: 0.8 }),
                    edges: [[0, 1], [0, 2], [0, 3], [0, 4]],
                    colour: 1
                }
            }, {
                type: 4,
                item: {
                    nodes: getPointsOnACircle(5, { r: 0.8 }),
                    edges: [[0, 1], [0, 2], [0, 3], [3, 4]],
                    colour: 1
                }
            }
        ]
    }, {
        colourPalette: 3,
        randomRotate: true,
        categories: [
            {
                type: 1,
                copies: 2, 
                item: {
                    nodes: getPointsOnACircle(6, { r: 0.9 }),
                    edges: ([[0, 1], [1, 2], [2, 5], [4, 5], [3, 4]]),
                    colour: 1
                }
            }, {
                type: 2,
                copies: 2, 
                item: {
                    nodes: getPointsOnACircle(6, { r: 0.9 }),
                    edges: ([[0, 1], [1, 2], [2, 4], [4, 5], [3, 4]]),
                    colour: 1
                }
            }, {
                type: 3,
                copies: 2, 
                item: {
                    nodes: getPointsOnACircle(6, { r: 0.9 }),
                    edges: ([[0, 1], [1, 2], [1, 4], [4, 5], [3, 4]]),
                    colour: 1
                }
            }
        ]
    }, {
        colourPalette: 4,
        randomRotate: true,
        categories: [
            {
                type: 1,
                copies: 2, 
                item: {
                    nodes: getPointsOnACircle(6),
                    edges: getLoopOfEdges(6).concat([[0, 3], [0, 4], [1, 5]]),
                    colour: 1
                }
            }, {
                type: 2,
                copies: 2, 
                item: {
                    nodes: getPointsOnACircle(6),
                    edges: getLoopOfEdges(6).concat([[0, 3], [0, 4], [1, 4]]),
                    colour: 1
                }
            }, {
                type: 3,
                copies: 1, 
                item: {
                    nodes: getPointsOnACircle(6),
                    edges: getLoopOfEdges(6).concat([[0, 3], [0, 4], [2, 4]]),
                    colour: 1
                }
            }, {
                type: 4,
                copies: 1, 
                item: {
                    nodes: getPointsOnACircle(6),
                    edges: getLoopOfEdges(6).concat([[0, 2], [0, 4], [1, 5]]),
                    colour: 1
                }
            }
        ]
    }
]

// Graphs are all the same shape and orientation and need to be matched by colour
const puzzle2 = [
	{
        colourPalette: 2,
        categories: [
            { type: 1, item: { nodes: [[0, 0, 1]] }},
            { type: 2, item: { nodes: [[0, 0, 2]] }},
        ]
    }, {
		colourPalette: 2,
        categories: [
            { type: 1, item: linearGraph([1, 1]) },
            { type: 1, item: linearGraph([1, 1]) },
            { type: 2, item: linearGraph([2, 2]) },
            { type: 2, item: linearGraph([2, 2]) },
        ]
    }, {
		colourPalette: 3,
        categories: [
            { type: 1, item: linearGraph([1, 1]) },
            { type: 2, item: linearGraph([1, 2]) },
            { type: 2, item: linearGraph([1, 2]) },
            { type: 3, item: linearGraph([2, 2]) },
        ]
    }, {
        colourPalette: 2,
        categories: [
            { type: 1, item: linearGraph([1, 2, 1]) },
            { type: 1, item: linearGraph([1, 2, 1]) },
            { type: 2, item: linearGraph([2, 1, 2]) },
            { type: 2, item: linearGraph([2, 1, 2]) },
        ]
    }, {
        colourPalette: 3,
        categories: [
            { type: 1, item: linearGraph([1, 1, 2]) },
            { type: 1, item: linearGraph([1, 1, 2]) },
            { type: 2, item: linearGraph([1, 2, 1]) },
            { type: 3, item: linearGraph([2, 1, 1]) },
            { type: 3, item: linearGraph([2, 1, 1]) },
        ]
    }, {
        colourPalette: 3,
        categories: [
            { type: 1, item: loopGraph([1, 1, 2], 0.75) },
            { type: 1, item: loopGraph([1, 1, 2], 0.75) },
            { type: 2, item: loopGraph([1, 2, 1], 0.75) },
            { type: 2, item: loopGraph([1, 2, 1], 0.75) },
            { type: 3, item: loopGraph([2, 1, 1], 0.75) },
            { type: 3, item: loopGraph([2, 1, 1], 0.75) },
        ]
    }, {
        colourPalette: 3,
        categories: [
            { type: 1, item: loopGraph([1, 1, 2, 2], 0.75) },
            { type: 1, item: loopGraph([1, 1, 2, 2], 0.75) },
            { type: 2, item: loopGraph([1, 2, 1, 2], 0.75) },
            { type: 2, item: loopGraph([1, 2, 1, 2], 0.75) },
            { type: 3, item: loopGraph([2, 1, 2, 1], 0.75) },
            { type: 3, item: loopGraph([2, 1, 2, 1], 0.75) },
        ]
    }, {
        colourPalette: 4,
        categories: [
            { type: 1, item: loopGraph([1, 2, 3, 1, 2, 3], 0.75) },
            { type: 2, item: loopGraph([3, 2, 1, 3, 2, 1], 0.75) },
            { type: 2, item: loopGraph([3, 2, 1, 3, 2, 1], 0.75) },
            { type: 3, item: loopGraph([1, 2, 3, 2, 3, 1], 0.75) },
            { type: 3, item: loopGraph([1, 2, 3, 2, 3, 1], 0.75) },
            { type: 4, item: loopGraph([3, 2, 1, 2, 3, 1], 0.75) },
        ]
    }
];

// Graphs are all the same shape but rotated and need to be matched by colour
const puzzle3 = [
    {
        colourPalette: 3,
        categories: [
            { type: 1, item: linearGraph([1, 1]) },
            { type: 2, item: linearGraph([1, 2]) },
            { type: 2, item: linearGraph([2, 1]) },
            { type: 3, item: linearGraph([2, 2]) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: linearGraph([1, 2, 1]) },
            { type: 1, item: linearGraph([1, 2, 1]) },
            { type: 1, item: linearGraph([1, 2, 1]) },
            { type: 2, item: linearGraph([2, 1, 2]) },
            { type: 2, item: linearGraph([2, 1, 2]) },
            { type: 2, item: linearGraph([2, 1, 2]) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 2, 2], 0.75) },
            { type: 1, item: loopGraph([1, 2, 2], 0.75) },
            { type: 1, item: loopGraph([1, 2, 2], 0.75) },
            { type: 2, item: loopGraph([1, 1, 2], 0.75) },
            { type: 2, item: loopGraph([1, 1, 2], 0.75) },
            { type: 2, item: loopGraph([1, 1, 2], 0.75) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 1, 2, 2], 0.75) },
            { type: 1, item: loopGraph([1, 1, 2, 2], 0.75) },
            { type: 1, item: loopGraph([1, 1, 2, 2], 0.75) },
            { type: 2, item: loopGraph([1, 2, 1, 2], 0.75) },
            { type: 2, item: loopGraph([1, 2, 1, 2], 0.75) },
            { type: 2, item: loopGraph([1, 2, 1, 2], 0.75) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 2, 3], 0.75) },
            { type: 1, item: loopGraph([1, 2, 3], 0.75) },
            { type: 2, item: loopGraph([1, 3, 2], 0.75) },
            { type: 2, item: loopGraph([1, 3, 2], 0.75) },
        ]
    }, {
        colourPalette: 3,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 1, 2, 3], 0.75) },
            { type: 1, item: loopGraph([1, 1, 2, 3], 0.75) },
            { type: 2, item: loopGraph([1, 1, 3, 2], 0.75) },
            { type: 2, item: loopGraph([1, 1, 3, 2], 0.75) },
            { type: 3, item: loopGraph([1, 2, 1, 3], 0.75) },
            { type: 3, item: loopGraph([1, 2, 1, 3], 0.75) },
        ]
    }, {
        colourPalette: 4,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 2, 3, 4], 0.75) },
            { type: 1, item: loopGraph([1, 2, 3, 4], 0.75) },
            { type: 2, item: loopGraph([1, 4, 3, 2], 0.75) },
            { type: 2, item: loopGraph([1, 4, 3, 2], 0.75) },
            { type: 3, item: loopGraph([1, 3, 2, 4], 0.75) },
            { type: 4, item: loopGraph([1, 2, 4, 3], 0.75) },
        ]
    }, {
        colourPalette: 4,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 2, 3, 1, 2, 3], 0.75) },
            { type: 2, item: loopGraph([1, 3, 2, 1, 3, 2], 0.75) },
            { type: 2, item: loopGraph([1, 3, 2, 1, 3, 2], 0.75) },
            { type: 3, item: loopGraph([1, 2, 3, 2, 3, 1], 0.75) },
            { type: 4, item: loopGraph([1, 2, 1, 3, 2, 3], 0.75) },
            { type: 4, item: loopGraph([1, 2, 1, 3, 2, 3], 0.75) },
        ]
    }
];

const puzzles = [puzzle1, puzzle2, puzzle3];

const displayCategories = (categories, selectedColour, update) => {
    categories.forEach(item => {
        item.component = <Graph {...getGraphObject(item.object)} />
    });

    const colourCategory = index => {
        if (categories[index].colour === selectedColour) {
            categories[index].colour = 0;
        } else {
            categories[index].colour = selectedColour;
        }
        update(categories);
    };

    return <Categories size="128" categories={categories} colourCategory={colourCategory} />
};

const evaluate = puzzle =>
    allItemsColoured(puzzle) &&
    sequencesAreEquivalent(puzzle.map(item => item.category), puzzle.map(item => item.colour));

export const Categorisation = (n) =>
    <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={evaluate}
        getPuzzleObject={getCategoryObjects}
        displayPuzzle={displayCategories} />
