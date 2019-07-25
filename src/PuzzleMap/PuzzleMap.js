import React from 'react';
import { Link } from "react-router-dom";

import { puzzleLayout } from '../puzzleData';
import Icon from './Icons/Icon';
import './puzzleMap.css';


export default () =>
    <main className="front-page">
        <nav className="puzzle-map">
            {
                puzzleLayout.map((section, i) =>
                    <div className="puzzle-section" key={i}>{
                        section.map(
                            ({ slug, icon }) => <Link className="map-link" key={slug} to={slug}>
                                <Icon>{ icon }</Icon>
                            </Link>
                        )
                    }</div>
                )
            }
        </nav>
    </main>
