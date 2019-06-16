import React from 'react';

export const Categorisation1 = () => <svg viewBox="-50 -50 100 100">
    <circle className="spotlight" cx="0" cy="0" r="49" />
    <g className="categories">
        <circle className="colour-1" cx="-24" cy="0" r="23" />
        <circle className="colour-2" cx="24" cy="0" r="23" />
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-24" cy="0" r="8" />
        <circle className="colour-2" cx="24" cy="0" r="8" />
    </g>
</svg>

export const Categorisation2 = () => <svg viewBox="-50 -50 100 100">
    <circle className="spotlight" cx="0" cy="0" r="49" />
    <g className="categories">
        <circle className="colour-1" cx="-24" cy="0" r="23" />
        <circle className="colour-2" cx="24" cy="0" r="23" />
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-24" cy="0" r="8" />
        <circle className="colour-2" cx="24" cy="0" r="8" />
    </g>
</svg>

export const Categorisation3 = () => <svg viewBox="-50 -50 100 100">
    <circle className="spotlight" cx="0" cy="0" r="49" />
    <g className="categories">
        <circle className="colour-1" cx="-20" cy="-20" r="19" />
        <circle className="colour-2" cx="20" cy="-20" r="19" />
        <circle className="colour-2" cx="-20" cy="20" r="19" />
        <circle className="colour-3" cx="20" cy="20" r="19" />
    </g>
    <g className="graph-edges">
        <line x1="-25" y1="-20" x2="-15" y2="-20" />
        <line x1="25" y1="-20" x2="15" y2="-20" />
        <line x1="-25" y1="20" x2="-15" y2="20" />
        <line x1="25" y1="20" x2="15" y2="20" />
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-28" cy="-20" r="4" />
        <circle className="colour-1" cx="-12" cy="-20" r="4" />
        <circle className="colour-1" cx="28" cy="-20" r="4" />
        <circle className="colour-2" cx="12" cy="-20" r="4" />
        <circle className="colour-1" cx="-28" cy="20" r="4" />
        <circle className="colour-2" cx="-12" cy="20" r="4" />
        <circle className="colour-2" cx="28" cy="20" r="4" />
        <circle className="colour-2" cx="12" cy="20" r="4" />
    </g>
</svg>
