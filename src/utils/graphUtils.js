// If arr is not an array return an empty array with the length
function getArray(arr) {
    if (Array.isArray(arr)) {
        return arr;
    }
    return Array.from({ length: arr });
}

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
    colours = getArray(colours);
    const n = colours.length;
    const points = getPointsOnACircle(n, { r, offsetAngle, dx, dy });

    // Combine coordinates with colours
    const nodes = points.map(([x, y], i) => [x, y, colours[i]]);

    return nodes;
}

export function getLineOfEdges(start, stop) {
    if (stop === undefined) {
        stop = start - 1;
        start = 0;
    }

    var edges = [];
    for (var i = start; i < stop; i++) {
        edges.push([i, i + 1]);
    }

    return edges;
}

export function getLoopOfEdges(start, stop) {
    if (stop === undefined) {
        stop = Math.max(0, start - 1);
        start = 0;
    }

    const edges = getLineOfEdges(start, stop);
    if (start !== stop) {
        edges.push([stop, start]);
    }

    return edges;
}

export function linearGraph(colours, scale=1) {
    colours = getArray(colours);
    const n = colours.length;
    const startX = - (n - 1) * scale / 2;
    const nodes = colours.map((colour, i) => [startX + i * scale, 0, colour])
    const edges = getLineOfEdges(n);

    return { nodes, edges };
}

export function loopGraph(colours, scale=1) {
    colours = getArray(colours);
    const nodes = getNodesOnCircle(colours, { r: scale });
    const edges = getLoopOfEdges(colours.length);

    return { nodes, edges };
}

function getRegularPolygonGraph(size, colours, scale=1) {
    // Can pass in a single colour to set all nodes to that colour
    if (!Array.isArray(colours)) {
        colours = Array.from({ length: size }).map(_ => colours);
    }

    return {
        nodes: getNodesOnCircle(colours, { r: scale }),
        edges: getLoopOfEdges(size)
    };
}

export function triangleGraph(colours, scale=1) {
    return getRegularPolygonGraph(3, colours, scale);
}

export function squareGraph(colours, scale=1) {
    return getRegularPolygonGraph(4, colours, scale);
}
