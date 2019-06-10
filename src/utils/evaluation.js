export function allItemsColoured(items=[]) {
    return items.every(item => item.colour > 0);
}

export function allConnectedItemsHaveDifferentColours(cxns=[]) {
    return cxns.every(cxn => cxn.node1.colour !== cxn.node2.colour);
}

export const graphIsChromatic = ({ nodes, edges }) => 
    allItemsColoured(nodes) &&
    allConnectedItemsHaveDifferentColours(edges);

export const sequencesMatch = (seq1, seq2, attr) => {
    if (seq1.length !== seq2.length) { return false; }
    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i][attr] !== seq2[i][attr]) {
            return false;
        }
    }
    return true;
};


