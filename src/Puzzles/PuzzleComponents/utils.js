export function getItemColourType(item, colourItem) {
    let className;
    let onClick;

    if (!item.fixed) {
        onClick = colourItem;
        className = "colourable ";
        if (item.colour) {
            className += `fill-${item.colour}`;
        } else {
            className += "empty-region";
        }
    } else {
        className = `fill-${item.colour}`;
    }

    return { className, onClick };
}
