/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Sequence, GraphSequence } from './PuzzleComponents/Sequence';
import { getSequenceObject, getGraphSequence } from './puzzleLoaders';
import { allItemsColoured, sequencesMatch } from '../utils/evaluation';
import { triangleGraph } from '../utils/graphUtils';


// Sequence of coloured blocks with uncoloured blocks at the end
const puzzles1 = [
    {
        colourPalette: 1,
        pattern: [1, 1, 1, 0],
        answer: [1]
    }, {
        colourPalette: 2,
        pattern: [1, 1, 1, 1, 0, 0],
        answer: [1, 1]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 1, 2, 1, 2, 0, 0],
        answer: [1, 2]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 1, 2, 3, 0, 0, 0],
        answer: [1, 2, 3]
    }, {
        colourPalette: 2,
        pattern: [1, 1, 2, 2, 1, 1, 0, 0],
        answer: [2, 2]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 2, 1, 2, 2, 0, 0, 0],
        answer: [1, 2, 2]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 3, 1, 2, 3, 3, 0, 0, 0, 0],
        answer: [1, 2, 3, 3]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 0, 0, 0, 0],
        answer: [1, 2, 1, 1]
    }
];

// Sequence of coloured blocks with uncoloured blocks in the middle of the sequence
const puzzles2 = [
    {
        colourPalette: 1,
        pattern: [1, 1, 0, 1, 1],
        answer: [1]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 1, 0, 1, 2, 1],
        answer: [2]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 0, 2, 3],
        answer: [1]
    }, {
        colourPalette: 2,
        pattern: [1, 1, 2, 2, 1, 0, 0, 2],
        answer: [1, 2]
    }, {
        colourPalette: 2,
        pattern: [1, 2, 2, 1, 2, 0, 0, 2, 2],
        answer: [2, 1]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1],
        answer: [3]
    }, {
        colourPalette: 3,
        pattern: [1, 2, 3, 0, 0, 3, 1, 2, 3, 2, 1],
        answer: [2, 1]
    }, {
        colourPalette: 3,
        pattern: [1, 1, 0, 0, 0, 1, 2, 3, 1, 1, 2, 3],
        answer: [2, 3, 1]
    }
];

// Sequence of coloured graphs with uncoloured one at the end
const puzzles3 = [
    {
        colourPalette: 1,
        graphs: [triangleGraph(1), triangleGraph(1), triangleGraph(1), null],
        answer: [triangleGraph(1)]
    }
];

const puzzles = [puzzles1, puzzles2, puzzles3];

const evaluate = ({ sequence, target }) =>
    allItemsColoured(sequence) &&
    sequencesMatch(sequence, target, 'colour');

const ColourableSequence = (puzzle, selectedColour, update) => {
    const colourItem = index => {
        puzzle.sequence[index].colour = selectedColour;
        update(puzzle);
    }

    return <Sequence {...puzzle} colourItem={colourItem}/>
};

const ColourableGraphSequence = (puzzle, selectedColour, update) => {
    const colourItem = index => {
        puzzle.sequence[index].colour = selectedColour;
        update(puzzle);
    }

    return <GraphSequence {...puzzle} colourItem={colourItem}/>
};

export const Sequences = (n) => {
    if (n < 2) {
        return <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={evaluate}
            getPuzzleObject={getSequenceObject}
            displayPuzzle={ColourableSequence} />
    } else {
        return <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={evaluate}
            getPuzzleObject={getGraphSequence}
            displayPuzzle={ColourableGraphSequence} />
    }
}
