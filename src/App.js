import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PuzzleMap from './PuzzleMap/PuzzleMap';
import { ColourGraph1, ColourGraph2, ColourGraph3 } from './Puzzles/ColourGraphs';
import { ColourMap1, ColourMap2 } from './Puzzles/ColourMaps';
import { Identity1, Reflection1, Rotation1 } from './Puzzles/Transformations';
import { RepeatingPatterns1 } from './Puzzles/RepeatingPatterns';
import { Categorisation1, Categorisation2 } from './Puzzles/Categorisation';

import './base.css';
import './Icons/icons.css';


const BASE_URL = '/pattern-puzzles';

export default () =>
    <Router>
        <Switch>
            <Route path={`${BASE_URL}/colour-graphs-1`} component={ColourGraph1} />
            <Route path={`${BASE_URL}/colour-graphs-2`} component={ColourGraph2} />
            <Route path={`${BASE_URL}/colour-graphs-3`} component={ColourGraph3} />
            <Route path={`${BASE_URL}/colour-maps-1`} component={ColourMap1} />
            <Route path={`${BASE_URL}/colour-maps-2`} component={ColourMap2} />
            <Route path={`${BASE_URL}/repeating-patterns-1`} component={RepeatingPatterns1} />
            <Route path={`${BASE_URL}/identity-1`} component={Identity1} />
            <Route path={`${BASE_URL}/reflection-1`} component={Reflection1} />
            <Route path={`${BASE_URL}/rotation-1`} component={Rotation1} />
            <Route path={`${BASE_URL}/categorisation-1`} component={Categorisation1} />
            <Route path={`${BASE_URL}/categorisation-2`} component={Categorisation2} />
            <Route path={`${BASE_URL}/`} component={PuzzleMap} />
        </Switch>
    </Router>
