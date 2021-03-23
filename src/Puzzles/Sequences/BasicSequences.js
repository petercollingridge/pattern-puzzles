/*
 * Given a sequence of objects, continue it or fill in the missing bits.
 */

import React from 'react';

import Icons from './Icons';
import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { ColourableSequence } from '../PuzzleComponents/Sequence';
import { getSequenceObject } from '../utils/loadPuzzle';
import { sequencesMatch } from '../utils/evaluate';


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

const correctSequence = ({ sequence, target }) => sequencesMatch(sequence, target, 'colour');

const PuzzleComponent = ({ puzzle }) => 
    <PuzzlePage
        puzzles={puzzle}
        evaluate={correctSequence}
        getPuzzleObject={getSequenceObject}
        displayPuzzle={ColourableSequence}
    />

const BasicSequences = [{
    name: 'Sequences 1',
    slug: 'sequences-1',
    icon: Icons[0],
    component: () => <PuzzleComponent puzzle={puzzles1} />,
}, {
    name: 'Sequences 2',
    slug: 'sequences-2',
    icon: Icons[1],
    component: () => <PuzzleComponent puzzle={puzzles2} />,
}];

export default BasicSequences;
