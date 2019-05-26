import React from 'react';

export default () => <svg viewBox="-50 -50 100 100">
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