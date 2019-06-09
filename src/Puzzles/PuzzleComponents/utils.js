export function getColourClassName(item) {
    let className;

    if (!item.fixed) {
        className = "colourable ";
        if (item.colour) {
            className += `fill-${item.colour}`;
        } else {
            className += "empty-region";
        }
    } else {
        className = `fill-${item.colour}`;
    }

    return className;
}
