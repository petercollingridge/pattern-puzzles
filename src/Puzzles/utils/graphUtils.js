import { getArray } from '../../utils/common';


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

export function getGraphBBox({ nodes }) {
    if (nodes.length === 0) {
        return { x1: 0, x2: 0, y1: 0, y2: 0 };
    }

    let x1 = nodes[0].x - nodes[0].r;
    let x2 = nodes[0].x + nodes[0].r;
    let y1 = nodes[0].y - nodes[0].r;
    let y2 = nodes[0].y + nodes[0].r;

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.x - node.r < x1) {
            x1 = node.x - node.r;
        }
        if (node.x + node.r > x2) {
            x2 = node.x + node.r;
        }
        if (node.y - node.r < y1) {
            y1 = node.y - node.r;
        }
        if (node.y + node.r > y2) {
            y2 = node.y + node.r;
        }
    }

    return { x1, y1, width: x2 - x1, height: y2 - y1 };
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
    // Link start to stop, unless they are the same or one different (a linear graph of 2)
    if (stop - start > 1) {
        edges.push([stop, start]);
    }
    return edges;
}

export function connectNodeToNodes(node1, nodes) {
    return nodes.map(node => [node1, node]);
}

// Given a graph, add a node along each existing edge
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
