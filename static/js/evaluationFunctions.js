function areAllItemsColoured(items) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].colour === undefined) {
            return false;
        }
    }
    return true;
}

function areAllEdgeNodesDifferent(edges) {
    for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];
        if (edge.node1.colour === edge.node2.colour) {
            return false;
        }
    }
    return true;
}

// Function for determining where the puzzle has been solved
var evaluateChromaticGraph = function () {
    return areAllItemsColoured(this.graph.nodes) &&
        areAllEdgeNodesDifferent(this.graph.edges);
}
