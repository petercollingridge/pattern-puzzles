import TutorialPuzzles from './loadPuzzles';
import GraphTheoryPuzzles from './GraphTheory/loadPuzzles';


const puzzleData = [
    ...TutorialPuzzles,
    ...GraphTheoryPuzzles
];

console.log(puzzleData);

export default puzzleData;
