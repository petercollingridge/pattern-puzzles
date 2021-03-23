import TutorialPuzzle from './Tutorial/Tutorial';
import BasicSequences from './Sequences/BasicSequences';
import GraphSequences from './Sequences/GraphSequences';
import TransformationPuzzles from './Transformations/puzzleData';
import GraphTheoryPuzzles from './GraphTheory/loadPuzzles';


const puzzleData = [
    TutorialPuzzle,
    ...TransformationPuzzles,
    ...GraphTheoryPuzzles,
    ...BasicSequences,
    GraphSequences,
];

export default puzzleData;
