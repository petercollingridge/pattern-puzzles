import { nTimes } from '../../utils/common';
import {
    getArray,
    getLineOfEdges,
    getLoopOfEdges,
    getNodesOnCircle,
    subdivideGraph,
} from './graphUtils';


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

// AKA helm graph
// A loop graph, with a spoke coming out of every vertex
// Colours can be an integer that determines the nodes in the inner loop
// Or an array of colours for all nodes
export function sunletGraph(colours, params={}) {
    let n, innerColours, outerColours;

    if (Array.isArray(colours)) {
        n = colours.length / 2;
        innerColours = colours.slice(0, n);
        outerColours = colours.slice(n);
    } else {
        // colours is the number of nodes, so get two arrays of that length, full of 1s
        n = colours;
        innerColours = getArray(n, 1);
        outerColours = getArray(n, 1);
    }

    // Determine radius of inner shape so its side length is the same as the remaining radial spoke length
    const scale = params.scale || 1;
    const p = 1 / (1  + 2 * Math.sin(Math.PI / n));
    params.scale = scale * p;

    const graph = loopGraph(innerColours, params);
    graph.nodes = graph.nodes.concat(getNodesOnCircle(outerColours, { r: scale }));
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
