import { handleKeyDown } from '../../utils/common';


// Given a node, return props to make it colourable
export function isColourable(item, i, colourItem, className="") {
    if (item.colour) {
        className += ` fill-${item.colour}`;
    } else {
        className += " no-fill";
    }

    if (item.fixed || !colourItem) {
        return { className };
    }

    className += " colourable";

    const colourThisItem = () => colourItem(i);

    return {
        className,
        tabIndex: 0,
        onClick: colourThisItem,
        onKeyDown: (evt) => handleKeyDown(evt, colourThisItem)
    };
}
