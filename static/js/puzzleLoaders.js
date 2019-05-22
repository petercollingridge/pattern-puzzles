// Functions for loading puzzle data into Puzzle object

var chromaticGraphLoader = function(data) {
    this.toolbar.createColourPalette(data.colours);
    data.nodeRadius = data.nodeRadius || 8;
    data.scale = data.scale || 32;
    this.graph = addGraph(this, data);
};

// Function for loading puzzle data into Puzzle object
var repeatingPatternloader = function(data) {
    this.toolbar.createColourPalette(data.colours);
    this.answer = data.answer.map(function(item) {
        return { colour: item };
    });

    var n = data.pattern.length + data.answer.length;
    var size = Math.min(24, 200);
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