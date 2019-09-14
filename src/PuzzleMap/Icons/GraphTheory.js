import React from 'react';


const HamiltonianPath = () => <g>
    <g className="graph-edges">
        <line x1="-30" y1="20" x2="0" y2="-32" />

        <g className="colour-1">
            <line x1="-12" y1="8" x2="0" y2="-12" />
            <line x1="-12" y1="8" x2="12" y2="8" />
            <line x1="0" y1="-12" x2="12" y2="8" />
            <line x1="0" y1="-32" x2="30" y2="20" />
            <line x1="-30" y1="20" x2="30" y2="20" />
            <line x1="0" y1="-32" x2="0" y2="-12" />
        </g>
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-12" cy="8" r="6" />
        <circle className="colour-1" cx="0" cy="-12" r="6" />
        <circle className="colour-1" cx="12" cy="8" r="6" />

        <circle className="colour-1" cx="-30" cy="20" r="6" />
        <circle className="colour-1" cx="0" cy="-32" r="6" />
        <circle className="colour-1" cx="30" cy="20" r="6" />
    </g>
</g>

const DominatingSet = () => <g>
    <g className="graph-edges">
        <rect x="-20" y="-20" width="40" height="40" fill="none" />

        <g className="colour-1">
            <line x1="-20" y1="-20" x2="20" y2="20" />
            <line x1="-20" y1="20" x2="20" y2="-20" />
        </g>
    </g>
    <g className="graph-nodes">
        <circle className="colour-2" cx="-20" cy="-20" r="6" />
        <circle className="colour-2" cx="-20" cy="20" r="6" />
        <circle className="colour-2" cx="20" cy="20" r="6" />
        <circle className="colour-2" cx="20" cy="-20" r="6" />
        <circle className="colour-1" cx="0" cy="0" r="6" />
    </g>
</g>

const MinimumCut = () => <g>
    <g className="graph-edges">
        <line x1="-32" y1="16" x2="-32" y2="-16" />
        <line x1="-32" y1="16" x2="-12" y2="0" />
        <line x1="-32" y1="-16" x2="-12" y2="0" />
        <line x1="32" y1="16" x2="32" y2="-16" />
        <line x1="32" y1="16" x2="12" y2="0" />
        <line x1="32" y1="-16" x2="12" y2="0" />

        <g className="colour-none">
            <line x1="-12" y1="0" x2="12" y2="0" />
        </g>
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-32" cy="-16" r="6" />
        <circle className="colour-1" cx="-32" cy="16" r="6" />
        <circle className="colour-1" cx="-12" cy="0" r="6" />
        <circle className="colour-2" cx="32" cy="-16" r="6" />
        <circle className="colour-2" cx="32" cy="16" r="6" />
        <circle className="colour-2" cx="12" cy="0" r="6" />
    </g>
</g>

export default [HamiltonianPath, DominatingSet, MinimumCut];
