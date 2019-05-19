// JSON for chromatic number puzzle definitions
var puzzles = [
    {
        colours: 1,
        nodeRadius: 8,
        nodes: [[0, 0]],
    }, {
        colours: 2,
        nodeRadius: 6,
        nodes: [[-1, 0], [1, 0]],
        edges: [[0, 1]],
    }, {
        colours: 2,
        nodeRadius: 6,
        nodes: [[-2, 0], [0, 0], [2, 0]],
        edges: [[0, 1], [1, 2]],
    }, {
        colours: 3,
        nodeRadius: 6,
        nodes: getNodesOnCircle(3),
        edges: [[0, 1], [1, 2], [2, 0]],
    }
];

// Function for loading puzzle data into Puzzle object
var loader = function(data) {
    this.toolbar.createColourPalette(data.colours);
    data.scale = 16;
    this.graph = addGraph(this, data);
};

// Function for determining where the puzzle has been solved
var evaluationFunction = function () {
    return testGraphAllNodesColoured(this.graph) &&
        testGraphAllEdgeNodesDifferent(this.graph);
}

// Set up puzzles
Puzzle.init(puzzles, loader, evaluationFunction);
