// Derrangements - permutate the colours on a graph so that each node has a different colour from before
import React from 'react';

import { getRepeatArray, nTimes } from '../../utils/common';
import { sunletGraph } from '../utils/graphTypes';
import { getGraphObject } from '../utils/loadPuzzle';
import { graphIsChromatic, allGraphsInSequenceAreDifferent } from '../utils/evaluate';
import { GraphRow } from '../PuzzleComponents/Sequence';
import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';


// TODO: Show graphs one by one

const puzzle1 = [{
    colourPalette: [1, 1],
    pattern: [1, 2],
    nGraphs: 1,
}, {
    colourPalette: [1, 1, 1],
    pattern: [1, 2, 3],
    nGraphs: 1,
}, {
    colourPalette: [2, 2, 2],
    pattern: [1, 2, 3],
    nGraphs: 2,
}, {
    colourPalette: [2, 2],
    pattern: [1, 2, 1, 2],
    nGraphs: 1,
}, {
    colourPalette: [4, 2, 2],
    pattern: [1, 2, 1, 3],
    nGraphs: 2,
}]

const puzzles = [puzzle1];

function getGraphSet({ nGraphs, pattern }) {
    const allNodes = getRepeatArray(0, pattern.length).concat(pattern);
    const sequence = nTimes(nGraphs, () => {
        return getGraphObject(sunletGraph(allNodes, { scale: 1.4 }))
    });
    sequence.gap = 0.2;
    return { sequence };
}

const allGraphsAreChromatic = ({ sequence }) =>
    allGraphsInSequenceAreDifferent(sequence) &&
    sequence.every(graphIsChromatic);

export const DerrangementPuzzles = (n) => {
    return (
        <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={allGraphsAreChromatic}
            getPuzzleObject={getGraphSet}
            displayPuzzle={GraphRow} />
    );
}