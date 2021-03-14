/****************************************************************
 * Create a menu of puzzle icons in the form of a graph showing
 * how puzzles relate to each other.
 ****************************************************************/
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import puzzleData from "../Puzzles/allPuzzles";
import getLayout from "./PuzzleLayout";

import './Icons/icons.css';
import './PuzzleGraph.css';


const SIZE = 720;

getLayout(puzzleData);
console.log(puzzleData);

function Graph() {
    const [dragging, setDragging] = useState(false);
    const [lastPosition, setLastPosition] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    function onMouseDown(evt) {
        setDragging(true);
        setLastPosition({ x: evt.pageX, y: evt.pageY });
        evt.stopPropagation();
        evt.preventDefault();
    }

    function onMouseMove(evt) {
        if (!dragging) { return; }
        const x = offset.x + evt.pageX - lastPosition.x;
        const y = offset.y + evt.pageY - lastPosition.y;
        setLastPosition({ x: evt.pageX, y: evt.pageY });
        setOffset({ x, y });
        evt.stopPropagation();
        evt.preventDefault();
    };

    function onMouseUp(evt) {
        setDragging(false);
        evt.stopPropagation();
        evt.preventDefault();
    }

    return (
        <main onMouseUp={onMouseUp} onMouseMove={onMouseMove} onMouseDown={onMouseDown}>
            <nav className="puzzle-graph">
                <svg viewBox={`-${SIZE / 2} -${SIZE / 2} ${SIZE} ${SIZE}`} width="100%" height="100%">
                    <defs>
                        <filter id="glow-spotlight" x="-200%" y="-200%" width="400%" height="400%">
                            <feGaussianBlur stdDeviation="2" result="colouredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    { puzzleData.map(({ available, icon, slug, x, y }) => {
                        const className = `map-link ${available ? '' : 'inactive'}`;
                        const transform = `translate(${x + offset.x} ${y + offset.y})`;
                        
                        return (
                            <Link to={slug} key={slug}>
                                <g className={className} transform={transform}>
                                    <circle className="spotlight" cx="0" cy="0" r="49" />
                                    <circle className="spotlight-outline" cx="0" cy="0" r="49" />
                                    { icon }
                                </g>
                            </Link>
                        );
                    }) }
                </svg>
            </nav>

            <svg id="shadow-ring" viewBox="-128 -128 256 256" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="shadow">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                    </filter>
                </defs>

                <circle r="200" stroke="black" fill="none" strokeWidth="240" filter="url(#shadow)"/>
                <circle r="300" stroke="black" fill="none" strokeWidth="240" />
            </svg>
        </main>
    );
}

export default Graph;
