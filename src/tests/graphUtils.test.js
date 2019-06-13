import {
    getPointsOnACircle
} from '../utils/graphUtils';


describe('getPointsOnACircle', () => {
    it('returns an empty array when given 0', () => {
        expect(getPointsOnACircle(0).length).toBe(0);
    });

    it('returns a two points on a horizontal line when given 2', () => {
        const points = getPointsOnACircle(2);
        expect(points.length).toBe(2);
        const [p1, p2] = points;
        expect(p1[0]).toBeCloseTo(-1, 5);
        expect(p1[1]).toBeCloseTo(0, 5);
        expect(p2[0]).toBeCloseTo(1, 5);
        expect(p2[1]).toBeCloseTo(0, 5);
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

});