import TutorialPuzzles from './loadPuzzles';
import SequencePuzzles from './Sequences/puzzleData';
import TransformationPuzzles from './Transformations/puzzleData';
import GraphTheoryPuzzles from './GraphTheory/loadPuzzles';


const puzzleData = [
    ...TutorialPuzzles,
    ...TransformationPuzzles,
    ...GraphTheoryPuzzles,
    ...SequencePuzzles,
];

export default puzzleData;
