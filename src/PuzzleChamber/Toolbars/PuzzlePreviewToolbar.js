import React from 'react';

import ButtonSet from './ButtonSet';
import { SVGButton } from './Button';


function PuzzlePreviewToolbar({ puzzle, startAngle }) {
    const puzzles = puzzle.props.puzzles;
    const buttons = puzzles.map((_, index) => {
        let className = 'puzzle-preview';
        if (index === puzzle.state.index) {
            className += ' selected';
        } else if (index < puzzle.state.index) {
            className += ' puzzle-done';
        }
        return {
            component: SVGButton,
            color: "white",
            className,
            puzzle,
        };
    });

    return <ButtonSet buttons={buttons} startAngle={startAngle} />;
};

export default PuzzlePreviewToolbar;
