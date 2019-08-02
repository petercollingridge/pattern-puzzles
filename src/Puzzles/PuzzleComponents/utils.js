import { handleKeyDown } from '../../utils/common';


// Given a node, return props to make it colourable
export function isColourable(item, chamber, {className="", onColour=null}={}) {
    if (item.colour) {
        className += ` fill-${item.colour}`;
    } else {
        className += " no-fill";
    }

    if (item.fixed) {
        return { className };
    }

    className += " colourable";

    const colour = chamber.state.selectedColour;
    const colourThisItem = () => {
        if (!colour) { return; }
        if (item.colour === colour) {
            item.colour = 0;
        } else {
            item.colour = colour;
        }
        if (onColour) { onColour(item); }
        chamber.update();
    };

    return {
        className,
        tabIndex: 0,
        onClick: colourThisItem,
        onKeyDown: (evt) => handleKeyDown(evt, colourThisItem)
    };
}
