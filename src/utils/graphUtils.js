export function getNodesOnCircle(colours, r, offset) {
    var n;
    if (Array.isArray(colours)) {
        n = colours.length;
    } else {
        n = colours;
        colours = new Array(n);
    }

    var nodes = [];
    var dAngle = 2 * Math.PI / n;
    var angle = (offset || 0) - 0.5 * dAngle;
    r = r || 1

    for (var i = 0; i < n; i++) {
        nodes.push([
            r * Math.sin(angle),
            r * Math.cos(angle),
            colours[i]
        ]);
        angle += dAngle;
    }

    return nodes;
}

export function getLoopOfEdges(start, stop) {
    if (stop === undefined) {
        stop = start - 1;
        start = 0;
    }

    var edges = [];
    for (var i = start; i < stop; i++) {
        edges.push([i, i + 1]);
    }
    edges.push([start, stop]);
    return edges;
}

export function allItemsColoured(items) {
    return items.every(item => item.colour > 0);
}

export function allConnectedItemsHaveDifferentColours(cxns) {
    return cxns.every(cxn => cxn.node1.colour !== cxn.node2.colour);
}

export const allItemsFilled = (items) => items.every(item => item > 0);

export const sequencesMatch = (seq1, seq2) => {
    if (seq1.length !== seq2.length) { return false; }
    for (var i = 0; i < seq1.length; i++) {
        if (seq1[i] !== seq2[i]) {
            return false;
        }
    }
    return true;
};
