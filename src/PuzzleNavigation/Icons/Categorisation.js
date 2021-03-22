import React from 'react';


const Categorisation1 = () => <g>
    <g className="categories">
        <circle className="colour-1" cx="-24" cy="0" r="23" />
        <circle className="colour-2" cx="24" cy="0" r="23" />
    </g>
    <g className="graph-edges">
        <line x1="30" y1="0" x2="18" y2="0" />
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-24" cy="0" r="4" />
        <circle className="colour-1" cx="32" cy="0" r="4" />
        <circle className="colour-1" cx="16" cy="0" r="4" />
    </g>
</g>

const Categorisation2 = () => <g>
    <g className="categories">
        <circle className="colour-1" cx="-24" cy="0" r="23" />
        <circle className="colour-2" cx="24" cy="0" r="23" />
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-24" cy="0" r="8" />
        <circle className="colour-2" cx="24" cy="0" r="8" />
    </g>
</g>

const Categorisation3 = () => <g>
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
</g>

const Categorisation4 = () => <g>
    <g transform="translate(0 -26)">
        <g className="categories">
            <circle className="colour-2" r="22" />
        </g>
        <g className="graph-edges">
            <line x1="0" y1="-12" x2="-11" y2="6" />
            <line x1="0" y1="-12" x2="11" y2="6" />
            <line x1="-11" y1="6" x2="11" y2="6" />
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="0" cy="-12" r="4" />
            <circle className="colour-1" cx="-11" cy="6" r="4" />
            <circle className="colour-1" cx="11" cy="6" r="4" />
        </g>
    </g>

    <g transform="translate(-23 13)">
        <g className="categories">
            <circle className="colour-1" r="22" />
        </g>
        <g className="graph-edges">
            <line x1="-15" x2="15" />
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="-15" r="4" />
            <circle className="colour-1" cx="0" r="4" />
            <circle className="colour-1" cx="15" r="4" />
        </g>
    </g>

    <g transform="translate(23 13)">
        <g className="categories">
            <circle className="colour-1" r="22" />
        </g>
        <g className="graph-edges">
            <line x1="0" y1="-12" x2="-11" y2="6" />
            <line x1="0" y1="-12" x2="11" y2="6" />
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="0" cy="-12" r="4" />
            <circle className="colour-1" cx="-11" cy="6" r="4" />
            <circle className="colour-1" cx="11" cy="6" r="4" />
        </g>
    </g>
</g>

const Categorisation5 = () => <g>
    <g transform="translate(0 -26)">
        <g className="categories">
            <circle className="colour-2" r="22" />
        </g>
        <g className="graph-edges">
            <line x1="0" y1="-12" x2="-11" y2="6" />
            <line x1="0" y1="-12" x2="11" y2="6" />
            <line x1="-11" y1="6" x2="11" y2="6" />
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="0" cy="-12" r="4" />
            <circle className="colour-1" cx="-11" cy="6" r="4" />
            <circle className="colour-1" cx="11" cy="6" r="4" />
        </g>
    </g>

    <g transform="translate(-23 13)">
        <g className="categories">
            <circle className="colour-1" r="22" />
        </g>
        <g className="graph-edges">
            <line x1="-15" x2="15" />
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="-15" r="4" />
            <circle className="colour-1" cx="0" r="4" />
            <circle className="colour-1" cx="15" r="4" />
        </g>
    </g>

    <g transform="translate(23 13)">
        <g className="categories">
            <circle className="colour-2" r="22" />
        </g>
        <g className="graph-edges">
            <line x1="-10" y1="-10" x2="-10" y2="10" />
            <line x1="-10" y1="-10" x2="10" y2="-10" />
            <line x1="10" y1="10" x2="-10" y2="10" />
            <line x1="10" y1="10" x2="10" y2="-10" />
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="-10" cy="-10" r="4" />
            <circle className="colour-1" cx="-10" cy="10" r="4" />
            <circle className="colour-1" cx="10" cy="-10" r="4" />
            <circle className="colour-1" cx="10" cy="10" r="4" />
        </g>
    </g>
</g>

export default [
    Categorisation1, 
    Categorisation2,
    Categorisation3,
    Categorisation4,
    Categorisation5,
];
