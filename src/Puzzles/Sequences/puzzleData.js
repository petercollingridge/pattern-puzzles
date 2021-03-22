import Icons from './Icons';
import BasicSequences from './BasicSequences';
import GraphSequences from './GraphSequences';


const puzzles = [{
    name: 'Sequences 1',
    slug: 'sequences-1',
    icon: Icons[0](),
    component: () => BasicSequences(0),
}, {
    name: 'Sequences 2',
    slug: 'sequences-2',
    icon: Icons[1](),
    component: () => BasicSequences(1),
}, {
    name: 'Sequences 3',
    slug: 'sequences-3',
    icon: Icons[2](),
    component: () => GraphSequences(0),
}];

export default puzzles;