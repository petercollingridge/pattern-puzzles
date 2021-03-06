import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import puzzleData from './Puzzles/allPuzzles';
import PuzzleMenu from './PuzzleNavigation/PuzzleMenu';
import PuzzleGraph from './PuzzleNavigation/PuzzleGraph';

import './base.css';


export default () =>
    <Router>
        <Switch>
            { Object.values(puzzleData).map(({ slug, component }) =>
                <Route key={slug} path={`/${ slug }`} component={component} />
            )}
            <Route path="/menu" component={PuzzleMenu} />
            <Route path="/" component={PuzzleGraph} />
        </Switch>
    </Router>
