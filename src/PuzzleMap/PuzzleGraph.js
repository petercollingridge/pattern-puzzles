import React, { useState } from 'react';

import Icon from './Icons/Icon';
import { Link } from "react-router-dom";
import PuzzleData from "../Puzzles/allPuzzles";

import './PuzzleGraph.css';


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
                { PuzzleData.map(({ available, icon, slug, x, y }) => {
                    const className = `map-link puzzle-node ${available ? '' : 'inactive'}`;
                    const style = { left: x + offset.x, top: y + offset.y };
                    
                    return (
                        <div key={slug} className={className} style={style}>
                            <Link to={slug}>
                                <Icon>{ icon }</Icon>
                            </Link>
                        </div>
                    );
                }) }
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
