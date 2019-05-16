function addColourPalette(parent, nColours) {
    var r = 16;

    var paletteAttributes = {
        id: 'colour-palette',
        height: '50px',
        width: (nColours * r * 4) + 'px'
    };

    var svg = addSVGElement('svg', parent, paletteAttributes);

    for (var i = 0; i < nColours; i++) {
        addCircle(svg, {
            cx: (2 + i * 4) * r,
            cy: 25,
            r: r,
            'class': "toolbar-selection colour-" + (i + 1)
        });
    }

}

var toolbar = document.getElementById('toolbar');

addColourPalette(toolbar, 2);
