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
