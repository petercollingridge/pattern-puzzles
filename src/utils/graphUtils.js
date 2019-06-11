export function getPointsOnACircle(n, {r=1, offsetAngle=0, dx=0, dy=0}={}) {
    const points = [];
    const dAngle = 2 * Math.PI / n;
    let angle = (offsetAngle * Math.PI / 180 || 0) - 0.5 * dAngle;

    for (let i = 0; i < n; i++) {
        points.push([
            dx + r * Math.sin(angle),
            dy + r * Math.cos(angle),
        ]);
        angle += dAngle;
    }

    return points;
}

export function getNodesOnCircle(colours, {r=1, offsetAngle=0, dx=0, dy=0}={}) {
    if (!Array.isArray(colours)) {
        colours = new Array(colours);
    }

    const n = colours.length;
    const nodes = [];
    const dAngle = 2 * Math.PI / n;
    let angle = (offsetAngle * Math.PI / 180 || 0) - 0.5 * dAngle;

    for (let i = 0; i < n; i++) {
        nodes.push([
            dx + r * Math.sin(angle),
            dy + r * Math.cos(angle),
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

export function getLinearGraph(colours, scale=1) {
    if (!Array.isArray(colours)) {
        colours = new Array(colours);
    }

    const n = colours.length;
    const startX = - (n - 1) * scale / 2;
    const nodes = colours.map((colour, i) => [startX + i * scale, 0, colour])
    const edges = [];

    for (let i = 1; i < n; i++) {
        edges.push([i - 1, i]);
    }

    return { nodes, edges };
}
