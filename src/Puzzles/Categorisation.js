import React from 'react';

import PuzzlePage from '../PuzzleChamber/PuzzleChamber';
import { Graph } from './PuzzleComponents/Graph';
import { Categories } from './PuzzleComponents/Categories';
import { getCategoryObjects, getGraphObject } from './utils/loadPuzzle';
import {
    linearGraph,
    loopGraph,
    starGraph,
    spokeGraph,
    sunletGraph,
    prismGraph,
    antiPrismGraph,
    gearGraph,
    getPointsOnACircle,
    getNodesOnCircle,
    getLineOfEdges,
    getLoopOfEdges,
    subdivideGraph
} from '../utils/graphUtils';
import { sequencesAreEquivalent } from './utils/evaluate';


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
            { type: 1, copies: 3, item: linearGraph(3, { colour: 1 }) },
            { type: 2, copies: 2, item: loopGraph(3, { scale: 0.8, colour: 1 }) }
        ]
    }, {
        colourPalette: 3,
        randomRotate: true,
        categories: [
            { type: 1, copies: 2, item: linearGraph(3, { colour: 1 }) },
            { type: 2, copies: 2, item: loopGraph(3, { scale: 0.8, colour: 1 }) },
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
            { type: 1, copies: 2, item: loopGraph(4, { scale: 0.8, colour: 1 }) },
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
            { type: 1, item: loopGraph(5, { scale: 0.8, colour: 1 }) },
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
            { type: 1, item: loopGraph([1, 1, 2], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 1, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 2, 1], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 2, 1], { scale: 0.75 }) },
            { type: 3, item: loopGraph([2, 1, 1], { scale: 0.75 }) },
            { type: 3, item: loopGraph([2, 1, 1], { scale: 0.75 }) },
        ]
    }, {
        colourPalette: 3,
        categories: [
            { type: 1, item: loopGraph([1, 1, 2, 2], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 1, 2, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 2, 1, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 2, 1, 2], { scale: 0.75 }) },
            { type: 3, item: loopGraph([2, 1, 2, 1], { scale: 0.75 }) },
            { type: 3, item: loopGraph([2, 1, 2, 1], { scale: 0.75 }) },
        ]
    }, {
        colourPalette: 4,
        categories: [
            { type: 1, item: loopGraph([1, 2, 3, 1, 2, 3], { scale: 0.75 }) },
            { type: 2, item: loopGraph([3, 2, 1, 3, 2, 1], { scale: 0.75 }) },
            { type: 2, item: loopGraph([3, 2, 1, 3, 2, 1], { scale: 0.75 }) },
            { type: 3, item: loopGraph([1, 2, 3, 2, 3, 1], { scale: 0.75 }) },
            { type: 3, item: loopGraph([1, 2, 3, 2, 3, 1], { scale: 0.75 }) },
            { type: 4, item: loopGraph([3, 2, 1, 2, 3, 1], { scale: 0.75 }) },
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
            { type: 1, item: loopGraph([1, 2, 2], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 2, 2], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 2, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 1, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 1, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 1, 2], { scale: 0.75 }) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 1, 2, 2], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 1, 2, 2], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 1, 2, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 2, 1, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 2, 1, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 2, 1, 2], { scale: 0.75 }) },
        ]
    }, {
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 2, 3], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 2, 3], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 3, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 3, 2], { scale: 0.75 }) },
        ]
    }, {
        colourPalette: 3,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 1, 2, 3], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 1, 2, 3], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 1, 3, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 1, 3, 2], { scale: 0.75 }) },
            { type: 3, item: loopGraph([1, 2, 1, 3], { scale: 0.75 }) },
            { type: 3, item: loopGraph([1, 2, 1, 3], { scale: 0.75 }) },
        ]
    }, {
        colourPalette: 4,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 2, 3, 4], { scale: 0.75 }) },
            { type: 1, item: loopGraph([1, 2, 3, 4], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 4, 3, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 4, 3, 2], { scale: 0.75 }) },
            { type: 3, item: loopGraph([1, 3, 2, 4], { scale: 0.75 }) },
            { type: 4, item: loopGraph([1, 2, 4, 3], { scale: 0.75 }) },
        ]
    }, {
        colourPalette: 4,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 2, 3, 1, 2, 3], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 3, 2, 1, 3, 2], { scale: 0.75 }) },
            { type: 2, item: loopGraph([1, 3, 2, 1, 3, 2], { scale: 0.75 }) },
            { type: 3, item: loopGraph([1, 2, 3, 2, 3, 1], { scale: 0.75 }) },
            { type: 4, item: loopGraph([1, 2, 1, 3, 2, 3], { scale: 0.75 }) },
            { type: 4, item: loopGraph([1, 2, 1, 3, 2, 3], { scale: 0.75 }) },
        ]
    }
];

const triangleWithCenter = getNodesOnCircle([1, 1, 1], { r: 1.2 }).concat([[0, 0, 1]]);
const lowTriangle = [[0, -1, 1], [-1, 0.5, 1], [0, 0.5, 1], [1, 0.5, 1]];
const rectangle = [[-0.5, -1.25, 1], [-0.5, 1.25, 1], [0.5, 1.25, 1], [0.5, -1.25, 1]]

// Graphs have the same set of connections, but nodes are moved
const puzzle4 = [
    {
        // Triangles vs straight lines big and smaller
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: linearGraph(3, { scale: 0.8, colour: 1 }) },
            { type: 1, item: linearGraph(3, { scale: 1.5, colour: 1 }) },
            { type: 2, item: loopGraph(3, { scale: 0.7 }) },
            { type: 2, item: loopGraph(3, { scale: 1.4 }) },
        ]
    }, {
        // Triangles vs straight lines
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: linearGraph([1, 1, 1]) },
            { type: 2, item: loopGraph([1, 1, 1]) },
            { type: 1,
                item: {
                    nodes: [[0.7, 0.7, 1], [-0.7, 0.7, 1], [-0.7, -0.7, 1]],
                    edges: getLineOfEdges(3)
                }
            },
            { type: 2,
                item: {
                    nodes: [[0.7, 0.7, 1], [-0.7, 0.7, 1], [-0.7, -0.7, 1]],
                    edges: getLoopOfEdges(3)
                }
            }
        ]
    }, {
        // Three node- vs four node-triangles
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 1, 1]) },
            { type: 1,
                item: {
                    nodes: [[0, -0.5], [1.25, 0.5], [-1.25, 0.5]],
                    edges: getLoopOfEdges(3),
                    colour: 1
                }
            },
            { type: 2,
                item: {
                    nodes: [[0, -0.5], [1.25, 0.5], [0, 0.5], [-1.25, 0.5]],
                    edges: getLoopOfEdges(4),
                    colour: 1
                }
            },
            { type: 2,
                item: {
                    nodes: getPointsOnACircle(3).concat([[0, 0.5]]),
                    edges: [[0, 3], [3, 1], [1, 2], [2, 0]],
                    colour: 1
                }
            }
        ]
    }, {
        // Quadrilaterals vs stars
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: loopGraph([1, 1, 1, 1]) },
            { type: 1,
                item: {
                    nodes: lowTriangle,
                    edges: getLoopOfEdges(4)
                }
            }, {
                type: 2,
                item: {
                    nodes: lowTriangle,
                    edges: [[0, 2], [1, 2], [2, 3]]
                }
            }, { type: 2, item: starGraph([1, 1, 1, 1]) }
        ]
    }, {
        // Quadrilaterals vs straight lines
        colourPalette: 2,
        randomRotate: true,
        categories: [
            { type: 1, item: linearGraph([1, 1, 1, 1]) },
            { type: 2, item: loopGraph([1, 1, 1, 1]) },
            {
                type: 1,
                item: {
                    nodes: getNodesOnCircle([1, 1, 1, 1]),
                    edges: getLineOfEdges(4)
                }
            }, {
                type: 1,
                item: {
                    nodes: [[-0.5, -1], [-0.5, 0], [0.5, 0], [0.5, 1]],
                    edges: getLineOfEdges(4),
                    colour: 1
                }
            }, {
                type: 2,
                item: {
                    nodes: triangleWithCenter,
                    edges: getLoopOfEdges(4)
                }
            }
        ]
    }, {
        // Quadrilaterals vs straight lines with a rectangle
        colourPalette: 2,
        randomRotate: true,
        categories: [
            {
                type: 1,
                item: {
                    nodes: rectangle,
                    edges: getLineOfEdges(4)
                }
            }, {
                type: 1,
                item: {
                    nodes: rectangle,
                    edges: [[0, 3], [0, 2], [2, 1]]
                }
            }, {
                type: 1,
                item: {
                    nodes: rectangle,
                    edges: [[1, 2], [2, 3], [3, 0]]
                }
            }, {
                type: 2,
                item: {
                    nodes: rectangle,
                    edges: getLoopOfEdges(4),
                }
            }, {
                type: 2,
                item: {
                    nodes: rectangle,
                    edges: [[0, 2], [2, 1], [1, 3], [3, 0]],
                }
            }
        ]
    }, {
        // Stars vs triangles with hanging point
        colourPalette: 2,
        randomRotate: true,
        categories: [
            {
                type: 1,
                item: {
                    nodes: triangleWithCenter,
                    edges: [[0, 1], [1, 2], [0, 3], [0, 2]]
                }
            }, {
                type: 2,
                item: {
                    nodes: triangleWithCenter,
                    edges: [[0, 3], [1, 3], [2, 3]]
                }
            }, {
                type: 2,
                item: {
                    nodes: lowTriangle,
                    edges: [[0, 1], [0, 2], [0, 3]]
                }
            }, {
                type: 1,
                item: {
                    nodes: lowTriangle,
                    edges: [[0, 1], [0, 2], [0, 3], [1, 2]]
                }
            }, {
                type: 1,
                item: {
                    nodes: lowTriangle,
                    edges: [[0, 1], [0, 2], [1, 2], [2, 3]]
                }
            }
        ]
    }, {
        // Quadrilateral with one diagonal vs two
        colourPalette: 2,
        randomRotate: true,
        categories: [
            {
                type: 1,
                item: {
                    nodes: getNodesOnCircle(4),
                    edges: getLoopOfEdges(4).concat([[0, 2], [1, 3]]),
                    colour: 1
                }
            },
            {
                type: 1,
                item: {
                    nodes: triangleWithCenter,
                    edges: [[0, 1], [1, 2], [2, 0], [3, 0], [3, 1], [3, 2]]
                }
            },
            {
                type: 2,
                item: {
                    nodes: getNodesOnCircle(4),
                    edges: getLoopOfEdges(4).concat([[0, 2]]),
                    colour: 1
                }
            },
            {
                type: 2,
                item: {
                    nodes: triangleWithCenter,
                    edges: getLoopOfEdges(4).concat([[0, 2]]),
                    colour: 1
                }
            },
            {
                type: 2,
                item: {
                    nodes: getPointsOnACircle(3).concat([[0, 0.5]]),
                    edges: [[0, 3], [3, 1], [1, 2], [2, 0], [3, 2]],
                    colour: 1
                }
            }
        ]
    }
];

// Categorising graphs of the same type, e.g. cyclic vs star
const puzzle5 = [
    {
        // Linear vs cyclic
        colourPalette: 2,
        randomRotate: true,
        itemProps: { colour: 1 },
        categories: [
            { type: 1, item: linearGraph(3) },
            { type: 1, item: linearGraph(4) },
            { type: 2, item: loopGraph(3) },
            { type: 2, item: loopGraph(4) },
            { type: 2, item: loopGraph(5) },
        ]
    }, {
        // Cyclc vs star
        colourPalette: 2,
        randomRotate: true,
        itemProps: { colour: 1, size: 36, r: 7 },
        categories: [
            { type: 1, item: starGraph(4) },
            { type: 1, item: starGraph(5) },
            { type: 1, item: starGraph(6) },
            { type: 2, item: loopGraph(3) },
            { type: 2, item: loopGraph(4) },
            { type: 2, item: loopGraph(5) },
        ]
    }, {
        // Spoked wheel vs star
        colourPalette: 2,
        randomRotate: true,
        itemProps: { colour: 1, size: 36, r: 7 },
        categories: [
            { type: 1, item: starGraph(4) },
            { type: 1, item: starGraph(5) },
            { type: 1, item: starGraph(6) },
            { type: 2, item: spokeGraph(4) },
            { type: 2, item: spokeGraph(5) },
            { type: 2, item: spokeGraph(6) },
        ]
    }, {
        // Spoked wheel vs sunlet - remove
        colourPalette: 2,
        randomRotate: true,
        itemProps: { colour: 1, size: 40, r: 5 },
        categories: [
            { type: 1, item: spokeGraph(4) },
            { type: 1, item: spokeGraph(5) },
            { type: 1, item: spokeGraph(6) },
            { type: 2, item: sunletGraph(3) },
            { type: 2, item: sunletGraph(4) },
            { type: 2, item: sunletGraph(5) },
        ]
    }, {
        // Spokes, sunlet and prism graphs
        colourPalette: 3,
        randomRotate: true,
        itemProps: { colour: 1, size: 45, r: 5.2 },
        categories: [
            { type: 1, item: spokeGraph(5) },
            { type: 1, item: spokeGraph(6) },
            { type: 2, item: sunletGraph(4) },
            { type: 2, item: sunletGraph(5) },
            { type: 3, item: prismGraph(3) },
            { type: 3, item: prismGraph(4) },
        ]
    }, {
        // Prism vs. anti-prism graphs
        colourPalette: 2,
        randomRotate: true,
        itemProps: { colour: 1, size: 45, r: 5.2 },
        categories: [
            { type: 1, item: prismGraph(3) },
            { type: 1, item: prismGraph(4) },
            { type: 1, item: prismGraph(5) },
            { type: 2, item: antiPrismGraph(4) },
            { type: 2, item: antiPrismGraph(5) },
            { type: 2, item: antiPrismGraph(6) },
        ]
    }, {
        // Gear graphs vs spoke graphs vs loop graphs
        colourPalette: 3,
        randomRotate: true,
        itemProps: { colour: 1, size: 45, r: 5.2 },
        categories: [
            { type: 1, item: subdivideGraph(loopGraph(3)) },
            { type: 1, item: loopGraph(4) },
            { type: 2, item: gearGraph(3) },
            { type: 2, item: gearGraph(4) },
            { type: 3, item: spokeGraph(4) },
            { type: 3, item: spokeGraph(5) },
        ]
    }
];

// Sun graphs, complete graphs
// Crossed prism vs Franklin graph
// Pan graph, barbell graph, web graph

const puzzles = [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5];

const displayCategories = (categories, chamber) => {
    categories.forEach(item => {
        item.component = <Graph {...getGraphObject(item.object)} />
    });

    return <Categories size="128" categories={categories} chamber={chamber} />
};

const evaluate = puzzle =>
    sequencesAreEquivalent(puzzle.map(item => item.category), puzzle.map(item => item.colour));

export const Categorisation = (n) =>
    <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={evaluate}
        getPuzzleObject={getCategoryObjects}
        displayPuzzle={displayCategories} />
