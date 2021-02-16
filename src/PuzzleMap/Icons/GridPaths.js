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

export default [GridGraph, GridGraph2];
