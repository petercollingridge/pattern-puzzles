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
