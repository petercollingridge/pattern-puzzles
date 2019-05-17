
var nodeRadius = 5;

var puzzleArea = document.getElementById('puzzle');

addColourable('circle', puzzleArea, { r: nodeRadius });

var graph = {
    nodes: [[-1, 0], [1, 0]],
    edges: [[0, 1]]
};