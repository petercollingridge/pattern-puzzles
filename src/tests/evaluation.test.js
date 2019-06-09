import {
    sequencesMatch,
    allItemsColoured,
    allConnectedItemsHaveDifferentColours
} from '../utils/evaluation';


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
});

describe('allItemsColoured', () => {
    it('returns true when given an empty array', () => {
        expect(allItemsColoured([])).toBe(true);
    });

    it('returns true when given an array of items of the same colour', () => {
        const items = [{ colour: 1 }, { colour: 1}, {colour: 1}];
        expect(allItemsColoured(items)).toBe(true);
    });

    it('returns true when given an array of items of different colours', () => {
        const items = [{ colour: 1 }, { colour: 2}, { colour: 3} ];
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
