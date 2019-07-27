import ColourGraphIcons from './PuzzleMap/Icons/ColourGraphs';
import { ColourGraph } from './Puzzles/ColourGraphs';

import GraphTheoryIcons from './PuzzleMap/Icons/GraphTheory';
import { GraphTheory } from './Puzzles/GraphTheory';

import ColourMapIcons from './PuzzleMap/Icons/ColourMaps';
import { ColourMap } from './Puzzles/ColourMaps';

import TransformationIcons from './PuzzleMap/Icons/Transformations';
import { Transformations } from './Puzzles/Transformations';

import SequencesIcons from './PuzzleMap/Icons/Sequences';
import { Sequences } from './Puzzles/Sequences';

import CategorisationIcons from './PuzzleMap/Icons/Categorisation';
import { Categorisation } from './Puzzles/Categorisation';


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
    'graph-theory-0': {
        slug: 'graph-theory-0',
        icon: GraphTheoryIcons[0](),
        component: () => GraphTheory(0), 
    }
};

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
    getData('categorisation', 4),
    getData('transformations', 4),
    getData('colour-graphs', 3),
    getData('colour-maps', 2),
    getData('graph-theory', 1),
];
