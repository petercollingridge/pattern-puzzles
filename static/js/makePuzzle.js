var COLOURS = [
    'rgb(20, 146, 196)',
    'rgb(196, 20, 96)',
    'rgb(147, 20, 198)',
    'rgb(20, 198, 96)',
];

var getToolbar = function(puzzle) {
    // Distance to start of toolbar
    var TOOLBAR_R = 112;
    var element = document.getElementById('toolbar');
    var selectedColourElement = false

    var Toolbar = {
        items: {},
        element: element
    }

    function alignToolbar() {
        // Rotate toolbar based on aspect ratio of screen
        var width = window.innerWidth;
        var height = window.innerHeight;
        var angle = 225;

        if (width > height) {
            angle -= Math.min(0.5, width / height - 1) * 90;
        } else {
            angle += Math.min(0.5, height / width - 1) * 90;
        }
        element.setAttribute('transform', 'rotate(' + angle + ')');
    }

    // Get initial angle for rotation and add handler to update on resize
    alignToolbar();
    window.addEventListener('resize', alignToolbar);

    function selectColour(i) {
        return function(evt) {
            // Deselect the currently selected element
            if (selectedColourElement) {
                selectedColourElement.classList.remove('selected');
            }

            // Select the new element
            selectedColourElement = evt.target;
            selectedColourElement.classList.add('selected');

            // Tell the puzzle what colour is selected
            puzzle.selectedColour = i + 1;
            puzzle.element.classList.add('colour-selected');
            puzzle.element.setAttribute('color', COLOURS[i]);
        };
    }

    Toolbar.createColourPalette = function(nColours) {
        // Remove existing element if there is one
        if (this.items.colourPalette) {
            element.removeChild(this.items.colourPalette);
        }

        var colourPalleteElement = addSVGElement('g', element, { 'class': 'colour-palette' });
        this.items.colourPalette = colourPalleteElement;

        var r = 6;
        var dAngle = Math.PI / 16;
        var angle = dAngle * (nColours - 1) / 2;

        for (var i = 0; i < nColours; i++) {
            var cx = (TOOLBAR_R + r) * Math.cos(angle);
            var cy = (TOOLBAR_R + r) * Math.sin(angle);
            var attr = {
                cx: cx,
                cy: cy,
                r: r,
                'class': "colour-palette colour-" + (i + 1)
            };
    
            var colourPicker = addCircle(colourPalleteElement, attr);
            colourPicker.addEventListener('click', selectColour(i));

            angle += dAngle;
        }
    };

    return Toolbar;
};

var Puzzle = (function() {    
    var Puzzle = {
        nColours: 0,
        element: document.getElementById('puzzle'),
        selectedColour: false,
    };

    Puzzle.toolbar = getToolbar(Puzzle);

    Puzzle.init = function(data, loader, evalutationFunction) {
        this.data = data;
        this.loader = loader;
        this.evalutationFunction = evalutationFunction;
        this.loadPuzzle(0);
    }

    Puzzle.loadPuzzle = function(i) {
        if (i < this.data.length) {
            this.loader(Puzzle.data[i]);
        } else {
            // Puzzle set complete
        }
    }

    function completed() {
        alert("Passed");
    };

    Puzzle.evaluate = function() {
        if (Puzzle.evalutationFunction &&
            Puzzle.evalutationFunction(Puzzle)) {
            completed();
        }
    };

    return Puzzle;
})();
