
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
        makeElementColourable(nodeElement, puzzle);
        nodes.push(nodeElement);
    }

    // Add edges
    var edges = [];
    for (i = 0; i < graph.edges.length; i++) {
        var edge = graph.edges[i];
        var edgeElement = addEdge(edgeGroup, nodes[edge[0]], nodes[edge[1]]);
        edges.push(edgeElement);
    }

    // Return an object with the graph elements
    return {
        nodes: nodes,
        edges: edges,
    };
}

var graph = {
    nodeRadius: 6,
    nodes: [[-16, -16], [16, -16], [16, 16], [-16, 16]],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0]]
};

Puzzle.nodeRadius = 8;
addGraph(Puzzle, graph);