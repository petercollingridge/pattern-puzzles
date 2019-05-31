import React from 'react';

export const ColourGraphIcon1 = () => <svg viewBox="-50 -50 100 100">
    <circle className="spotlight" cx="0" cy="0" r="49" />
    <g className="graph-edges">
        <rect x="-20" y="-20" width="40" height="40" fill="none" />
        <line x1="-20" y1="-20" x2="20" y2="20" />
        <line x1="-20" y1="20" x2="20" y2="-20" />
    </g>
    <g className="graph-nodes">
        <circle color="rgb(20, 146, 196)" cx="-20" cy="-20" r="8" />
        <circle color="rgb(196, 20, 96)" cx="-20" cy="20" r="8" />
        <circle color="rgb(20, 146, 196)" cx="20" cy="20" r="8" />
        <circle color="rgb(196, 20, 96)" cx="20" cy="-20" r="8" />
        <circle color="rgb(147, 20, 198)" cx="0" cy="0" r="8" />
    </g>
</svg>

export const ColourGraphIcon2 = () => <svg viewBox="-50 -50 100 100">
    <circle className="spotlight" cx="0" cy="0" r="49" />
    <g className="graph-edges">
        <rect x="-32" y="-16" width="64" height="32" />
        <line x1="0" y1="-16" x2="0" y2="16" />
        <line x1="-32" y1="-16" x2="0" y2="16" />
        <line x1="32" y1="-16" x2="0" y2="16" />
    </g>
    <g className="graph-nodes">
        <circle color="rgb(20, 146, 196)" cx="-32" cy="-16" r="8" />
        <circle color="rgb(196, 20, 96)" cx="0" cy="-16" r="8" />
        <circle color="rgb(20, 146, 196)" cx="32" cy="-16" r="8" />
        <circle color="rgb(196, 20, 96)" cx="32" cy="16" r="8" />
        <circle color="rgb(147, 20, 198)" cx="0" cy="16" r="8" />
        <circle color="rgb(196, 20, 96)" cx="-32" cy="16" r="8" />
    </g>
</svg>

export const ColourGraphIcon3 = () => <svg viewBox="-50 -50 100 100">
    <circle className="spotlight" cx="0" cy="0" r="49" />
    <g className="graph-edges">
        <path d="M32 0L16 27.7h-32L-32 0 -16 -27.71h32z" />
        <line x1="16" y1="-27.71" x2="16" y2="27.71" />
        <line x1="-16" y1="-27.71" x2="-16" y2="27.71" />
        <line className="edge-outline" x1="-32" y1="0" x2="32" y2="0" />
        <line x1="-32" y1="0" x2="32" y2="0" />
    </g>
    <g className="graph-nodes">
        <circle color="rgb(20, 146, 196)" cx="32" cy="0" r="8" />
        <circle color="rgb(147, 20, 198)" cx="16" cy="27.71" r="8" />
        <circle color="rgb(196, 20, 96)" cx="-16" cy="27.71" r="8" />
        <circle color="rgb(147, 20, 198)" cx="-32" cy="0" r="8" />
        <circle color="rgb(20, 146, 196)" cx="-16" cy="-27.71" r="8" />
        <circle color="rgb(196, 20, 96)" cx="16" cy="-27.71" r="8" />
    </g>
</svg>
