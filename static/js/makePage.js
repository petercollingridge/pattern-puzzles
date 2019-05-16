function addColourPalette(parent, nColours) {
    var paletteAttributes = {
        id: 'colour-palette',
        height: '100%',
        viewBox: '0 0 ' + (2 * nColours + 1) + ' 4'
    }

    var svg = addHTMLElement('svg', parent, paletteAttributes);

    for (var i = 0; i < nColours; i++) {
        addCircle(svg, {
            cx: 1 + i * 2,
            cy: 2,
            r: 1,
            class: "toolbar-selection colour-" + (i + 1)
        });
    }

}

var toolbar = document.getElementById('toolbar');

addColourPalette(toolbar, 2);
