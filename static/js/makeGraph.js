
function addGraph(puzzle, graph) {
    var graphElement = addSVGElement('g', puzzle.element);
    var edgeGroup = addSVGElement('g', graphElement, {'class': 'graph-edges'});
    var nodeGroup = addSVGElement('g', graphElement, {'class': 'graph-nodes'});

    // Add nodes
    var nodes = [];
    for (var i = 0; i < graph.nodes.length; i++) {
        var node = graph.nodes[i];
        var nodeElement = addCircle(nodeGroup, {
            cx: node[0],
            cy: node[1],
            r: graph.nodeRadius
        });
        var nodeObject = {
            x: node[0],
            y: node[1],
            r: graph.nodeRadius,
            element: nodeElement
        };
        makeElementColourable(nodeElement, nodeObject, puzzle);
        nodes.push(nodeObject);
    }

    // Add edges
    var edges = [];
    for (i = 0; i < graph.edges.length; i++) {
        var edge = graph.edges[i];
        var node1 = nodes[edge[0]];
        var node2 = nodes[edge[1]];
        var edgeElement = addEdge(edgeGroup, node1, node2);
        edges.push({
            node1: node1,
            node2: node2,
            element: edgeElement,
        });
    }

    // Return an object with the graph elements
    return {
        nodes: nodes,
        edges: edges,
    };
}

function testGraphAllNodesColoured(graph) {
    for (var i = 0; i < graph.nodes.length; i++) {
        if (graph.nodes[i].colour === undefined) {
            return false;
        }
    }
    return true;
}

function testGraphAllEdgeNodesDifferent(graph) {
    for (var i = 0; i < graph.edges.length; i++) {
        var edge = graph.edges[i];
        if (edge.node1.colour === edge.node2.colour) {
            return false;
        }
    }
    return true;
}


// Build graph
var graph = {
    nodeRadius: 6,
    nodes: [[-16, -16], [16, -16], [16, 16], [-16, 16]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0]]
};

Puzzle.nodeRadius = 8;
Puzzle.graph = addGraph(Puzzle, graph);
Puzzle.evalutationFunction = function (Puzzle) {
    return testGraphAllNodesColoured(Puzzle.graph) &&
        testGraphAllEdgeNodesDifferent(Puzzle.graph);
}
