export function shuffle(arr) {
    for (let i = arr.length; i--; ) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// Click enter or space triggers a given callback
export const handleKeyDown = (evt, callback) => {
    if (evt.key === 'Enter' || evt.keyCode === 32) {
        callback();
    }
};
