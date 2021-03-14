import React from 'react';

import { getGraphSet } from './utils/loadPuzzle';
import { graphIsChromatic } from './utils/evaluate';
import PuzzlePage from '../PuzzleChamber/PuzzleChamber';
import { ColourableGraph } from './PuzzleComponents/Graph';


const puzzle = [{
    colourPalette: 1,
    graphs: [[0]]
}, {
    colourPalette: 2,
    graphs: [[1, 2], [0, 0]]
}];

export const Tutorial = (
    <PuzzlePage
        puzzles={puzzle}
        evaluate={graphIsChromatic}
        getPuzzleObject={getGraphSet}
        displayPuzzle={ColourableGraph}
    />
);
