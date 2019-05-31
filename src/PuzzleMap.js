import React from 'react';
import { Link } from "react-router-dom";

import {
    ColourGraphIcon1,
    ColourGraphIcon2,
    ColourGraphIcon3
 } from './Icons/ColourGraphs';

import { ColourMapIcon1 } from './Icons/ColourMaps';
import { RepeatingPatternsIcon1 } from './Icons/RepeatingPatterns';

import './puzzleMap.css';


const puzzles = [
    [
        ['colour-graphs-1', <ColourGraphIcon1/>],
        ['colour-graphs-2', <ColourGraphIcon2/>],
        ['colour-graphs-3', <ColourGraphIcon3/>]
    ],
    [['colour-maps-1', <ColourMapIcon1/>]],
    [['repeating-patterns-1', <RepeatingPatternsIcon1/>]],
];


export default () =>
    <main className="front-page">
        <nav className="puzzle-map">
            {
                puzzles.map((section, i) =>
                    <div className="puzzle-section" key={i}>{
                        section.map(
                            ([url, icon]) => <Link className="map-link" key={url} to={'/' + url}>
                                { icon }
                            </Link>
                        )
                    }</div>
                )
            }
        </nav>
    </main>
