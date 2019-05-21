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

function doNodeColoursMatch(nodes1, nodes2) {
    if (nodes1.length !== nodes2.length) { return false; }

    for (var i = 0; i < nodes1.length; i++) {
        if (nodes1[i].colour !== nodes2[i].colour) {
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

// Function for determining where the puzzle has been solved
var evaluateRepeatingPattern = function () {
    return areAllItemsColoured(this.answerNodes) &&
        doNodeColoursMatch(this.answer, this.answerNodes);
}
