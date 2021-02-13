import { isColourable } from '../Puzzles/utils/isColourable';


describe('isColourable', () => {
    it('returns an object with class of "no-fill" and "colourable" when colour is 0', () => {
        const item = { colour: 0 };
        const chamber = { state: { colourPalette: [] } };
        const colouredItem = isColourable(item, chamber);
        expect(colouredItem.className).toMatch(/no-fill/);
        expect(colouredItem.className).toMatch(/colourable/);
    });

    it('returns an object with class of "fill-1" and "colourable" when colour is 1', () => {
        const item = { colour: 1 };
        const chamber = { state: { colourPalette: [] } };
        const colouredItem = isColourable(item, chamber);
        expect(colouredItem.className).toMatch(/fill-1/);
        expect(colouredItem.className).toMatch(/colourable/);
        expect(colouredItem.className).not.toMatch(/no-fill/);
    });

    it('returns an object with class of "fill-1" and not "colourable" when item is fixed', () => {
        const item = { colour: 1, fixed: true };
        const chamber = { state: { colourPalette: [] } };
        const colouredItem = isColourable(item, chamber);
        expect(colouredItem.className).toMatch(/fill-1/);
        expect(colouredItem.className).not.toMatch(/colourable/);
    });

    it('returns an object with tab-index 0 unless item is fixed', () => {
        const chamber = { state: { colourPalette: [] } };

        const item1 = { colour: 1 };
        const colourableItem = isColourable(item1, chamber);
        expect(colourableItem.tabIndex).toBe(0);

        const item2 = { colour: 1, fixed: true };
        const fixedItem = isColourable(item2, chamber);
        expect(fixedItem.tabIndex).toBe(undefined);
    });
});

describe('isColourable onClick function', () => {
    it('has no effect if chamber colour is 0', () => {
        const item = { colour: 0 };
        const chamber = { state: { selectedColour: 0, colourPalette: [] } };

        const colouredItem = isColourable(item, chamber);
        expect(colouredItem.className).toMatch(/no-fill/);
        expect(colouredItem.className).toMatch(/colourable/);

        colouredItem.onClick();
        expect(item.colour).toEqual(0);
        expect(colouredItem.className).toMatch(/no-fill/);
        expect(colouredItem.className).toMatch(/colourable/);
    });

    it('colours an non-coloured item with the chamber colour', () => {
        const item = { colour: 0 };
        const chamber = {
            state: { selectedColour: 1, colourPalette: [] },
            setState: () => {},
            update: () => {}
        };

        const colouredItem = isColourable(item, chamber);
        expect(item.colour).toEqual(0);
        colouredItem.onClick();
        expect(item.colour).toEqual(1);
    });

    it('colours a coloured item with the chamber colour if the colours are different', () => {
        const item = { colour: 1 };
        const chamber = {
            state: { selectedColour: 2, colourPalette: [] },
            setState: () => {},
            update: () => {}
        };

        const colouredItem = isColourable(item, chamber);
        expect(item.colour).toEqual(1);
        colouredItem.onClick();
        expect(item.colour).toEqual(2);
    });

    it('removes the colours when the item colour already matches the existing colour', () => {
        const item = { colour: 1 };
        const chamber = {
            state: { selectedColour: 1, colourPalette: [] },
            setState: () => {},
            update: () => {}
        };

        const colouredItem = isColourable(item, chamber);
        expect(item.colour).toEqual(1);
        colouredItem.onClick();
        expect(item.colour).toEqual(0);
    });

    it('uses up a colour use when colouring a node', () => {
        const item = { colour: 0 };
        const chamber = {
            state: { selectedColour: 1, colourPalette: [2, 1] },
            setState: (newState) => {
                chamber.state = Object.assign(chamber.state, newState);
            },
            update: () => {}
        };

        const colouredItem = isColourable(item, chamber);
        expect(item.colour).toEqual(0);
        colouredItem.onClick();
        expect(item.colour).toEqual(1);
        expect(chamber.state.colourPalette).toEqual([1, 1]);
    });

    it('adds back a colour use when un-colouring a node', () => {
        const item = { colour: 1 };
        const chamber = {
            state: { selectedColour: 1, colourPalette: [2, 1] },
            setState: (newState) => {
                chamber.state = Object.assign(chamber.state, newState);
            },
            update: () => {}
        };

        const colouredItem = isColourable(item, chamber);
        expect(item.colour).toEqual(1);
        colouredItem.onClick();
        expect(item.colour).toEqual(0);
        expect(chamber.state.colourPalette).toEqual([3, 1]);
    });

    it('updates colour counts when colouring a coloured node with a different colour', () => {
        const item = { colour: 1 };
        const chamber = {
            state: { selectedColour: 2, colourPalette: [2, 1] },
            setState: (newState) => {
                chamber.state = Object.assign(chamber.state, newState);
            },
            update: () => {}
        };

        const colouredItem = isColourable(item, chamber);
        expect(item.colour).toEqual(1);
        colouredItem.onClick();
        expect(item.colour).toEqual(2);
        expect(chamber.state.colourPalette).toEqual([3, 0]);
    });
});
