var COLOURS = [
    'rgb(20, 146, 196)',
    'rgb(196, 20, 96)',
];

var Puzzle = (function() {
    var puzzleElement = document.getElementById('puzzle')
    var toolbar = document.getElementById('toolbar');

    var Puzzle = {
        selectedColour: false,
        element: puzzleElement
    };

    function getColourPickerFunction(i) {
        return function() {
            Puzzle.selectedColour = i + 1;
        };
    }
    
    Puzzle.createColourPalette = function(nColours) {
        var r = 16;
    
        var paletteAttributes = {
            id: 'colour-palette',
            height: '50px',
            width: (nColours * r * 4) + 'px'
        };
    
        var svg = addSVGElement('svg', toolbar, paletteAttributes);
    
        for (var i = 0; i < nColours; i++) {
            var attr = {
                cx: (2 + i * 4) * r,
                cy: 25,
                r: r,
                'class': "toolbar-selection colour-" + (i + 1)
            };
    
            var colourPicker = addCircle(svg, attr);
            var clickFunc = getColourPickerFunction(i);
            colourPicker.addEventListener('click', getColourPickerFunction(i));
        }
    
    };

    return Puzzle;
})();



Puzzle.createColourPalette(2);
