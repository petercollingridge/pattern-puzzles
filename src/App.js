import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ColourGraphIcon from './Icons/ColourGraphs';

import ColourGraph from './Puzzles/ColourGraphs';

import './base.css';
import './puzzle.css';
import './Icons/icons.css';


function PuzzleMap() {
  return <main className="front-page">
      <nav className="puzzle-map">
      <ul>
        <li>
          <Link to="/colour-graphs" className="map-link"><ColourGraphIcon/></Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
    </nav>
  </main>;
}

export default () =>
    <Router>
        <Route path="/" exact component={PuzzleMap} />
        <Route path="/colour-graphs" component={ColourGraph} />
    </Router>
