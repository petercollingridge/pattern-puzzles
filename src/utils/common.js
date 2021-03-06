export function sum(arr, func) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += func ? func(arr[i]) : arr[i];
    }
    return sum;
}

export function shuffle(arr) {
    for (let i = arr.length; i--; ) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// Get an array of [1, 2, 3, ..., n]
export function getArrayOfN(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr;
}

// Get an array of values from calling function <func> n times
export function nTimes(n, func) {
    return Array.from({ length: n }).map(func);
}

// If arr is not an array return an empty array with that length
// If arr is a number, then return an array with n items with the given value
// Allows colours to be a number or an array of numbers
export function getArray(arr, value) {
    if (Array.isArray(arr)) {
        return arr;
    }
    return nTimes(arr, (_) => value);
}

// Returns an array of <item> repeated <n> times
export function getRepeatArray(item, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(item);
    }
    return arr;
}

export function getPermutations(arr) {
    const result = [];
  
    const permute = (remainingItems, seq) => {
        if (remainingItems.length === 0) {
            result.push(seq)
        } else {
            let previousItem = false;
            for (let i = 0; i < remainingItems.length; i++) {
                const curr = remainingItems.slice();
                const next = curr.splice(i, 1);
                if (next[0] !== previousItem) {
                    permute(curr, seq.concat(next));
                    previousItem = next[0];
                }
            }
        }
   }
  
   // Copy arr and then sort it
   permute(arr.slice().sort(), []);
  
   return result;
}

// Return all possible sequences of colours
// e.g. ([1, 2], 2) => (1, 1), (1, 2), (2, 1), (2, 2)
export function getPermutationsWithReplacement(colours, size) {
    if (size <= 0) { return [[]]; }

    const result = [];
    for (let i = 0; i < colours.length; i++) {
        const firstItem = colours[i];
        const subSequence = getPermutationsWithReplacement(colours, size - 1);
        subSequence.forEach((seq) => {
            result.push([firstItem].concat(seq));
        });
    }

    return result;
}

export function getCombinationsWithReplacement(arr, size) {
    if (size === 0) { return [[]]; }
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const firstItem = arr[i];
        const subSequence = getCombinationsWithReplacement(arr.slice(i), size - 1);
        subSequence.forEach((seq) => {
            result.push([firstItem].concat(seq));
        });
    }

    return result;
}

// Click enter or space triggers a given callback
export const handleKeyDown = (evt, callback) => {
    if (evt.key === 'Enter' || evt.keyCode === 32) {
        callback();
    }
};

export function hashCode(str) {
    let hash = 0, i, chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}