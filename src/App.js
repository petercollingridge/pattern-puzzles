import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PuzzleMap from './PuzzleMap';
import ColourGraph1 from './Puzzles/ColourGraphs1';
import ColourGraph2 from './Puzzles/ColourGraphs2';

import './base.css';
import './puzzle.css';
import './Icons/icons.css';


export default () =>
    <Router>
        <Route path="/colour-graphs-1" component={ColourGraph1} />
        <Route path="/colour-graphs-2" component={ColourGraph2} />
        <Route path="/" exact component={PuzzleMap} />
    </Router>
