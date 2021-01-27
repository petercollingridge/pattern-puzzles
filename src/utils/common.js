export function shuffle(arr) {
    for (let i = arr.length; i--; ) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
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
