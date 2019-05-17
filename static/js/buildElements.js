var NS = 'http://www.w3.org/2000/svg';

function addHTMLElement(type, parent, attributes) {
    var el = document.createElement(type);
    for (var attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }
    parent.appendChild(el);
    return el;
}

function addSVGElement(type, parent, attributes) {
    var el = document.createElementNS(NS, type);
    for (var attr in attributes) {
        el.setAttributeNS(null, attr, attributes[attr]);
    }
    parent.appendChild(el);
    return el;
}

function addCircle(parent, attributes) {
    return addSVGElement('circle', parent, attributes);
}

function addEdge(parent, node1, node2, attributes) {
    attributes = attributes || {};
    attributes.x1 = node1.getAttributeNS(null, 'cx');
    attributes.y1 = node1.getAttributeNS(null, 'cy');
    attributes.x2 = node2.getAttributeNS(null, 'cx');
    attributes.y2 = node2.getAttributeNS(null, 'cy');

    return addSVGElement('line', parent, attributes);
}

function makeElementColourable(el, puzzle) {
    el.setAttribute('class', 'empty-region');
    el.addEventListener('click', function() {
        if (puzzle.selectedColour) {
            this.setAttribute('class', "colour-" + puzzle.selectedColour);
        }
    });
    return el;
}
