// Code to determine the layout of the navigation graph

const CONNECTION_LENGTH = 160;

// Array of connections between puzzles in the form
// [<puzzle1>, <puzzle2>, <optional angle change>]
// Creates an edge between puzzle1 and puzzle 2 in the direction of
// puzzle1's angle + an optional change in angle
const PUZZLE_CONNECTIONS = [
    ['tutorial', 'sequences-1', 30],
    ['sequences-1', 'sequences-2'],
    ['sequences-2', 'sequences-3'],
];

// Function for adding connections between puzzles
// and determining the position of icons given the angles between them
function getConnections(puzzleData) {
    function getPuzzle(name) {
        const puzzle = puzzleData.find(puzzle => puzzle.slug === name);
        if (!puzzle) {
            console.error(`No puzzle foud with name: ${name}`);
        }
        return puzzle;
    }

    const connections = [];

    PUZZLE_CONNECTIONS.forEach(([name1, name2, angle]) => {
        const puzzle1 = getPuzzle(name1);
        const puzzle2 = getPuzzle(name2);

        if (!puzzle1.x && !puzzle1.y) {
            puzzle1.x = 0;
            puzzle1.y = 0;
            puzzle1.angle = 0;
        }

        puzzle2.angle = (puzzle1.angle || 0) + (angle || 0);
        const radians = puzzle2.angle * Math.PI / 180;
        puzzle2.x = puzzle1.x + CONNECTION_LENGTH * Math.cos(radians);
        puzzle2.y = puzzle1.y + CONNECTION_LENGTH * Math.sin(radians);

        connections.push({
            x1: puzzle1.x,
            y1: puzzle1.y,
            x2: puzzle2.x,
            y2: puzzle2.y,
        });
    });

    return connections;
}

export default getConnections;
