import {
    sequencesMatch,
    allItemsColoured,
    graphIsChromatic,
    attributesHaveMapping,
    allConnectedItemsHaveDifferentColours
} from '../utils/evaluation';

import { getNodesOnCircle, getLoopOfEdges } from '../utils/graphUtils';
import { getGraphObject } from '../Puzzles/puzzleLoaders';


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

describe('attributesHaveMapping', () => {
    it('returns true when given an empty array', () => {
        expect(attributesHaveMapping([])).toBe(true);
    });

    it('returns true when given an empty object', () => {
        const arr = [{}];
        expect(attributesHaveMapping(arr, 'attr1', 'attr2')).toBe(true);
    });

    it('returns true when given one object', () => {
        const arr = [{ attr1: 1, attr2: 2 }];
        expect(attributesHaveMapping(arr, 'attr1', 'attr2')).toBe(true);
    });

    it('returns true when objects have exact mapping', () => {
        const arr = [{ attr1: 1, attr2: 1 }, { attr1: 2, attr2: 2 }, { attr1: 3, attr2: 3 }];
        expect(attributesHaveMapping(arr, 'attr1', 'attr2')).toBe(true);
    });

    it('returns true when objects have not exact but consistent mapping', () => {
        const arr = [{ attr1: 1, attr2: 2 }, { attr1: 2, attr2: 4 }, { attr1: 3, attr2: 7  }, { attr1: 2, attr2: 4 }];
        expect(attributesHaveMapping(arr, 'attr1', 'attr2')).toBe(true);
    });

    it('returns false when objects do not have consistent mapping', () => {
        const arr = [{ attr1: 1, attr2: 2 }, { attr1: 2, attr2: 4 }, { attr1: 3, attr2: 7  }, { attr1: 2, attr2: 2 }];
        expect(attributesHaveMapping(arr, 'attr1', 'attr2')).toBe(false);
    });
});