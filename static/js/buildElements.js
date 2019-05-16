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
