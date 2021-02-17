import React from 'react';

import ButtonSet from './ButtonSet';
import { SVGButton, ColourButton } from './Button';


export default function ({ puzzle, colours, clearPuzzle }) {
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

    return <ButtonSet buttons={buttons} puzzle={puzzle} />;
}
