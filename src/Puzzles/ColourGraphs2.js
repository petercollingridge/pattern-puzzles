import React from 'react';
import ColourGraph from './ColourGraphs';
import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';


var puzzles = [
    {
        colourPalette: 2,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6),
    }, {
        colourPalette: 2,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[1, 4]]),
    }, {
        colourPalette: 2,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 3]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4], [2, 4]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4], [1, 4], [2, 4]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4], [1, 4], [1, 3]]),
    }, {
        colourPalette: 3,
        scale: 24,
        nodes: getNodesOnCircle(3).concat(getNodesOnCircle(3, 2, Math.PI / 3)),
        edges: getLoopOfEdges(3).concat([[0, 3], [1, 3], [1, 4], [2, 4], [0, 5], [2, 5]]),
    }, {
        colourPalette: 3,
        scale: 16,
        nodes: getNodesOnCircle(3).concat(getNodesOnCircle(3, 4, Math.PI / 3)),
        edges: getLoopOfEdges(3)
            .concat(getLoopOfEdges(3, 5))
            .concat([[0, 3], [1, 3], [1, 4], [2, 4], [0, 5], [2, 5]]),
    }
];

export default (props) => <ColourGraph puzzles={puzzles} {...props} />
