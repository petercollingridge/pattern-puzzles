// Create an array of object, where every item is a puzzle
// Puzzle objects have a component, an icon, a position on the map and a URL slug

import ColourGraphIcons from './PuzzleMap/Icons/ColourGraphs';
import { ColourGraph } from './Puzzles//GraphTheory/ColourGraphs';

import GraphTheoryIcons from './PuzzleMap/Icons/GraphTheory';
import EulerPath from './Puzzles/GraphTheory/EulerPath';
import MinimumCut from './Puzzles/GraphTheory/MinimumCut';
import DominatingSet from './Puzzles/GraphTheory/DominatingSet';
import HamiltonianPath from './Puzzles/GraphTheory/HamiltonianPath';

import GridPath from './Puzzles/GridPaths/GridPaths';
import GridPathIcons from './PuzzleMap/Icons/GridPaths';

import ColourMapIcons from './PuzzleMap/Icons/ColourMaps';
import { ColourMap } from './Puzzles/ColourMaps';

import TransformationIcons from './PuzzleMap/Icons/Transformations';
import { Transformations } from './Puzzles/Transformations';

import SequencesIcons from './PuzzleMap/Icons/Sequences';
import { Sequences } from './Puzzles/Sequences';

import CategorisationIcons from './PuzzleMap/Icons/Categorisation';
import { Categorisation } from './Puzzles/Categorisation';

import PermutationIcons from './PuzzleMap/Icons/Combinatorics';
import { PermutationPuzzles } from './Puzzles/Combinatorics/Permutations';
import { CombinationPuzzles } from './Puzzles/Combinatorics/Combinations';
import { DerrangementPuzzles } from './Puzzles/Combinatorics/Derrangements';


// Mapping puzzle names to URLS, icons and components
export const puzzleData = {
    'categorisation-0': {
        slug: 'categorisation-0',
        icon: CategorisationIcons[0](),
        component: () => Categorisation(0),
    },
    'categorisation-1': {
        slug: 'categorisation-1',
        icon: CategorisationIcons[1](),
        component: () => Categorisation(1),
    },
    'categorisation-2': {
        slug: 'categorisation-2',
        icon: CategorisationIcons[2](),
        component: () => Categorisation(2),
    },
    'categorisation-3': {
        slug: 'categorisation-3',
        icon: CategorisationIcons[3](),
        component: () => Categorisation(3),
    },
    'categorisation-4': {
        slug: 'categorisation-4',
        icon: CategorisationIcons[4](),
        component: () => Categorisation(4),
    },
    'graph-theory-0': {
        slug: 'hamiltonian-path',
        icon: GraphTheoryIcons.HamiltonianPath(),
        component: HamiltonianPath, 
    },
    'graph-theory-1': {
        slug: 'minimun-dominating-set',
        icon: GraphTheoryIcons.DominatingSet(),
        component: DominatingSet, 
    },
    'graph-theory-2': {
        slug: 'minimum-cut',
        icon: GraphTheoryIcons.MinimumCut(),
        component: MinimumCut, 
    },
    'graph-theory-3': {
        slug: 'euler-path',
        icon: GraphTheoryIcons.EulerPath(),
        component: () => EulerPath(0), 
    },
    'permutations-0': {
        slug: 'permutations-0',
        icon: PermutationIcons[0](),
        component: () => PermutationPuzzles(0),
    },
    'permutations-1': {
        slug: 'permutations-1',
        icon: PermutationIcons[0](),
        component: () => PermutationPuzzles(1),
    },
    'combinations-0': {
        slug: 'combinations-0',
        icon: PermutationIcons[1](),
        component: () => CombinationPuzzles(0), 
    },
    'derrangements-0': {
        slug: 'derrangements-0',
        icon: PermutationIcons[0](),
        component: () => DerrangementPuzzles(0),
    },
};

addData('graph-path', 'graph-path', GridPathIcons, GridPath, 2);
addData('colour-graphs', 'colour-graphs', ColourGraphIcons, ColourGraph, 3);
addData('colour-maps', 'colour-maps', ColourMapIcons, ColourMap, 2);
addData('transformations', 'transformations', TransformationIcons, Transformations, 4);
addData('sequences', 'sequences', SequencesIcons, Sequences, 3);

function addData(name, slug, icons, components, n) {
    for (let i = 0; i < n; i++) {
        puzzleData[`${ name }-${ i }`] = {
            slug: `${ slug }-${ i }`,
            icon: icons[i](),
            component: () => components(i)
        }
    }
}

function getData(name, n) {
    return Array
        .from({ length: n })
        .map((_, index) => puzzleData[`${ name }-${ index }`]);
}

// Puzzle data grouped into categories
export const puzzleLayout = [
    getData('sequences', 3),
    getData('permutations', 2)
        .concat(getData('combinations', 1))
        .concat(getData('derrangements', 1)),
    getData('categorisation', 5),
    getData('transformations', 4),
    getData('colour-graphs', 3),
    getData('colour-maps', 2),
    getData('graph-theory', 4),
    getData('graph-path', 2),
];
