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
        var attr = {
            x: region[0],
            y: region[1],
            width: region[2],
            height: region[3],
        }
        var nodeElement = addBlock(nodeGroup, attr);
        makeElementColourable(nodeElement, attr, this);
        regions.push(attr);
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
            var nodeElement = addBlock(this.element, nodeObject);
            makeElementColourable(nodeElement, nodeObject, this);
            this.answerNodes.push(nodeObject);
        }

        x += size;
    }
};