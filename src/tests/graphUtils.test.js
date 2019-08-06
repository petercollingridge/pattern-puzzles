import {
    getPointsOnACircle,
    getLineOfEdges,
    getLoopOfEdges,
    linearGraph
} from '../utils/graphUtils';


describe('getPointsOnACircle', () => {
    it('returns an empty array when given 0', () => {
        expect(getPointsOnACircle(0).length).toBe(0);
    });

    it('returns two points on a horizontal line when given 2', () => {
        const points = getPointsOnACircle(2);
        expect(points.length).toBe(2);
        const [p1, p2] = points;
        expect(p1[0]).toBeCloseTo(-1, 5);
        expect(p1[1]).toBeCloseTo(0, 5);
        expect(p2[0]).toBeCloseTo(1, 5);
        expect(p2[1]).toBeCloseTo(0, 5);
    });

    it('returns a square when given 4', () => {
        const points = getPointsOnACircle(4);
        expect(points.length).toBe(4);
        const [p1, p2, p3, p4] = points;
        const d = Math.sqrt(2) / 2;
        expect(p1[0]).toBeCloseTo(-d, 5);
        expect(p1[1]).toBeCloseTo(d, 5);
        expect(p2[0]).toBeCloseTo(d, 5);
        expect(p2[1]).toBeCloseTo(d, 5);
        expect(p3[0]).toBeCloseTo(d, 5);
        expect(p3[1]).toBeCloseTo(-d, 5);
        expect(p4[0]).toBeCloseTo(-d, 5);
        expect(p4[1]).toBeCloseTo(-d, 5);
    });

    it('passing in a parameter r creates a larger line', () => {
        const points = getPointsOnACircle(2, { r: 3 });
        expect(points.length).toBe(2);
        const [p1, p2] = points;
        expect(p1[0]).toBeCloseTo(-3, 5);
        expect(p1[1]).toBeCloseTo(0, 5);
        expect(p2[0]).toBeCloseTo(3, 5);
        expect(p2[1]).toBeCloseTo(0, 5);
    });

    it('passing in parameter dx offsets the line horizontally', () => {
        const points = getPointsOnACircle(2, { dx: 3 });
        expect(points.length).toBe(2);
        const [p1, p2] = points;
        expect(p1[0]).toBeCloseTo(2, 5);
        expect(p1[1]).toBeCloseTo(0, 5);
        expect(p2[0]).toBeCloseTo(4, 5);
        expect(p2[1]).toBeCloseTo(0, 5);
    });

    it('passing in parameter dy offsets the line vertically', () => {
        const points = getPointsOnACircle(2, { dy: -2 });
        expect(points.length).toBe(2);
        const [p1, p2] = points;
        expect(p1[0]).toBeCloseTo(-1, 5);
        expect(p1[1]).toBeCloseTo(-2, 5);
        expect(p2[0]).toBeCloseTo(1, 5);
        expect(p2[1]).toBeCloseTo(-2, 5);
    });

    it('passing in parameter offsetAngle rotates the shape', () => {
        const points = getPointsOnACircle(3, { offsetAngle: 30 });
        expect(points.length).toBe(3);
        const [p1, p2, p3] = points;
        const d = Math.sqrt(3) / 2;
        expect(p1[0]).toBeCloseTo(-0.5, 5);
        expect(p1[1]).toBeCloseTo(d, 5);
        expect(p2[0]).toBeCloseTo(1, 5);
        expect(p2[1]).toBeCloseTo(0, 5);
        expect(p3[0]).toBeCloseTo(-0.5, 5);
        expect(p3[1]).toBeCloseTo(-d, 5);
    });
});

describe('getLineOfEdges', () => {
    it('returns an empty array when given 0', () => {
        expect(getLineOfEdges(0).length).toBe(0);
    });

    it('returns a set of connections when given a single number', () => {
        const result = getLineOfEdges(4);
        expect(result).toEqual([[0, 1], [1, 2], [2, 3]]);
    });

    it('returns a set of connections when given two numbers', () => {
        const result = getLineOfEdges(2, 5);
        expect(result).toEqual([[2, 3], [3, 4], [4, 5]]);
    });
});

describe('getLoopOfEdges', () => {
    it('returns an empty array when given 0', () => {
        expect(getLoopOfEdges(0).length).toBe(0);
    });

    it('returns a set of connections when given a single number', () => {
        const result = getLoopOfEdges(4);
        expect(result).toEqual([[0, 1], [1, 2], [2, 3], [3, 0]]);
    });

    it('returns a set of connections when given two numbers', () => {
        const result = getLoopOfEdges(2, 5);
        expect(result).toEqual([[2, 3], [3, 4], [4, 5], [5, 2]]);
    });
});

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
