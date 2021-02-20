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
}];

export default puzzles;
