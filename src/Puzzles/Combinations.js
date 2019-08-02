/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from './PuzzlePage';
import { Sequence2D } from './PuzzleComponents/Sequence';
import { getCombinationObject } from './puzzleLoaders';
import { sequencesMatch } from '../utils/evaluation';


// Sequence of coloured blocks with uncoloured blocks at the end
const puzzles1 = [
    {
        colourPalette: 2,
        pattern: [[1, 2], [2, 0]],
    }
];

const puzzles = [puzzles1];

const correctSequence = ({ sequence, target }) => true

export const CombinationPuzzles = (n) =>
     <PuzzlePage
        puzzles={puzzles[n]}
        evaluate={correctSequence}
        getPuzzleObject={getCombinationObject}
        displayPuzzle={Sequence2D} />
