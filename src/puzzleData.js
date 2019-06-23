import ColourGraphIcons from './PuzzleMap/Icons/ColourGraphs';
import { ColourGraph } from './Puzzles/ColourGraphs';

import ColourMapIcons from './PuzzleMap/Icons/ColourMaps';
import { ColourMap } from './Puzzles/ColourMaps';

import TransformationIcons from './PuzzleMap/Icons/Transformations';
import { Transformations } from './Puzzles/Transformations';

import SequencesIcons from './PuzzleMap/Icons/Sequences';
import { Sequences } from './Puzzles/Sequences';

import CategorisationIcons from './PuzzleMap/Icons/Categorisation';
import { Categorisation } from './Puzzles/Categorisation';


// Mapping puzzle names to URLS, icons and components
export const puzzleData = {};

addData('colour-graphs', 'colour-graphs', ColourGraphIcons, ColourGraph, 3);
addData('colour-maps', 'colour-maps', ColourMapIcons, ColourMap, 2);
addData('categorisation', 'categorisation', CategorisationIcons, Categorisation, 3);
addData('transformations', 'transformations', TransformationIcons, Transformations, 4);
addData('sequences', 'sequences', SequencesIcons, Sequences, 1);

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
    getData('colour-graphs', 3),
    getData('colour-maps', 2),
    getData('categorisation', 3),
    getData('transformations', 4),
    getData('sequences', 1),
];
