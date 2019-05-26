export function getGraphObject(nodes, edges, scale=32, radius=8) {
    const nodeObjects = nodes.map(([x, y]) => ({
        x: x * scale,
        y: y * scale,
        r: radius
    }));

    const edgeObjects = edges.map(([n1, n2]) => {
        const node1 = nodeObjects[n1];
        const node2 = nodeObjects[n2];
        return {
            node1,
            node2,
            x1: node1.x,
            y1: node1.y,
            x2: node2.x,
            y2: node2.y
        };
    });

    return {
        nodes: nodeObjects,
        edges: edgeObjects
    }
}

export function getNodesOnCircle(colours, r, offset) {
    var n;
    if (Array.isArray(colours)) {
        n = colours.length;
    } else {
        n = colours;
        colours = new Array(n);
    }

    var nodes = [];
    var dAngle = 2 * Math.PI / n;
    var angle = (offset || 0) - 0.5 * dAngle;
    r = r || 1

    for (var i = 0; i < n; i++) {
        nodes.push([
            r * Math.sin(angle),
            r * Math.cos(angle),
            colours[i]
        ]);
        angle += dAngle;
    }

    return nodes;
}

export function getLoopOfEdges(start, stop) {
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
