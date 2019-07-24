/***
 * These functions take the raw puzzle data and return an object that can used to
 * display the puzzle and determine when the correct answer is found
***/

import { shuffle } from '../utils/common';

// Given arrays of node coordinates and edge coordinates, return an object of nodes and edges
export function getGraphObject({ nodes=[], edges=[], size=32, r=10, colour }) {
    const nodeObjects = nodes.map(([x, y, nodeColour], index) => ({
        r,
        index,
        x: x * size,
        y: y * size,
        colour: nodeColour || colour,
        fixed: Boolean(nodeColour || colour),
        edges: {}
    }));

    const edgeObjects = edges.map(([n1, n2]) => {
        const node1 = nodeObjects[n1];
        const node2 = nodeObjects[n2];
        const edge = {
            node1,
            node2,
            x1: node1.x,
            y1: node1.y,
            x2: node2.x,
            y2: node2.y
        };

        // Edges map another node to the edge object
        node1.edges[node2.index] = edge;
        node2.edges[node1.index] = edge;

        return edge;
    });

    return {
        nodes: nodeObjects,
        edges: edgeObjects
    };
}

// A graph object with a path array to store an array of nodes forming a path
export function getGraphWithPath(props) {
    const graph = getGraphObject(props);
    graph.path = [];
    return graph;
}

// Given arrays of node coordinates and edge coordinates, return two objects of nodes and edges,
// one includes the node colours and one is empty
export function getGraphAndUncolouredCopy({ nodes=[], edges=[], size=32, r=8 }) {
    const target = getGraphObject({ nodes, edges, size, r });

    // Remove the colours from the nodes
    const blankNodes = nodes.map(([x, y]) => [x, y]);
    const blankGraph = getGraphObject({ nodes: blankNodes, edges, size, r });

    return { target, blank: blankGraph };
}

export function getMapObject({ regions=[], connections=[], size=1 }) {
    const regionObjects = regions.map(([x, y, width, height]) => ({
        x: (x - width / 2) * size,
        y: (y - height / 2) * size,
        width: width * size,
        height: height * size,
    }));

    const connectionObjects = connections.map(([n1, n2]) => ({
        node1: regionObjects[n1],
        node2: regionObjects[n2],
    }));

    // Create a graph of the map in order to evaluate the solution
    return {
        regions: regionObjects,
        connections: connectionObjects
    };
}

export function getSequenceObject({ pattern, answer }) {
    //  Get a sequence of node objects
    const sequence = pattern.map(colour => ({
        colour,
        fixed: colour > 0
    }));

    // Target sequence is the starting sequence with any 0s replaced by the answer items
    let n = 0;
    const target = pattern.map(colour => {
        if (colour > 0) {
            return { colour };
        } else {
            return { colour: answer[n++] };
        }
    });

    return { sequence, target };
}

export function getGraphSequence({ graphs, answer }) {
    const sequence = [];
    const target = [];

    let n = 0;
    graphs.forEach(graph => {
        if (graph) {
            sequence.push(getGraphObject(graph));
            target.push(getGraphObject(graph));
        } else {
            // Target sequence is the starting sequence with any nulls replaced by the answer graphs
            const answerGraph = getGraphObject(answer[n]);
            target.push(answerGraph);
            
            // Displayed sequence show answer as a blank graph
            const blankGraph = getGraphObject(answer[n]);
            blankGraph.nodes.forEach(node => {
                node.fixed = false;
                node.colour = 0;
            });

            sequence.push(blankGraph);
            target.push(answerGraph);
            n++;
        }
    });

    return { sequence, target };
}

// Return an array of category object which have a colour, and an object to display
export function getCategoryObjects({ categories, randomRotate }) {
    const categoryObjects = [];
    
    categories.forEach(category => {
        const copies = category.copies || 1;

        for (let i = 0; i < copies; i++) {
            categoryObjects.push({
                category: category.type,
                object: category.item,
                rotate: randomRotate ? Math.floor(Math.random() * 12) * 30 : 0
            });
        }
    });

    return shuffle(categoryObjects);
}
