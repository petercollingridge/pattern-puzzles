import { ColourGraph } from './ColourGraphs';
import ColourGraphIcons from '../../PuzzleMap/Icons/ColourGraphs';


const puzzles = [{
    name: 'Colour Graph 1',
    slug: 'colour-graphs-0',
    icon: ColourGraphIcons[0](),
    component: ColourGraph(1),
}, {
    name: 'Colour Graph 2',
    slug: 'colour-graphs-1',
    icon: ColourGraphIcons[1](),
    component: ColourGraph(2),
}, {
    name: 'Colour Graph 3',
    slug: 'colour-graphs-2',
    icon: ColourGraphIcons[2](),
    component: ColourGraph(3),
}, {
    name: 'Colour Graph 4',
    slug: 'colour-graphs-3',
    icon: ColourGraphIcons[1](),
    component: ColourGraph(2),
}, {
    name: 'Colour Graph 5',
    slug: 'colour-graphs-4',
    icon: ColourGraphIcons[1](),
    component: ColourGraph(2),
}, {
    name: 'Colour Graph 6',
    slug: 'colour-graphs-5',
    icon: ColourGraphIcons[1](),
    component: ColourGraph(2),
}];

export default puzzles;
