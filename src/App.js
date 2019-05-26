import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PuzzleMap from './PuzzleMap';
import ColourGraph from './Puzzles/ColourGraphs';

import './base.css';
import './puzzle.css';
import './Icons/icons.css';


export default () =>
    <Router>
        <Route path="/" exact component={PuzzleMap} />
        <Route path="/colour-graphs" component={ColourGraph} />
    </Router>
