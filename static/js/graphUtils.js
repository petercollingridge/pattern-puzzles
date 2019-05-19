
function addGraph(puzzle, graph) {
    var r = graph.nodeRadius || 5;
    var scale = graph.scale || 1;

    // Create groups for the different graph elements
    var graphElement = addSVGElement('g', puzzle.element);
    var edgeGroup = addSVGElement('g', graphElement, {'class': 'graph-edges'});
    var nodeGroup = addSVGElement('g', graphElement, {'class': 'graph-nodes'});

    // Add nodes
    centerGraph(graph.nodes);
    var nodes = [];
    if (graph.nodes) {
        for (var i = 0; i < graph.nodes.length; i++) {
            var node = graph.nodes[i];
            var nodeObject = {
                cx: node[0] * scale,
                cy: node[1] * scale,
                r: r
            };
            var nodeElement = addCircle(nodeGroup, nodeObject);
            nodeObject.element = nodeElement;
            makeElementColourable(nodeElement, nodeObject, puzzle);
            nodes.push(nodeObject);
        }
    }

    // Add edges
    var edges = [];
    if (graph.edges) {
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
    }

    // Return an object with the graph elements
    return {
        nodes: nodes,
        edges: edges,
    };
}

function getNodesOnCircle(n, r, offset) {
    var nodes = [];
    var dAngle = 2 * Math.PI / n;
    var angle = (offset || 0) - 0.5 * dAngle;
    r = r || 1

    for (var i = 0; i < n; i++) {
        nodes.push([
            r * Math.sin(angle),
            r * Math.cos(angle)
        ]);
        angle += dAngle;
    }
    return nodes;
}

function getLoopOfEdges(start, stop) {
    if (stop === undefined) {
        stop = start - 1;
        start = 0;
    }

    var edges = [];
    for (var i = start; i < stop; i++) {
        edges.push([i, i + 1]);
    }
    edges.push([start, stop]);
    return edges;
}

function centerGraph(nodes) {
    // Move the center of the graph bounding box to (0, 0)
    var n = nodes.length;

    var minX = nodes[0][0];
    var maxX = nodes[0][0];
    var minY = nodes[0][1];
    var maxY = nodes[0][1];

    for (var i = 1; i < n; i++) {
        var x = nodes[i][0];
        var y = nodes[i][1];

        if (x < minX) { minX = x; }
        else if (x > maxX) { maxX = x; }

        if (y < minY) { minY = y; }
        else if (y > maxY) { maxY = y; }
    }

    var dx = (minX + maxX) / 2;
    var dy = (minY + maxY) / 2;

    for (i = 0; i < n; i++) {
        nodes[i] = [
            nodes[i][0] - dx,
            nodes[i][1] - dy
        ];
    }
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
