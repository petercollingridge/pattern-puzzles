import React from 'react';
import { Link } from "react-router-dom";

import ColourGraphIcon from './Icons/ColourGraphs';
import './puzzleMap.css';


export default () =>
    <main className="front-page">
        <nav className="puzzle-map">
            <div className="map-link">
                <Link to="/colour-graphs"><ColourGraphIcon/></Link>
            </div>
        </nav>
    </main>
