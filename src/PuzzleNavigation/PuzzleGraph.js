/****************************************************************
 * Create a menu of puzzle icons in the form of a graph showing
 * how puzzles relate to each other.
 ****************************************************************/
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import puzzleData from "../Puzzles/allPuzzles";
import getConnections from "./PuzzleGraphLayout";

import './Icons/icons.css';
import './PuzzleGraph.css';


const SIZE = 720;

const connections = getConnections(puzzleData);

function Graph() {
    const [dragging, setDragging] = useState(false);
    const [lastPosition, setLastPosition] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    function getPosition(evt) {
        if (evt.touches) {
            evt = evt.touches[0];
        }
        return { x: evt.pageX, y: evt.pageY };
    }

    function onMouseDown(evt) {
        setDragging(true);
        const position = getPosition(evt);
        setLastPosition(position);
        evt.stopPropagation();
        evt.preventDefault();
    }

    function onMouseMove(evt) {
        if (!dragging) { return; }
        const position = getPosition(evt)
        const x = offset.x + position.x - lastPosition.x;
        const y = offset.y + position.y - lastPosition.y;
        setLastPosition(position);
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
        <main
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onMouseDown}
            onTouchMove={onMouseMove}
            onTouchEnd={onMouseUp}
        >
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

                    <g transform={`translate(${offset.x} ${offset.y})`}>
                        { connections.map((cxn, index) => (
                            <line className="connection" key={index} {...cxn} />
                        )) }

                        { puzzleData.map(({ available, icon, slug, x, y }) => {
                            if (x === undefined) { return null; }

                            const className = `nav-icon ${available ? '' : 'inactive'}`;
                            return (
                                <Link to={slug} key={slug}>
                                    <g className={className} transform={`translate(${x} ${y})`}>
                                        <circle className="spotlight-outline" cx="0" cy="0" r="52" />
                                        <circle className="spotlight" cx="0" cy="0" r="48" />
                                        { icon }
                                    </g>
                                </Link>
                            );
                        }) }
                    </g>
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
