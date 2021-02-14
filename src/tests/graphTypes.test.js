import {
    linearGraph
} from '../Puzzles/utils/graphUtils';


describe('linearGraph', () => {
    it('returns an empty graph when given 0', () => {
        const graph = linearGraph(0);
        expect(graph.nodes.length).toBe(0);
        expect(graph.edges.length).toBe(0);
    });

    it('returns an empty graph when given an empty array', () => {
        const graph = linearGraph([]);
        expect(graph.nodes.length).toBe(0);
        expect(graph.edges.length).toBe(0);
    });

    it('returns a graph when given a number', () => {
        const graph = linearGraph(3);
        expect(graph.nodes.length).toBe(3);
        expect(graph.edges.length).toBe(2);
        expect(graph.nodes).toStrictEqual([[-1, 0, undefined], [0, 0, undefined], [1, 0, undefined]]);
        expect(graph.edges).toEqual([[0, 1], [1, 2]]);
    });

    it('returns a coloured graph when given a number and a colour', () => {
        const graph = linearGraph(3, { colour: 2 });
        expect(graph.nodes).toStrictEqual([[-1, 0, 2], [0, 0, 2], [1, 0, 2]]);
    });

    it('returns a graph when given an array of colours', () => {
        const graph = linearGraph([1, 2, undefined, 3]);
        expect(graph.nodes.length).toBe(4);
        expect(graph.edges.length).toBe(3);
        expect(graph.nodes).toStrictEqual([[-1.5, 0, 1], [-0.5, 0, 2], [0.5, 0, undefined], [1.5, 0, 3]]);
        expect(graph.edges).toEqual([[0, 1], [1, 2], [2, 3]]);
    });

    it('returns a scaled graph when given scale', () => {
        const graph = linearGraph(3, { scale: 2 });
        expect(graph.nodes.length).toBe(3);
        expect(graph.edges.length).toBe(2);
        expect(graph.nodes).toStrictEqual([[-2, 0, undefined], [0, 0, undefined], [2, 0, undefined]]);
    });

    it('returns a graph with additional parameters when given them', () => {
        const graph = linearGraph(3, { bonus: 'test' });
        expect(graph.nodes.length).toBe(3);
        expect(graph.edges.length).toBe(2);
        expect(graph.bonus).toBe('test');
    });
});
