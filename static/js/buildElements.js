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

function addBlock(parent, attributes) {
    attributes.width = attributes.width || 8;
    attributes.height = attributes.height || attributes.width;
    attributes.x = (attributes.x || 0) - attributes.width / 2;
    attributes.y = (attributes.y || 0) - attributes.height / 2;
    attributes.rx = attributes.rx === undefined ? 3 : attributes.rx;
    attributes.ry = attributes.ry === undefined ? 3  : attributes.ry;
    return addSVGElement('rect', parent, attributes);
}

function addEdge(parent, node1, node2, attributes) {
    attributes = attributes || {};
    attributes.x1 = node1.cx;
    attributes.y1 = node1.cy;
    attributes.x2 = node2.cx;
    attributes.y2 = node2.cy;

    return addSVGElement('line', parent, attributes);
}

function makeElementColourable(element, object, puzzle) {
    // Element starts off empty
    element.setAttribute('class', 'empty-region');

    // Clicking on the element changes its class
    // and updates its object
    element.addEventListener('click', function() {
        if (puzzle.selectedColour) {
            this.setAttribute('class', "colour-" + puzzle.selectedColour);
            object.colour = puzzle.selectedColour;
            puzzle.evaluate();
        }
    });

    return element;
}
