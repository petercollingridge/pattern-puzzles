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
    const colourUses = chamber.state.colourPalette.slice();

    const colourThisItem = () => {
        if (!colour) { return; }

        if (item.colour === colour) {
            // Remove exisiting colour
            item.colour = 0;
            colourUses[colour - 1]++;
        } else if (colourUses[colour - 1] !== 0) {
            // Colour item
            item.colour = colour;
            colourUses[colour - 1]--;
            
        }

        if (onColour) { onColour(item); }
        chamber.setState({ colourPalette: colourUses })
        chamber.update();
    };

    return {
        className,
        tabIndex: 0,
        onClick: colourThisItem,
        onKeyDown: (evt) => handleKeyDown(evt, colourThisItem)
    };
}
