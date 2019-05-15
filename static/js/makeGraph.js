var NS = 'http://www.w3.org/2000/svg';
var nodeRadius = 5;

var puzzleArea = document.getElementById('puzzle');

function addElement(type, parent, attributes) {
    var el = document.createElementNS(NS, type);
    for (var attr in attributes) {
        el.setAttributeNS(null, attr, attributes[attr]);
    }
    parent.appendChild(el);
    return el;
}

function addCircle(parent, attributes) {
    return addElement('circle', parent, attributes);
}

addCircle(puzzleArea, { r: nodeRadius, 'class': 'empty-region' });

var graph = {
    nodes: [[-1, 0], [1, 0]],
    edges: [[0, 1]]
};