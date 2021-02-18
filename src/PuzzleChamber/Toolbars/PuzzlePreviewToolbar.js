import React from 'react';

import ButtonSet from './ButtonSet';
import { SVGButton } from './Button';


function PuzzlePreviewToolbar({ puzzle, startAngle }) {
    const puzzles = puzzle.props.puzzles;
    const buttons = puzzles.map((_, index) => {
        let className = 'puzzle-preview';
        let onClick;
        if (index === puzzle.state.index) {
            className += ' selected';
        } else if (index <= puzzle.state.maxIndex) {
            className += ' puzzle-done';
            onClick = () => puzzle.getPuzzle(index);
        }
        return {
            component: SVGButton,
            color: "white",
            className,
            puzzle,
            onClick,
        };
    });

    return <ButtonSet buttons={buttons} startAngle={startAngle} />;
};

export default PuzzlePreviewToolbar;
