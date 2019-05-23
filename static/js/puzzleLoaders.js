// Functions for loading puzzle data into Puzzle object

var chromaticGraphLoader = function(data) {
    this.toolbar.createColourPalette(data.colours);
    data.nodeRadius = data.nodeRadius || 8;
    data.scale = data.scale || 32;
    this.graph = addGraph(this, data);
};

var mapColouringLoader = function(data) {
    this.toolbar.createColourPalette(data.colours);
    var nodeGroup = addSVGElement('g', this.element, {'class': 'map-regions'});
    
    var regions = [];
    for (var i = 0; i < data.regions.length; i++) {
        var region = data.regions[i];
        var object = {
            x: region[0],
            y: region[1],
            width: region[2],
            height: region[3],
        }
        object.element = addBlock(nodeGroup, object);
        makeElementColourable(object, this, this.element);
        regions.push(object);
    }

    var connections = [];
    var n = data.connections ? data.connections.length : 0;
    for (var i = 0; i < n; i++) {
        var edge = data.connections[i];
        connections.push({
            node1: regions[edge[0]],
            node2: regions[edge[1]]
        });
    }

    // Create a graph of the map in order to evaluate the solution
    this.graph = {
        nodes: regions,
        edges: connections
    }
};

// Function for loading puzzle data into Puzzle object
var repeatingPatternloader = function(data) {
    this.toolbar.createColourPalette(data.colours);
    this.answer = data.answer.map(function(item) {
        return { colour: item };
    });

    var n = data.pattern.length + data.answer.length;
    var size = Math.min(24, 160 / n);
    var x = -((n - 1) * size) / 2;

    this.answerNodes = [];
    for (var i = 0; i < n; i++) {
        var nodeObject = { x: x, width: size - 1 };

        if (i < data.pattern.length) {
            nodeObject.class = 'colour-' + data.pattern[i];
            addBlock(this.element, nodeObject);
        } else {
            nodeObject.element = addBlock(this.element, nodeObject);
            makeElementColourable(nodeObject, this);
            this.answerNodes.push(nodeObject);
        }

        x += size;
    }
};

var symmetryLoader = function(data) {
    this.toolbar.createColourPalette(data.colours);

    // Add line of symmetry
    addSVGElement('path', this.element, { d: 'M0 -200v400', 'class': 'symmetry-line'})

    var targetGroup = addSVGElement('g', this.element, {'transform': 'translate(-50)'});

    var targetGraph = addGraph(targetGroup, data);
}