// Derrangements - permutate the colours on a graph so that each node has a different colour from before
import React from 'react';

import { sunletGraph } from '../utils/graphUtils';
import { getGraphObject } from '../utils/loadPuzzle';
import { GraphColumn } from '../PuzzleComponents/Sequence';
import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';


const puzzle1 = [{
    colourPalette: 2,
    graphs: [[1, 0, 2, 1]],
}]

const puzzles = [puzzle1];

const evaluate = () => false;

export function getGraphSet({ graphs }) {
    const sequence = graphs.map(graph => getGraphObject(sunletGraph(graph, { scale: 1.2 })));
    // console.log(sequence);
    return { sequence };
}

export const DerrangementPuzzles = (n) => {
    return (
        <PuzzlePage
            puzzles={puzzles[n]}
            evaluate={evaluate}
            getPuzzleObject={getGraphSet}
            displayPuzzle={GraphColumn} />
    );
}