import { getGraphObject } from '../Puzzles/utils/loadPuzzle';

describe('getGraphObject', () => {
    it('returns an empty graph when given nothing', () => {
        const graph = getGraphObject({});
        expect(graph).toHaveProperty('nodes');
        expect(graph).toHaveProperty('edges');
        expect(graph.nodes.length).toBe(0);
        expect(graph.edges.length).toBe(0);
    });

    it('returns a graph object when given just nodes', () => {
        const graph = getGraphObject({
            nodes: [[0, 1]]
        });

        expect(graph).toHaveProperty('nodes');
        expect(graph.nodes.length).toBe(1);

        const node = graph.nodes[0];
        expect(node.x).toBe(0);
        expect(node.y).toBe(32);
        expect(node.r).toBe(8);
        expect(node.colour).toBe(undefined);
        expect(node.fixed).toBe(false);
    });

    it('returns a graph object with fixed node colours when graph has a colour', () => {
        const graph = getGraphObject({
            nodes: [[0, 1], [2, 4]],
            colour: 1
        });

        expect(graph).toHaveProperty('nodes');
        expect(graph.nodes.length).toBe(2);

        expect(graph.nodes[0].colour).toBe(1);
        expect(graph.nodes[0].fixed).toBe(true);
        expect(graph.nodes[1].colour).toBe(1);
        expect(graph.nodes[1].fixed).toBe(true);
    });

    it('returns a graph object with fixed node colours when node have a colour', () => {
        const graph = getGraphObject({
            nodes: [[0, 1, 1], [2, 4, 2], [3, 2]],
        });

        expect(graph).toHaveProperty('nodes');
        expect(graph.nodes.length).toBe(3);

        expect(graph.nodes[0].colour).toBe(1);
        expect(graph.nodes[0].fixed).toBe(true);
        expect(graph.nodes[1].colour).toBe(2);
        expect(graph.nodes[1].fixed).toBe(true);
        expect(graph.nodes[2].colour).toBe(undefined);
        expect(graph.nodes[2].fixed).toBe(false);
    });

    it('node colours only colour nodes without a given colour', () => {
        const graph = getGraphObject({
            nodes: [[0, 1, 1], [3, 2]],
            colour: 3
        });

        expect(graph).toHaveProperty('nodes');
        expect(graph.nodes.length).toBe(2);

        expect(graph.nodes[0].colour).toBe(1);
        expect(graph.nodes[0].fixed).toBe(true);
        expect(graph.nodes[1].colour).toBe(3);
        expect(graph.nodes[1].fixed).toBe(true);
    });

    it('returns a graph object with a given size', () => {
        const graph = getGraphObject({
            nodes: [[-2, 3]],
            size: 10
        });

        expect(graph).toHaveProperty('nodes');
        expect(graph.nodes.length).toBe(1);

        const node = graph.nodes[0];
        expect(node.x).toBe(-20);
        expect(node.y).toBe(30);
        expect(node.r).toBe(8);
    });

    it('returns a graph object with a given node radius', () => {
        const graph = getGraphObject({
            nodes: [[-2, 3]],
            r: 5
        });

        expect(graph).toHaveProperty('nodes');
        expect(graph.nodes.length).toBe(1);

        const node = graph.nodes[0];
        expect(node.x).toBe(-64);
        expect(node.y).toBe(96);
        expect(node.r).toBe(5);
    });

    it('returns a graph object with edges', () => {
        const graph = getGraphObject({
            nodes: [[0, 1, 1], [2, 4, 2], [3, 2, 3]],
            edges: [[1, 2], [2, 0]]
        });

        expect(graph).toHaveProperty('nodes');
        expect(graph.edges.length).toBe(2);

        const edge1 = graph.edges[0];
        expect(edge1).toHaveProperty('node1');
        expect(edge1).toHaveProperty('node2');
        expect(edge1.node1.colour).toBe(2);
        expect(edge1.node2.colour).toBe(3);
        expect(edge1.x1).toBe(64);
        expect(edge1.y1).toBe(128);
        expect(edge1.x2).toBe(96);
        expect(edge1.y2).toBe(64);

        const edge2 = graph.edges[1];
        expect(edge2).toHaveProperty('node1');
        expect(edge2).toHaveProperty('node2');
        expect(edge2.node1.colour).toBe(3);
        expect(edge2.node2.colour).toBe(1);
    });
});
