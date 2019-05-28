import React from 'react';
import { Link } from "react-router-dom";

import {
    ColourGraphIcon1,
    ColourGraphIcon2,
    ColourGraphIcon3
 } from './Icons/ColourGraphs';

import './puzzleMap.css';


export default () =>
    <main className="front-page">
        <nav className="puzzle-map">
            <Link className="map-link" to="/colour-graphs-1"><ColourGraphIcon1/></Link>
            <Link className="map-link" to="/colour-graphs-2"><ColourGraphIcon2/></Link>
            <Link className="map-link" to="/colour-graphs-3"><ColourGraphIcon3/></Link>
        </nav>
    </main>
