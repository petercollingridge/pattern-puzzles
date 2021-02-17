import React from 'react';

import ButtonSet from './ButtonSet';
import { SVGButton, ColourButton } from './Button';


function ColourToolbar({ puzzle, colours, clearPuzzle, startAngle }) {
    const buttons = colours.map((colourCount, index) => ({
        component: ColourButton,
        colour: index + 1,
        count: colourCount,
        puzzle,
    }));

    if (clearPuzzle) {
        buttons.push({
            component: SVGButton,
            key: "clear-button",
            color: "white",
            className: "colour-palette",
            onClick: clearPuzzle
        });
    }

    return <ButtonSet buttons={buttons} startAngle={startAngle} />;
}

export default ColourToolbar;
