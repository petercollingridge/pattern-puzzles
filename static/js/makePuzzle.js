var COLOURS = [
    'rgb(20, 146, 196)',
    'rgb(196, 20, 96)',
    'rgb(147, 20, 198)',
    'rgb(20, 198, 96)',
];

var getToolbar = function(puzzle) {
    // Distance to start of toolbar
    var TOOLBAR_R = 112;
    var toolbarElement = document.getElementById('toolbar');
    var selectedColourElement = false

    var Toolbar = {
        items: {},
        element: toolbarElement
    }

    Toolbar.remove = function(name) {
        if (this.items[name]) {
            toolbarElement.removeChild(this.items[name]);
            this.items[name] = undefined;
        }
    }

    function alignToolbar() {
        // Rotate toolbar based on aspect ratio of screen
        var width = window.innerWidth;
        var height = window.innerHeight;
        var angle = 45;

        if (width > height) {
            angle -= Math.min(0.5, width / height - 1) * 90;
        } else {
            angle += Math.min(0.5, height / width - 1) * 90;
        }
        toolbarElement.setAttribute('transform', 'rotate(' + angle + ')');
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
        this.remove('colourPalette');

        var colourPalleteElement = addSVGElement('g', toolbarElement, { 'class': 'colour-palette' });
        this.items.colourPalette = colourPalleteElement;

        var r = 6;
        var dAngle = Math.PI / 16;
        var angle = Math.PI - dAngle * (nColours - 1) / 2;

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

    Toolbar.addNextPuzzleButton = function() {
        if (!this.items.nextPuzzleButton) {
            var r = 6;

            var attr = {
                'class': 'next-puzzle-button',
                cx: TOOLBAR_R + r,
                cy: 0,
                r: r
            };

            this.items.nextPuzzleButton = addCircle(toolbarElement, attr);
            this.items.nextPuzzleButton.addEventListener('click', function() {
                puzzle.nextPuzzle();
                Toolbar.remove('nextPuzzleButton');
            });
        }
    }

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
        this.puzzleCount = 0;
        this.loadPuzzle();
    }

    Puzzle.clear = function() {
        if (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
    }

    Puzzle.loadPuzzle = function() {
        if (this.puzzleCount < this.data.length) {
            this.clear();
            this.loader(Puzzle.data[this.puzzleCount]);
        } else {
            // Puzzle set complete
        }
    }

    Puzzle.nextPuzzle = function() {
        this.puzzleCount++;
        this.loadPuzzle();
    }

    Puzzle.evaluate = function() {
        // Test whether we have passed the evaluation function
        // If so, add a button to move to the next puzzle
        if (Puzzle.evalutationFunction &&
            Puzzle.evalutationFunction(Puzzle)) {
            Puzzle.toolbar.addNextPuzzleButton();
        }
    };

    return Puzzle;
})();
