// Test whether all items are bigger than 0 or have an attrubute with value bigger than 0
export const allItemsHaveValue = (items=[], attr) =>
    attr ?
        items.every(item => item[attr] > 0) :
        items.every(item => item > 0);

export const allItemsColoured = (items=[]) => allItemsHaveValue(items, 'colour');

export const extractAttribute = (items=[], attr) => items.map(item => item[attr]);

// Convert a graph into a string of node colours, separates by hypens, e.g. 1-1-2
const graphToStringOfNodes = graph => extractAttribute(graph.nodes, 'colour').join('-');

const graphToStringOfSortedNodes = graph => extractAttribute(graph.nodes, 'colour').sort().join('-');

// Check that two sets of sets contain sam set of sets
// e.g. ((1, 1), (1, 2)) = ((2, 1), (1,1))
export function setOfSetsEqual({ sequence }, targetSet) {
    const sequenceSet = new Set(sequence.map(graphToStringOfSortedNodes));

    // Check the this set of sequences matches the set of permutations
    return (sequenceSet.size === targetSet.size)
        && [...sequenceSet].every(value => targetSet.has(value));
}

// Check the the given set of sequences matches a set of sequences.
export function sequenceSetMatches({ sequence }, targetSet) {
    // Check all the sequences are fully coloured
    if (!sequence.every(graph => allItemsColoured(graph.nodes))) {
        return false;
    }

    // Get a set of sequence values,
    // where a sequence value is a string of numbers separated by hypens, e.g. 1-2
    const sequenceSet = new Set(sequence.map(graphToStringOfNodes));

    // Check the this set of sequences matches the set of permutations
    return (sequenceSet.size === targetSet.size)
        && [...sequenceSet].every(value => targetSet.has(value));
};

export function allGraphsInSequenceAreDifferent(sequence) {
    const graphStrings = sequence.map(graphToStringOfNodes);
    const n = graphStrings.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (graphStrings[i] === graphStrings[j]) {
                return false;
            }
        }
    }
    return true;
}

export function allConnectedItemsHaveDifferentColours(cxns=[]) {
    // Colour any edge that connects two nodes of the same colour
    let matches = 0;
    cxns.forEach((cxn) => {
        if (cxn.node1.colour && cxn.node1.colour === cxn.node2.colour) {
            cxn.colour = cxn.node1.colour;
            cxn.flashing = true;
            matches++;
        } else {
            cxn.colour = null;
            cxn.flashing = false;
        }
    });
    return matches === 0;
}

export const graphIsChromatic = ({ nodes, edges }) => 
    allConnectedItemsHaveDifferentColours(edges) &&
    allItemsColoured(nodes);

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
export const graphNodesAreSameColour = ({ blank, target }) => 
    allItemsColoured(blank.nodes) &&
    sequencesMatch(blank.nodes, target.nodes, 'colour');

// Test whether the nodes of two graphs have the same pattern,
// i.e. there is a consistent mapping from the colours in one graph to the colour in the target
export const graphNodesHaveSamePattern = ({ blank, target }) =>
    allItemsColoured(blank.nodes) &&
    sequencesAreEquivalent(blank.nodes, target.nodes);

export const samePatternButDifferent = (seq1, seq2) =>
    allItemsHaveValue(seq1) &&
    allItemsHaveValue(seq2) &&
    sequenceHasNoMatches(seq1, seq2) &&
    sequencesAreEquivalent(seq1, seq2);


export const graphIsDisjoint = (nodes) => {
    nodes.forEach(node => node.visited = false);
    
    // Begin with the first node
    const frontier = [nodes[0]];
    nodes[0].visited = true;
    let nodeCount = 1;

    while(frontier.length > 0) {
        const node = frontier.pop();
        const edges = node.edges;

        for (const nextNodeId in edges) {
            // If edge not cut and node hasn't been visited
            if (!edges[nextNodeId].colour) {
                const nextNode = nodes[nextNodeId];
                if (!nextNode.visited) {
                    frontier.push(nextNode)
                    nextNode.visited = true;
                    nodeCount++;
                }
            }
        }
    }

    return nodeCount < nodes.length;
}