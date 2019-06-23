import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { puzzleData } from './puzzleData';
import PuzzleMap from './PuzzleMap/PuzzleMap';

import './base.css';


const BASE_URL = '/pattern-puzzles';

export default () =>
    <Router>
        <Switch>
            {
                Object.values(puzzleData).map(({ slug, component }) =>
                    <Route key={slug} path={`${ BASE_URL }/${ slug }`} component={component} />
                )
            }
            <Route path={`${BASE_URL}/`} component={PuzzleMap} />
        </Switch>
    </Router>
