export function allItemsColoured(items=[]) {
    return items.every(item => item.colour > 0);
}

export function allConnectedItemsHaveDifferentColours(cxns=[]) {
    const failingCxns = cxns.filter(cxn => cxn.node1.colour === cxn.node2.colour);
    return failingCxns.length === 0;
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

// Test whether there is a consistent mapping between two attributes for all items in an array
export const attributesHaveMapping = (arr, attr1, attr2) => {
    const mapping = new Map();
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const value = mapping.get(item[attr1]);
        if (value === undefined) {
            mapping.set(item[attr1], item[attr2]);
        } else if (value !== item[attr2]) {
            return false;
        }
    }
    return true;
};
