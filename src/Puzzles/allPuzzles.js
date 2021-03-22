import TutorialPuzzles from './loadPuzzles';
import SequencePuzzles from './Sequences/puzzleData';
import GraphTheoryPuzzles from './GraphTheory/loadPuzzles';


const puzzleData = [
    ...TutorialPuzzles,
    ...GraphTheoryPuzzles,
    ...SequencePuzzles,
];

console.log(puzzleData);

export default puzzleData;
