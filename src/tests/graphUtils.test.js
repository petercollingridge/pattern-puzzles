import {
    getPointsOnACircle
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