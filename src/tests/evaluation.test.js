import {
    allItemsHaveValue,
    allItemsColoured,
    extractAttribute,
    sequencesMatch,
    sequenceHasNoMatches,
    graphIsChromatic,
    sequencesAreEquivalent,
    allConnectedItemsHaveDifferentColours,
    samePatternButDifferent
} from '../Puzzles/utils/evaluate';

import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';
import { getGraphObject } from '../Puzzles/utils/loadPuzzle';


describe('allItemsHaveValue', () => {
    it('returns true when given an empty array', () => {
        expect(allItemsHaveValue([])).toBe(true);
    });

    it('returns true when given an array of numbers bigger than 0', () => {
        const items = [3, 1, 20];
        expect(allItemsHaveValue(items)).toBe(true);
    });

    it('returns false when given an array of numbers where one is a 0', () => {
        const items = [3, 1, 0, 2];
        expect(allItemsHaveValue(items)).toBe(false);
    });

    it('returns false when given an array with one 0', () => {
        const items = [0];
        expect(allItemsHaveValue(items)).toBe(false);
    });

    it('returns true when given an array of items with attributes bigger than 0', () => {
        const items = [{ colour: 1 }, { colour: 3 }, { colour: 2 }];
        expect(allItemsHaveValue(items, 'colour')).toBe(true);
    });

    it('returns true when item has a different property that is 0', () => {
        const items = [{ property: true, colour: 1 }, { colour: 2 }, { colour: 3, property: 0 } ];
        expect(allItemsHaveValue(items, 'colour')).toBe(true);
    });

    it('returns false when given an item of attribute equal to 0', () => {
        const items = [{ colour: 1 }, { colour: 2 }, { colour: 0 }];
        expect(allItemsHaveValue(items, 'colour')).toBe(false);
    });

    it('returns false when given an item with an undefined attribute', () => {
        const items = [{ colour: 1 }, { property: 2 }, { colour: 3 }];
        expect(allItemsHaveValue(items, 'colour')).toBe(false);
    });
});

describe('allItemsColoured', () => {
    it('returns true when given an empty array', () => {
        expect(allItemsColoured([])).toBe(true);
    });

    it('returns true when given an array of items of the same colour', () => {
        const items = [{ colour: 1 }, { colour: 1 }, { colour: 1 }];
        expect(allItemsColoured(items)).toBe(true);
    });

    it('returns true when given an array of items of different colours', () => {
        const items = [{ colour: 1 }, { colour: 2 }, { colour: 3 } ];
        expect(allItemsColoured(items)).toBe(true);
    });

    it('returns true when given an array of items with properties including colour', () => {
        const items = [{ property: true, colour: 1 }, { colour: 2 }, { colour: 3, property: 'other' } ];
        expect(allItemsColoured(items)).toBe(true);
    });

    it('returns false when given an array with an item of colour = 0', () => {
        const items = [{ colour: 1 }, { colour: 2 }, { colour: 0 }];
        expect(allItemsColoured(items)).toBe(false);
    });

    it('returns false when given an array with an item with an undefined colour', () => {
        const items = [{ colour: 1 }, { property: 2 }, { colour: 0 }];
        expect(allItemsColoured(items)).toBe(false);
    });
});

describe('extractAttribute', () => {
    it('returns an empty array when given an empty array', () => {
        expect(extractAttribute([])).toStrictEqual([]);
    });

    it('returns array of values when given attr', () => {
        const arr = [{ attr: 2 }, { attr: 3 }, { attr: 2 }];
        expect(extractAttribute(arr, 'attr')).toStrictEqual([2, 3, 2]);
    });

    it('extracts values even when undefined', () => {
        const arr = [{ attr: 2}, { attr: 3 }, { attr: 2 }, { noAttr: 1 }];
        expect(extractAttribute(arr, 'attr')).toStrictEqual([2, 3, 2, undefined]);
    });

    it('returns the correct values when object have multiple values', () => {
        const arr = [{ value: 1, attr: 2 }, { attr: 3, value: 2 }, { noAttr: 2, value: 1 }];
        expect(extractAttribute(arr, 'value')).toStrictEqual([1, 2, 1]);
    });
});

describe('allConnectedItemsHaveDifferentColours', () => {
    const nodes = [
        { colour: 1 },
        { colour: 2 },
        { colour: 3 },
        { colour: 3 },
    ];

    it('returns true when given an empty object', () => {
        expect(allConnectedItemsHaveDifferentColours([])).toBe(true);
    });

    it('returns true when given an connection of different colour', () => {
        const items = [
            { node1: nodes[0], node2: nodes[1] },
            { node1: nodes[1], node2: nodes[2] },
            { node1: nodes[2], node2: nodes[1] }
        ];
        expect(allConnectedItemsHaveDifferentColours(items)).toBe(true);
    });

    it('returns false when given an connection that joins a node with the same colour', () => {
        const items = [
            { node1: nodes[0], node2: nodes[1] },
            { node1: nodes[1], node2: nodes[2] },
            { node1: nodes[2], node2: nodes[3] }
        ];
        expect(allConnectedItemsHaveDifferentColours(items)).toBe(false);
    });

    it('returns false when given an connection that joins a node to itself', () => {
        const items = [
            { node1: nodes[0], node2: nodes[1] },
            { node1: nodes[1], node2: nodes[1] },
            { node1: nodes[2], node2: nodes[1] }
        ];
        expect(allConnectedItemsHaveDifferentColours(items)).toBe(false);
    });
});

describe('graphIsChromatic', () => {
    it('returns true when given an empty object', () => {
        expect(graphIsChromatic({})).toBe(true);
    });

    it('returns true when given a single node', () => {
        const graph = { nodes: [{ colour: 1 }] };
        expect(graphIsChromatic(graph)).toBe(true);
    });

    it('returns false when a node has no colour', () => {
        const graph = { nodes: [{ colour: 1 }, { x: 0, y: 0 }] };
        expect(graphIsChromatic(graph)).toBe(false);
    });

    it('returns true when a given a graph with nodes of the same colour not connected', () => {
        const graph = getGraphObject({
            nodes: getNodesOnCircle([1, 2, 1, 2]),
            edges: getLoopOfEdges(4)
        });
        expect(graphIsChromatic(graph)).toBe(true);
    });

    it('returns false when a given a graph with nodes of the same colour connected', () => {
        const graph = getGraphObject({
            nodes: getNodesOnCircle([1, 2, 1, 2]),
            edges: getLoopOfEdges(4).concat([[0, 2]])
        });
        expect(graphIsChromatic(graph)).toBe(false);
    });
});

describe('sequencesMatch', () => {
    const items = [
        { attr1: 1, attr2: 1, attr3: 1 },
        { attr1: 1, attr2: 2, attr3: 1 },
        { attr1: 1, attr2: 3, attr3: 2 },
        { attr1: 1, attr2: 4, attr3: 2 },
    ];

    it('returns true when given two empty array', () => {
        expect(sequencesMatch([], [])).toBe(true);
    });

    it('returns true when given the same array twice', () => {
        expect(sequencesMatch(items, items, 'attr2')).toBe(true);
    });

    it('returns true when given two arrays with the same attributes', () => {
        const seq1 = [items[0], items[2]];
        const seq2 = [items[1], items[3]];
        expect(sequencesMatch(seq1, seq2, 'attr3')).toBe(true);
    });

    it('returns false when given two arrays with different attributes', () => {
        const seq1 = [items[0], items[2]];
        const seq2 = [items[1], items[3]];
        expect(sequencesMatch(seq1, seq2, 'attr2')).toBe(false);
    });

    it('returns false when given two arrays of different length', () => {
        const seq1 = [items[0], items[1], items[2]];
        const seq2 = [items[0], items[1]];
        expect(sequencesMatch(seq1, seq2, 'attr1')).toBe(false);
    });

    it('returns true when all attributes undefined', () => {
        const seq1 = [items[0], items[1]];
        const seq2 = [items[2], items[3]];
        expect(sequencesMatch(seq1, seq2, 'attr10')).toBe(true);
    });

    it('returns true when given the same array and no attribute parameter', () => {
        expect(sequencesMatch([1, 2, 3, 1], [1, 2, 3, 1])).toBe(true);
    });

    it('returns false when given different arrays and no attribute parameter', () => {
        expect(sequencesMatch([1, 2, 3, 1], [1, 2, 3, 2])).toBe(false);
    });
});

describe('sequenceHasNoMatches', () => {
    it('returns true when given two empty array', () => {
        expect(sequenceHasNoMatches([], [])).toBe(true);
    });

    it('returns true when given one empty array', () => {
        expect(sequenceHasNoMatches([1, 2, 3], [])).toBe(true);
    });

    it('returns false when given one array offset from another', () => {
        expect(sequenceHasNoMatches([1, 2, 3, 1], [2, 3, 1, 2])).toBe(true);
    });

    it('returns false when arrays are the same', () => {
        expect(sequenceHasNoMatches([1, 2, 3, 1], [1, 2, 3, 1])).toBe(false);
    });

    it('returns false when arrays match in one position', () => {
        expect(sequenceHasNoMatches([1, 2, 3, 1], [2, 3, 3, 2])).toBe(false);
    });
});

describe('sequencesAreEquivalent', () => {
    it('returns true when given two empty arrays', () => {
        expect(sequencesAreEquivalent([], [])).toBe(true);
    });

    it('returns false when arrays have a different length', () => {
        expect(sequencesAreEquivalent([1, 1], [1])).toBe(false);
    });

    it('returns true when arrays have the same sequence', () => {
        expect(sequencesAreEquivalent([1, 2, 3, 1], [1, 2, 3, 1])).toBe(true);
    });

    it('returns true when have different but consistent mapping', () => {
        expect(sequencesAreEquivalent([1, 2, 3, 1], [2, 3, 1, 2])).toBe(true);
    });

    it('returns false when objects have a consistent mapping in only one direction', () => {
        expect(sequencesAreEquivalent([1, 2, 3, 1], [2, 1, 2, 2])).toBe(false);
    });
});

describe('samePatternButDifferent', () => {
    it('returns true when given two empty arrays', () => {
        expect(samePatternButDifferent([], [])).toBe(true);
    });

    it('returns true with symmetric mapping', () => {
        expect(samePatternButDifferent([1, 2, 2, 3, 4, 4, 4], [2, 1, 1, 4, 3, 3, 3])).toBe(true);
    });

    it('returns true when non-symmetric mapping', () => {
        expect(samePatternButDifferent([1, 2, 2, 3, 4, 4, 4], [2, 3, 3, 4, 1, 1, 1])).toBe(true);
    });

    it('returns false when two numbers map to the same one', () => {
        expect(samePatternButDifferent([1, 2, 2, 3, 4, 4, 4], [2, 3, 3, 2, 1, 1, 1])).toBe(false);
    });

    it('returns false when one number maps to itself', () => {
        expect(samePatternButDifferent([1, 2, 2, 3, 4, 4, 4], [2, 3, 3, 1, 4, 4, 4])).toBe(false);
    });

    it('returns false when one number maps to two different numbers', () => {
        expect(samePatternButDifferent([1, 2, 1, 2], [2, 1, 2, 3])).toBe(false);
    });

    it('returns false with different size arrays', () => {
        expect(samePatternButDifferent([1, 2, 1, 2], [2, 1])).toBe(false);
    });

    it('returns falsewhen some numbers are 0', () => {
        expect(samePatternButDifferent([1, 2, 1, 2], [0, 1, 0, 1])).toBe(false);
    });
});
