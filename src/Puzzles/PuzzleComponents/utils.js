import { handleKeyDown } from '../../utils/common';


// Given a node, return props to make it colourable
export function isColourable(item, i, colourItem, className="") {
    if (item.fixed || !colourItem) {
        return {
            className: `fill-${item.colour} ${ className }`
        };
    }
    
    const colourThisItem = () => colourItem(i);

    className += " colourable ";
    if (item.colour) {
        className += `fill-${item.colour}`;
    } else {
        className += "no-fill";
    }

    return {
        className,
        tabIndex: 0,
        onClick: colourThisItem,
        onKeyDown: (evt) => handleKeyDown(evt, colourThisItem)
    };
}
