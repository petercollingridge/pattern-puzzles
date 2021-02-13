/*
 * Colour regions on a map such that no two touching regions have the same colour.
 */

import React from 'react';

import PuzzlePage from '../../PuzzleChamber/PuzzleChamber';
import { GraphRow, GraphColumn } from '../PuzzleComponents/Sequence';
import { getGraphSet } from '../utils/loadPuzzle';
import { sequenceSetMatches } from '../utils/evaluate';
import {
    getArrayOfN,
    getPermutations,
    getPermutationsWithReplacement
} from '../../utils/common';


// Given a set of rows of linear graphs
// Colour them so you have all permutations of colours with a fixed number of colours.
// e.g. (1, 2, 2) => (1, 2, 2), (2, 1, 2), (2, 2, 1)
const puzzles1 = {
    solution: puzzle => getPermutations(puzzle.graphs[0]),
    puzzles: [{
        colourPalette: 2,
        graphs: [[1, 2], [2, 0]],
    }, {
        colourPalette: 2,
        graphs: [[1, 2, 2], [2, 1, 2], [2, 2, 0]],
    }, {
        colourPalette: 2,
        graphs: [[2, 2, 1], [1, 2, 2], [0, 0, 0]],
    }, {
        colourPalette: 2,
        graphs: [[2, 1, 2], [0, 0, 0], [0, 0, 0]],
    }, {
        colourPalette: 2,
        graphs: [[1, 2, 2, 2], [2, 1, 2, 2], [0, 0, 0, 0], [0, 0, 0, 0]],
    }, {
        colourPalette: 2,
        graphs: [[1, 1, 2, 2], [1, 2, 1, 2], [1, 2, 2, 1], [2, 1, 1, 2], [2, 1, 2, 1], [2, 0, 0, 0]],
    }, {
        colourPalette: 2,
        graphs: [[1, 1, 2, 2], [1, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [2, 0, 0, 0], [2, 0, 0, 0]],
    }, {
        colourPalette: 2,
        graphs: [[1, 1, 2, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    }]
};

// Given a set of rows of linear graphs
// Colour them so you have all permutations of colours (with replacement).
// e.g. (1, 2) => (1, 1), (1, 2), (2, 1), (2, 2)
const puzzles2 = {
    solution: puzzle =>
        getPermutationsWithReplacement(getArrayOfN(puzzle.colourPalette), puzzle.graphs[0].length),
    puzzles: [{
        colourPalette: 2,
        graphs: [[1, 1], [1, 2], [2, 1], [2, 0]],
    }]
};

// Permutations of colours on looped graphs, so rotations count as the same thing.
// e.g. [1,2,1]
const puzzles3 = [
    {
        colourPalette: 2,
        loop: true,
        graphs: [[1, 1, 1], [1, 1, 2], [1, 2, 2], [0, 0, 0]],
    }, {
        colourPalette: 2,
        loop: true,
        graphs: [[1, 1, 2, 2], [2, 1, 2, 0]],
    }
];

const puzzles = [puzzles1, puzzles2, puzzles3];

// Return the set of all permutation of colours based on the first pattern in the pattern array
const getSolutionSet = (getSolutions) => 
    (puzzle) => {
        const solutions = getSolutions(puzzle);
        console.log(solutions);
        return new Set(solutions.map(sequence => sequence.join('-')))
    };

// Display linear graphs one under another, and loop graphs in a row
function displayGraphSequence({ sequence, loop }, chamber) {
    if (loop) {
        return GraphRow({ sequence }, chamber);
    } else {
        return GraphColumn({ sequence }, chamber);
    }
}

// TODO: Evaluation for permutations with replacement on loops

export const PermutationPuzzles = (n) => {
    const puzzle = puzzles[n];
    const solutionSet = getSolutionSet(puzzle.solution);
    return (
        <PuzzlePage
            puzzles={puzzle.puzzles}
            evaluate={sequenceSetMatches}
            getPuzzleObject={getGraphSet}
            getSolutionObject={solutionSet}
            displayPuzzle={displayGraphSequence} />
    );
}
