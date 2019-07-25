import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { puzzleData } from './puzzleData';
import PuzzleMap from './PuzzleMap/PuzzleMap';

import './base.css';


export default () =>
    <Router basename="/pattern-puzzles">
        <Switch>
            {
                Object.values(puzzleData).map(({ slug, component }) =>
                    <Route key={slug} path={`/${ slug }`} component={component} />
                )
            }
            <Route path="/" component={PuzzleMap} />
        </Switch>
    </Router>
