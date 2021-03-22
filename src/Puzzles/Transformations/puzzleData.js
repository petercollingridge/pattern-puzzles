import Icons from './Icons';
import Puzzles from './Transformations';


const puzzles = [{
    name: 'Identity',
    slug: 'identity',
    icon: Icons[0](),
    component: () => Puzzles(0),
}, {
    name: 'Reflection',
    slug: 'reflection',
    icon: Icons[1](),
    component: () => Puzzles(1),
}, {
    name: 'Rotation',
    slug: 'rotation',
    icon: Icons[2](),
    component: () => Puzzles(2),
}, {
    name: 'Inversion',
    slug: 'inversion',
    icon: Icons[3](),
    component: () => Puzzles(3),
}];

export default puzzles;
