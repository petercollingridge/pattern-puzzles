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
        const value1 = attr ? seq1[i][attr] : seq1[i];
        const value2 = attr ? seq2[i][attr] : seq2[i];
        if (value1 !== value2) {
            return false;
        }
    }
    return true;
};

export const sequenceHasNoMatches = (seq1, seq2) => {
    const n = Math.min(seq1.length, seq2.length);

    for (let i = 0; i < n; i++) {
        if (seq1[i] === seq2[i]) {
            return false;
        }
    }
    return true;
}

// Test whether there is a consistent mapping between the values in one array to the value the other
export const sequencesAreEquivalent = (seq1, seq2) => {
    if (seq1.length !== seq2.length) { 
        return false;
    }

    const mapping1 = new Map();
    const mapping2 = new Map();

    for (let i = 0; i < seq1.length; i++) {
        const value1 = mapping1.get(seq1[i]);
        const value2 = mapping2.get(seq2[i]);

        if (value1 === undefined) {
            mapping1.set(seq1[i], seq2[i]);
        } else if (value1 !== seq2[i]) {
            return false;
        }

        if (value2 === undefined) {
            mapping2.set(seq2[i], seq1[i]);
        } else if (value2 !== seq1[i]) {
            return false;
        }
        
    }

    return true;
};

// Test whether the nodes of two graphs are the same colour
export const graphNodesAreSameColour = ({ blank, target }) => {
	return allItemsColoured(blank.nodes) &&
		sequencesMatch(blank.nodes, target.nodes, 'colour');
};

// Test whether the nodes of two graphs have the same pattern,
// i.e. there is a consistent mapping from the colours in one graph to the colour in the target
export const graphNodesHaveSamePattern = ({ blank, target }) => {
	return allItemsColoured(blank.nodes) &&
        sequencesAreEquivalent(blank.nodes, target.nodes);
};

export const samePatternButDifferent = (seq1, seq2) => {
    return seq1.every(item => item > 0) &&
        sequenceHasNoMatches(seq1, seq2) &&
        sequencesAreEquivalent(seq1, seq2);
};

