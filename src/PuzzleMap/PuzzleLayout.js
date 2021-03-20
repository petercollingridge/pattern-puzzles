const CONNECTION_LENGTH = 160;

// Array of connections between puzzles in the form
// [puzzle1, puzzle, optional angle]
const PUZZLE_CONNECTIONS = [
    ['tutorial', 'colour-graphs-0'],
    ['colour-graphs-0', 'colour-graphs-1', 60],
    ['colour-graphs-1', 'colour-graphs-2'],
    ['colour-graphs-2', 'colour-graphs-3', 30],
    ['colour-graphs-2', 'colour-graphs-4', -30],
    ['colour-graphs-3', 'colour-graphs-5'],
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
