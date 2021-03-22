import React from 'react';
import './icons.css';

export default (props) =>
    <svg viewBox="-55 -55 110 110">
        <defs>
            <filter id="glow-spotlight" x="-200%" y="-200%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="2" result="colouredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <circle className="spotlight" cx="0" cy="0" r="49" />
        <circle className="spotlight-outline" cx="0" cy="0" r="49" />
        { props.children }
    </svg>
