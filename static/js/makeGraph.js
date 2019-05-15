var puzzleArea = document.getElementById('puzzle');
var NS = 'http://www.w3.org/2000/svg';

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

addCircle(puzzleArea, { r: 5, 'class': 'empty-region' });
