
function makeElementColourable(el, puzzle) {
    el.addEventListener('click', function() {
        if (puzzle.selectedColour) {
            this.setAttribute('class', "colour-" + puzzle.selectedColour);
        }
    });
}

function addColourable(puzzle, type, attributes) {
    attributes = attributes || {};
    attributes.r = puzzle.nodeRadius;
    attributes.class = 'empty-region';

    var el = addSVGElement(type, puzzle.element, attributes);
    makeElementColourable(el, puzzle);

    return el;
}

function addGraph(puzzle, graph) {
    graph.nodes.forEach(function(node) {
        addColourable(puzzle, 'circle', {
            cx: node[0],
            cy: node[1]
        });
    });
}

var graph = {
    nodes: [[-16, 0], [16, 0]],
    edges: [[0, 1]]
};

Puzzle.nodeRadius = 8;
addGraph(Puzzle, graph);