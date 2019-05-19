// JSON for chromatic number puzzle definitions
var puzzles = [
    {
        colours: 1,
        nodes: [[0, 0]],
    }, {
        colours: 2,
        nodes: [[-1, 0], [1, 0]],
        edges: [[0, 1]],
    }, {
        colours: 2,
        nodes: [[-2, 0], [0, 0], [2, 0]],
        edges: [[0, 1], [1, 2]],
    }, {
        colours: 3,
        nodes: getNodesOnCircle(3),
        edges: getLoopOfEdges(3),
    }, {
        colours: 2,
        nodes: getNodesOnCircle(4),
        edges: getLoopOfEdges(4),
    }, {
        colours: 3,
        nodes: getNodesOnCircle(4),
        edges: getLoopOfEdges(4).concat([[1, 3]]),
    }, {
        colours: 4,
        nodes: getNodesOnCircle(4),
        edges: getLoopOfEdges(4).concat([[1, 3], [0, 2]]),
    }, {
        colours: 3,
        nodes: [[0, 0]].concat(getNodesOnCircle(4)),
        edges: getLoopOfEdges(1, 4).concat([[0, 1], [0, 2], [0, 3], [0, 4]]),
    }, {
        colours: 2,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6),
    }, {
        colours: 2,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[1, 4]]),
    }, {
        colours: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4], [1, 4], [2, 4]]),
    }, {
        colours: 3,
        scale: 24,
        nodes: [[-2, -1], [0, -1], [2, -1], [2, 1], [0, 1], [-2, 1]],
        edges: getLoopOfEdges(6).concat([[0, 4], [1, 4], [1, 3]]),
    }, {
        colours: 3,
        scale: 24,
        nodes: getNodesOnCircle(3),
        edges: getLoopOfEdges(3),
    }, {
        colours: 3,
        scale: 24,
        nodes: getNodesOnCircle(3).concat(getNodesOnCircle(3, 2, Math.PI / 3)),
        edges: getLoopOfEdges(3).concat([[0, 3], [1, 3], [1, 4], [2, 4], [0, 5], [2, 5]]),
    }
];

// Function for loading puzzle data into Puzzle object
var loader = function(data) {
    this.toolbar.createColourPalette(data.colours);
    data.nodeRadius = data.nodeRadius || 8;
    data.scale = data.scale || 32;
    this.graph = addGraph(this, data);
};

// Function for determining where the puzzle has been solved
var evaluationFunction = function () {
    return testGraphAllNodesColoured(this.graph) &&
        testGraphAllEdgeNodesDifferent(this.graph);
}

// Set up puzzles
Puzzle.init(puzzles, loader, evaluationFunction);
