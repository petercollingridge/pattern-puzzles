import React from 'react';


const GridGraph = () => <g>
    <g className="graph-edges">
        <path className="colour-none" d="M-24 -12h24m0 24h24"/>
        <path className="colour-1" d="M-24 -12v24h24v-24h24v24" />
    </g>
    <g className="graph-nodes colour-1">
        <circle cx="-24" cy="-12" r="6" />
        <circle cx="0" cy="-12" r="6" />
        <circle cx="24" cy="-12" r="6" />
        <circle cx="-24" cy="12" r="6" />
        <circle cx="0" cy="12" r="6" />
        <circle cx="24" cy="12" r="6" />
    </g>
</g>

const GridGraph2 = () => <g>
    <g className="graph-edges">
        <path className="colour-none" d="M-24 -24h24m-24 24h48m0 24h-24"/>
        <path className="colour-1" d="M-24 -24v48h24v-48h24v48" />
    </g>
    <g className="graph-nodes colour-1">
        <circle cx="-24" cy="-24" r="6" />
        <circle cx="0" cy="-24" r="6" />
        <circle cx="24" cy="-24" r="6" />
        <circle cx="-24" cy="0" r="6" />
        <circle cx="0" cy="0" r="6" />
        <circle cx="24" cy="0" r="6" />
        <circle cx="-24" cy="24" r="6" />
        <circle cx="0" cy="24" r="6" />
        <circle cx="24" cy="24" r="6" />
    </g>
</g>

const GridGraphCategories = () => <g>
    <g className="categories">
        <circle className="colour-1" cx="-24" cy="0" r="23" />
        <circle className="colour-2" cx="24" cy="0" r="23" />
    </g>
    <g className="graph-edges">
        <path className="colour-none" d="M-32 -8h16" />
        <path d="M32 -8h-16v16h16z" />
        <path  className="colour-1" d="M-32 -8v16h16v-16" />
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-32" cy="-8" r="4" />
        <circle className="colour-2" cx="-16" cy="-8" r="4" />
        <circle className="colour-1" cx="-32" cy="8" r="4" />
        <circle className="colour-1" cx="-16" cy="8" r="4" />

        <circle className="colour-1" cx="32" cy="-8" r="4" />
        <circle className="colour-1" cx="16" cy="-8" r="4" />
        <circle className="colour-2" cx="32" cy="8" r="4" />
        <circle className="colour-1" cx="16" cy="8" r="4" />
    </g>
</g>

export default [
    GridGraph,
    GridGraph2,
    GridGraphCategories,
];
