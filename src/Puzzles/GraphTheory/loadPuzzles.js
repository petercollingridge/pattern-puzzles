import { ColourGraph } from './ColourGraphs';
import ColourGraphIcons from '../../PuzzleMap/Icons/ColourGraphs';


const puzzles = [{
    x: 0, y: 0,
    name: 'Colour Graph 1',
    slug: 'colour-graphs-0',
    icon: ColourGraphIcons[0](),
    component: ColourGraph(1),
    available: true,
}, {
    x: 160, y: 0,
    name: 'Colour Graph 2',
    slug: 'colour-graphs-1',
    icon: ColourGraphIcons[1](),
    component: ColourGraph(2),
}, {
    x: 320, y: 0,
    name: 'Colour Graph 3',
    slug: 'colour-graphs-2',
    icon: ColourGraphIcons[2](),
    component: ColourGraph(3),
}, {
    x: 480, y: 0,
    name: 'Colour Graph 3',
    slug: 'colour-graphs-6',
    icon: ColourGraphIcons[2](),
    component: ColourGraph(3),
}, {
    x: -160, y: 0,
    name: 'Colour Graph 2',
    slug: 'colour-graphs-3',
    icon: ColourGraphIcons[1](),
    component: ColourGraph(2),
}, {
    x: -80, y: -120,
    name: 'Colour Graph 3',
    slug: 'colour-graphs-4',
    icon: ColourGraphIcons[1](),
    component: ColourGraph(2),
}, {
    x: -160, y: 0,
    name: 'Colour Graph 4',
    slug: 'colour-graphs-5',
    icon: ColourGraphIcons[1](),
    component: ColourGraph(2),
}];

export default puzzles;
