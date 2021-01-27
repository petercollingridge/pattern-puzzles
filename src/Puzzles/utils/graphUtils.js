
// Get an array of values from calling function <func> n times
export function nTimes(n, func) {
    return Array.from({ length: n }).map(func);
}

// If arr is not an array return an empty array with that length
// If arr is a number, then return an array with n items with the given value
function getArray(arr, value) {
    if (Array.isArray(arr)) {
        return arr;
    }
    return nTimes(arr, (_) => value);
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

// Given a <start> and <stop> value, return an array of arrays,
// where each sub-array is a pair of consequtive values between <start> and <stop>
// e.g. (3, 6) => [[3, 4], [4, 5], [5, 6]]
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

export function connectNodeToNodes(node1, nodes) {
    return nodes.map(node => [node1, node]);
}

export function linearGraph(colours, params={}) {
    const { scale=1, colour, ...props } = params;
    colours = getArray(colours, colour);
    
    const n = colours.length;
    const startX = (1 - n) * scale / 2;
    const nodes = colours.map((colour, i) => [startX + i * scale, 0, colour])
    const edges = getLineOfEdges(n);

    return Object.assign(props, { nodes, edges });
}

export function loopGraph(colours, params={}) {
    const { scale=1, colour, ...props } = params;
    colours = getArray(colours, colour);
    
    const nodes = getNodesOnCircle(colours, { r: scale });
    const edges = getLoopOfEdges(colours.length);

    return Object.assign(props, { nodes, edges });
}

export function starGraph(colours, params={}) {
    const { scale=1, colour, ...props } = params;
    colours = getArray(colours, colour);

    const firstNode = colours.shift();
    const nodes = [[0, 0, firstNode]].concat(getNodesOnCircle(colours, { r: scale }));
    const edges = colours.map((_, index) => [0, index + 1]);

    return Object.assign(props, { nodes, edges });
}

export function spokeGraph(colours, params={}) {
    const graph = starGraph(colours, params);
    graph.edges = graph.edges.concat(getLoopOfEdges(1, colours - 1))
    return graph;
}

export function sunletGraph(n, params={}) {
    // AKA helm graph
    // Determine radius of inner shape so its side length is the same as the remaining radial spoke length
    const p = 1 / (1  + 2 * Math.sin(Math.PI / n));
    const scale = params.scale || 1;
    params.scale = scale * p;

    const graph = loopGraph(n, params);
    graph.nodes = graph.nodes.concat(getNodesOnCircle(n, { r: scale }));
    graph.edges = graph.edges.concat(nTimes(n, (_, index) => [index, index + n]));

    return graph;
}

export function prismGraph(n, params={}) {
    const graph = sunletGraph(n, params);
    graph.edges = graph.edges.concat(getLoopOfEdges(n, 2 * n - 1));
    return graph;
}

export function antiPrismGraph(n, params={}) {
    const p = 1 / (1  + 2 * Math.sin(Math.PI / n));
    const scale = params.scale || 1;
    params.scale = scale * p;

    const graph = loopGraph(n, params);
    graph.nodes = graph.nodes.concat(getNodesOnCircle(n, { r: scale, offsetAngle: 180 / n }));
    graph.edges = graph.edges.concat(nTimes(n, (_, index) => [index, n + index]));
    graph.edges = graph.edges.concat(nTimes(n, (_, index) => [index, n + ((index + n - 1) % n)]));
    graph.edges = graph.edges.concat(getLoopOfEdges(n, 2 * n - 1));
    return graph;
}

export function gearGraph(n, params={}) {
    const graph = subdivideGraph(loopGraph(n, params));
    graph.nodes.push([0, 0, undefined]);
    graph.edges = graph.edges.concat(nTimes(n, (_, index) => [index, 2 * n]))
    return graph;
}

export function subdivideGraph(graph) {
    const newEdges = [];
    const nodes = graph.nodes;
    let n = nodes.length;

    graph.edges.forEach(([n1, n2]) => {
        const node1 = nodes[n1];
        const node2 = nodes[n2];
        nodes.push([(node1[0] + node2[0]) / 2, (node1[1] + node2[1]) / 2, node1[2]]);
        newEdges.push([n1, n], [n2, n]);
        n++;
    })

    graph.edges = newEdges;

    return graph;
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
