import { Tutorial } from './Tutorial';
import { TutorialIcon } from '../PuzzleMap/Icons/Tutorial';


const puzzles = [{
    name: 'Tutorial',
    slug: 'tutorial',
    icon: TutorialIcon(),
    component: Tutorial,
    available: true,
}];

export default puzzles;
