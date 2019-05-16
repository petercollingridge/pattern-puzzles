function getColourPickerFunction(i) {
    return function() {
        var puzzle = document.getElementById('puzzle');
        puzzle.classList.add("colour-" + (i + 1));
    };
}

function addColourPalette(parent, nColours) {
    var r = 16;

    var paletteAttributes = {
        id: 'colour-palette',
        height: '50px',
        width: (nColours * r * 4) + 'px'
    };

    var svg = addSVGElement('svg', parent, paletteAttributes);

    for (var i = 0; i < nColours; i++) {
        var attr = {
            cx: (2 + i * 4) * r,
            cy: 25,
            r: r,
            'class': "toolbar-selection colour-" + (i + 1)
        };

        var colourPicker = addCircle(svg, attr);
        var clickFunc = getColourPickerFunction(i);
        colourPicker.addEventListener('click', clickFunc);
    }

}

var toolbar = document.getElementById('toolbar');

addColourPalette(toolbar, 2);
