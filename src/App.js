import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PuzzleMap from './PuzzleMap';
import {
    ColourGraph1,
    ColourGraph2,
    ColourGraph3
} from './Puzzles/ColourGraphs';

import {
    ColourMap1,
    ColourMap2
} from './Puzzles/ColourMaps';

import {
    Reflection1,
    Rotation1,
} from './Puzzles/Transformations';

import { RepeatingPatterns1 } from './Puzzles/RepeatingPatterns';

import './base.css';
import './puzzle.css';
import './Icons/icons.css';


export default () =>
    <Router>
        <Switch>
            <Route path="/colour-graphs-1" component={ColourGraph1} />
            <Route path="/colour-graphs-2" component={ColourGraph2} />
            <Route path="/colour-graphs-3" component={ColourGraph3} />
            <Route path="/colour-maps-1" component={ColourMap1} />
            <Route path="/colour-maps-2" component={ColourMap2} />
            <Route path="/repeating-patterns-1" component={RepeatingPatterns1} />
            <Route path="/reflection-1" component={Reflection1} />
            <Route path="/rotation-1" component={Rotation1} />
            <Route path="/" component={PuzzleMap} />
        </Switch>
    </Router>
