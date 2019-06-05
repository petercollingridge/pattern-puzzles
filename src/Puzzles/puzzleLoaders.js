/***
 * These functions take the raw puzzle data and return an object that can used to
 * display the puzzle and determine when the correct answer is found
***/

// Given arrays of node coordinates and edge coordinates, return an object of nodes and edges
export function getGraphObject({ nodes=[], edges=[], size=32, r=8 }) {
    const nodeObjects = nodes.map(([x, y, colour]) => ({
        r,
        x: x * size,
        y: y * size,
        colour,
        fixed: Boolean(colour)
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
    };
}

// Given arrays of node coordinates and edge coordinates, return two objects of nodes and edges,
// one includes the node colours and one is empty
export function getTwoGraphObjects({ nodes=[], edges=[], size=32, r=8 }) {
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
    const patternObjects = pattern.map(item => ({
        colour: item,
        fixed: true
    }));

    const sequence = patternObjects.concat(
        answer.map(item => ({ colour: 0 })
    ));
    
    // Target sequence is the existing sequence plus the answer fragment
    const target = patternObjects.concat(
        answer.map(item => ({ colour: item })
    ));

    return { sequence, target };
}

// Return an array of category object which have a colour, and an object to display
export function getCategoryObjects({ categories }) {
    const categoryObjects = [];
    
    categories.forEach((items, i) => {
        items.forEach(item => {
            categoryObjects.push({
                category: i + 1,
                item: getGraphObject(item)
            });
        });
    });

    return categoryObjects;
}
