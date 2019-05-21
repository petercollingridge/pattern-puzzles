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
    var r = Math.min(12, 200 / (3 * n));
    var x = -((n - 1) * r  * 3) / 2;

    this.answerNodes = [];
    for (var i = 0; i < n; i++) {
        var nodeObject = {
            cx: x,
            cy: 0,
            r: r
        };

        if (i < data.pattern.length) {
            nodeObject.class = 'colour-' + data.pattern[i];
            addCircle(this.element, nodeObject);
        } else {
            var nodeElement = addCircle(this.element, nodeObject);
            makeElementColourable(nodeElement, nodeObject, this);
            this.answerNodes.push(nodeObject);
        }

        x += r * 3;
    }
};