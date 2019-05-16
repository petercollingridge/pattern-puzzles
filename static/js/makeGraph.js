
var nodeRadius = 5;

var puzzleArea = document.getElementById('puzzle');

addCircle(puzzleArea, { r: nodeRadius, 'class': 'empty-region' });

var graph = {
    nodes: [[-1, 0], [1, 0]],
    edges: [[0, 1]]
};