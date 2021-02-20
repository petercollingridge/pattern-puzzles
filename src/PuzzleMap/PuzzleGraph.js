import React from 'react';

import Icon from './Icons/Icon';
import { Link } from "react-router-dom";
import PuzzleData from "../Puzzles/allPuzzles";

import './puzzleMap.css';


function Graph() {
    return (
        <main className="puzzle-graph">
            { PuzzleData.map(({ icon, slug }) => {
                return (
                    <div className="map-link puzzle-node" key={slug}>
                        <Link to={slug}>
                            <Icon>{ icon }</Icon>
                        </Link>
                    </div>
                );
            }) }
        </main>
    );
}

export default Graph;
