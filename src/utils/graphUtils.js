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

export function starGraph(colours, scale=1) {
    colours = getArray(colours);
    const firstNode = colours.shift();
    const nodes = [[0, 0, firstNode]].concat(getNodesOnCircle(colours, { r: scale }));
    const edges = colours.map((_, index) => [0, index + 1]);

    return { nodes, edges };
}

export function spokeGraph(colours, scale=1) {
    let { nodes, edges } = starGraph(colours, scale);
    edges = edges.concat(getLoopOfEdges(1, colours.length))
    return { nodes, edges };
}

export function sunletGraph(n, colour, scale=1) {
    // AKA helm graph
    // Determine radius of inner shape so its side length is the same as the remaining radial spoke length
    const p = 1 / (1  + 2 * Math.sin(Math.PI / n));
    let { nodes, edges } = loopGraph(n, scale * p);
    nodes = nodes.concat(getNodesOnCircle(n, { r: scale }));
    edges = edges.concat(Array.from({ length: n }).map((_, index) => [index, index + n]));
    return { nodes, edges, colour };
}

export function prismGraph(n, colour, scale=1) {
    let { nodes, edges } = sunletGraph(n, colour, scale);
    edges = edges.concat(getLoopOfEdges(n, 2 * n - 1));
    return { nodes, edges, colour };
}

export function antiPrismGraph(n, colour, scale=1) {
    const p = 1 / (1  + 2 * Math.sin(Math.PI / n));
    let { nodes, edges } = loopGraph(n, scale * p);
    nodes = nodes.concat(getNodesOnCircle(n, { r: scale, offsetAngle: 180 / n }));
    edges = edges.concat(Array.from({ length: n }).map((_, index) => [index, n + index]));
    edges = edges.concat(Array.from({ length: n }).map((_, index) => [index, n + ((index + n - 1) % n)]));
    edges = edges.concat(getLoopOfEdges(n, 2 * n - 1));
    return { nodes, edges, colour };
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
