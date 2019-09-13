import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { puzzleData } from './AppData';
import PuzzleMap from './PuzzleMap/PuzzleMap';

import './base.css';


export default () =>
    <Router>
        <Switch>
            {
                Object.values(puzzleData).map(({ slug, component }) =>
                    <Route key={slug} path={`/${ slug }`} component={component} />
                )
            }
            <Route path="/" component={PuzzleMap} />
        </Switch>
    </Router>
