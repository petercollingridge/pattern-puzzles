import React from 'react';
import { Link } from "react-router-dom";

import ColourGraphIcon from './Icons/ColourGraphs';
import ColourGraphIcon2 from './Icons/ColourGraphs2';
import './puzzleMap.css';


export default () =>
    <main className="front-page">
        <nav className="puzzle-map">
            <Link className="map-link" to="/colour-graphs-1"><ColourGraphIcon/></Link>
            <Link className="map-link" to="/colour-graphs-2"><ColourGraphIcon2/></Link>
        </nav>
    </main>
