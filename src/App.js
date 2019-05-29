import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PuzzleMap from './PuzzleMap';
import {
    ColourGraph1,
    ColourGraph2,
    ColourGraph3
 } from './Puzzles/ColourGraphs';

 import { ColourMap1 } from './Puzzles/ColourMaps';

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
            <Route path="/" component={PuzzleMap} />
        </Switch>
    </Router>
