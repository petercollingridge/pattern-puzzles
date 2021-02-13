// Derrangements - permutate the colours on a graph so that each node has a different colour from before
import React from 'react';

import { sunletGraph } from '../utils/graphTypes';
import { getGraphObject } from '../utils/loadPuzzle';
import { graphIsChromatic } from '../utils/evaluate';
import { GraphColumn } from '../PuzzleComponents/Sequence';
import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';


// TODO: Show graphs one by one

const puzzle1 = [{
    colourPalette: [1, 1],
    graphs: [[1, 0, 2, 1]],
}, {
    colourPalette: [1, 1],
    graphs: [[0, 0, 2, 1]],
}]

const puzzles = [puzzle1];

function getGraphSet({ graphs }) {
    const sequence = graphs.map(graph => getGraphObject(sunletGraph(graph, { scale: 1.2 })));
    return { sequence };
}

const allGraphsAreChromatic = ({ sequence }) => sequence.every(graphIsChromatic);

export const DerrangementPuzzles = (n) => {
    return (
        <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={allGraphsAreChromatic}
            getPuzzleObject={getGraphSet}
            displayPuzzle={GraphColumn} />
    );
}