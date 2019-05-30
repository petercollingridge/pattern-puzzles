// Given arrays of node coordinates and edge coordinates, return an object of nodes and edges
export function getGraphObject({ nodes=[], edges=[], size=32, r=8 }) {
    const nodeObjects = nodes.map(([x, y]) => ({
        x: x * size,
        y: y * size,
        r
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
    return {
        // Get a sequence with 0s for user to fill in
        sequence: pattern.concat(new Array(answer.length).fill(0)),
        // Target sequence is the existing sequence plus the answer fragment
        target: pattern.concat(answer)
    };
}
