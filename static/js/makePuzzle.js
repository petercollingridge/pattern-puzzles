var COLOURS = [
    'rgb(20, 146, 196)',
    'rgb(196, 20, 96)',
    'rgb(147, 20, 198)',
    'rgb(20, 198, 96)',
];

var Puzzle = (function() {
    var selectedColourElement = false;
    
    var puzzleElement = document.getElementById('puzzle');
    var toolbar = document.getElementById('toolbar');

    var Puzzle = {
        nColours: 0,
        selectedColour: false,
        element: puzzleElement
    };

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

    function selectColour(i) {
        return function(evt) {
            if (selectedColourElement) {
                selectedColourElement.classList.remove('selected');
            }
            selectedColourElement = evt.target;
            selectedColourElement.classList.add('selected');
            puzzleElement.classList.add('colour-selected');
            Puzzle.selectedColour = i + 1;
            puzzleElement.setAttribute('color', COLOURS[i]);
        };
    }
    
    createColourPalette = function() {
        // Empty existing toolbar
        while (toolbar.firstChild) {
            toolbar.removeChild(toolbar.firstChild);
        }

        var aspectRatio = window.innerWidth / window.innerHeight;

        var toolbarAngle;
        if (aspectRatio < 1) {
            toolbarAngle = Math.PI * 1.5;
        } else {
            toolbarAngle = Math.PI;
        }

        var r = 6;
        var toolbarR = 118;
        var dAngle = Math.PI / 16;
        var nColours = Puzzle.nColours;
        toolbarAngle -= dAngle * (nColours - 1) / 2;

        for (var i = 0; i < nColours; i++) {
            var cx = toolbarR * Math.cos(toolbarAngle);
            var cy = toolbarR * Math.sin(toolbarAngle);
            var attr = {
                cx: cx,
                cy: cy,
                r: r,
                'class': "toolbar-selection colour-" + (i + 1)
            };
    
            var colourPicker = addCircle(toolbar, attr);
            colourPicker.addEventListener('click', selectColour(i));

            toolbarAngle += dAngle;
        }
    };

    Puzzle.setColourPalette = function(n) {
        Puzzle.nColours = n;
        createColourPalette();
    };

    window.addEventListener('resize', createColourPalette);

    return Puzzle;
})();
