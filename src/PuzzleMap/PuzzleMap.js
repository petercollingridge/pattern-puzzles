import React from 'react';
import { Link } from "react-router-dom";

import puzzles from './puzzleData';
import './puzzleMap.css';


export default () =>
    <main className="front-page">
        <nav className="puzzle-map">
            {
                puzzles.map((section, i) =>
                    <div className="puzzle-section" key={i}>{
                        section.map(
                            ({ slug, icon }) => <Link className="map-link" key={slug} to={'/' + slug}>
                                { icon }
                            </Link>
                        )
                    }</div>
                )
            }
        </nav>
    </main>
