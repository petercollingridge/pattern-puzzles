import enzyme from 'enzyme';
import { allItemsColoured } from '../utils/evaluationUtils';


describe('allItemsColoured', () => {
    it ('returns true when given an empty array', () => {
        expect(allItemsColoured([])).toBe(true);
    });

    it ('returns true when given an array of items of the same colour', () => {
        const items = [{ colour: 1 }, { colour: 1}, {colour: 1}];
        expect(allItemsColoured(items)).toBe(true);
    });

    it ('returns true when given an array of items of different colours', () => {
        const items = [{ colour: 1 }, { colour: 2}, { colour: 3} ];
        expect(allItemsColoured(items)).toBe(true);
    });

    it ('returns true when given an array of items with properties including colour', () => {
        const items = [{ property: true, colour: 1 }, { colour: 2 }, { colour: 3, property: 'other' } ];
        expect(allItemsColoured(items)).toBe(true);
    });

    it ('returns false when given an array with an item of colour = 0', () => {
        const items = [{ colour: 1 }, { colour: 2 }, { colour: 0 }];
        expect(allItemsColoured(items)).toBe(false);
    });

    it ('returns false when given an array with an item with an undefined colour', () => {
        const items = [{ colour: 1 }, { property: 2 }, { colour: 0 }];
        expect(allItemsColoured(items)).toBe(false);
    });
});