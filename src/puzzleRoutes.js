import { ColourGraph } from './Puzzles/ColourGraphs';
import { ColourMap1, ColourMap2 } from './Puzzles/ColourMaps';
import { Identity1, TransformColour1, Reflection1, Rotation1 } from './Puzzles/Transformations';
import { Sequences1 } from './Puzzles/Sequences';
import { Categorisation } from './Puzzles/Categorisation';


const puzzles = [
    { slug: 'colour-graphs-1', component: () => ColourGraph(0) },
    { slug: 'colour-graphs-2', component: () => ColourGraph(1) },
    { slug: 'colour-graphs-3', component: () => ColourGraph(2) },
    { slug: 'colour-maps-1', component: ColourMap1 },
    { slug: 'colour-maps-2', component: ColourMap2 },
    { slug: 'identity-1', component: Identity1 },
    { slug: 'reflection-1', component: Reflection1 },
    { slug: 'rotation-1', component: Rotation1 },
    { slug: 'transform-colour-1', component: TransformColour1 },
    { slug: 'sequences-1', component: Sequences1 },
    { slug: 'categorisation-1', component: () => Categorisation(0) },
    { slug: 'categorisation-2', component: () => Categorisation(1) },
    { slug: 'categorisation-3', component: () => Categorisation(2) },
];

export default puzzles;
