import {
    getRepeatArray,
    getPermutations,
    getCombinationsWithReplacement
} from '../utils/common';

describe('getRepeatArray', () => {
    it('returns an empty array when size is 0', () => {
        expect(getRepeatArray(1, 0)).toEqual([]);
    });

    it('returns an array of the correct size', () => {
        expect(getRepeatArray(1, 3)).toEqual([1,1,1]);
    });
});

describe('getPermutations', () => {
    it('returns an array containing an empty when given an empty array', () => {
        expect(getPermutations([])).toEqual([[]]);
    });

    it('returns an array of one array when given 1 item', () => {
        expect(getPermutations([1])).toEqual([[1]]);
    });

    it('returns an array of arrays with the items permuted', () => {
        expect(getPermutations([1, 2])).toEqual([
            [1, 2], [2, 1]
        ]);
    });

    it('returns an array of arrays with the items permuted', () => {
        expect(getPermutations([1, 2])).toEqual([
            [1, 2], [2, 1]
        ]);
    });

    it('permutes an array of 3 items', () => {
        expect(getPermutations([1, 2, 3])).toEqual([
            [1, 2, 3], [1, 3, 2],
            [2, 1, 3], [2, 3, 1],
            [3, 1, 2], [3, 2, 1],
        ]);
    });

    it('permutes an array with repeated items', () => {
        expect(getPermutations([1, 2, 2])).toEqual([
            [1, 2, 2], [2, 1, 2], [2, 2, 1],
        ]);
    });
});

describe('getCombinationsWithReplacement', () => {
    it('returns an array containing an empty when given an empty array', () => {
        expect(getCombinationsWithReplacement([1, 2], 0)).toEqual([[]]);
    });

    it('returns each item when size is 1', () => {
        expect(getCombinationsWithReplacement([1, 2], 1)).toEqual([
            [1], [2]
        ]);
    });

    it('returns all combinations for size = 2', () => {
        expect(getCombinationsWithReplacement([1, 2], 2)).toEqual([
            [1, 1], [1, 2], [2, 2]
        ]);
    });

    it('returns all combinations for size = 3', () => {
        expect(getCombinationsWithReplacement([1, 2], 3)).toEqual([
            [1, 1, 1], [1, 1, 2], [1, 2, 2], [2, 2, 2]
        ]);
    });

    it('returns all combinations with 3 items', () => {
        expect(getCombinationsWithReplacement([1, 2, 3], 2)).toEqual([
            [1, 1], [1, 2], [1, 3],
            [2, 2], [2, 3], [3, 3],
        ]);
    });
});
