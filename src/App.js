import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PuzzleMap from './PuzzleMap';
import ColourGraph1 from './Puzzles/ColourGraphs1';
import ColourGraph2 from './Puzzles/ColourGraphs2';
import ColourGraph3 from './Puzzles/ColourGraphs3';

import './base.css';
import './puzzle.css';
import './Icons/icons.css';


export default () =>
    <Router>
        <Switch>
            <Route path="/colour-graphs-1" component={ColourGraph1} />
            <Route path="/colour-graphs-2" component={ColourGraph2} />
            <Route path="/colour-graphs-3" component={ColourGraph3} />
            <Route path="/" component={PuzzleMap} />
        </Switch>
    </Router>
