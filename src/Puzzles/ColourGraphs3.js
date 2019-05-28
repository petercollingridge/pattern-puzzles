import React from 'react';
import ColourGraph from './ColourGraphs';
import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';


// TODO: Give more colourPalette than required
var puzzles = [
    {
        colourPalette: 2,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6),
    }, {
        colourPalette: 2,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[2, 5]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[0, 2], [2, 4]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[0, 2], [2, 4], [0, 4]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[1, 3], [0, 4], [2, 5]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[2, 4], [1, 3], [0, 4], [1, 5]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[0, 3], [1, 4], [2, 5]]),
    }, {
        colourPalette: 3,
        nodes: getNodesOnCircle(6),
        edges: getLoopOfEdges(6).concat([[0, 2], [1, 3], [2, 4], [3, 5], [4, 0], [5, 1]]),
    }
];

export default (props) => <ColourGraph puzzles={puzzles} {...props} />
