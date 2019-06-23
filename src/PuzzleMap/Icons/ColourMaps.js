import React from 'react';


const ColourMapIcon1 = () =>
    <g className="graph-nodes">
        <rect className="colour-1" x="-28" y="-28" width="28" height="28" rx="2" ry="2" />
        <rect className="colour-2" x="0" y="-28" width="28" height="28" rx="2" ry="2" />
        <rect className="colour-2" x="-28" y="0" width="28" height="28" rx="2" ry="2" />
        <rect className="colour-1" x="0" y="0" width="28" height="28" rx="2" ry="2" />
        <rect className="colour-3" x="-12" y="-12" width="24" height="24" rx="2" ry="2" />
    </g>

const ColourMapIcon2 = () =>
    <g className="graph-nodes">
        <rect className="colour-1" x="-30" y="-30" width="30" height="20" rx="2" ry="2" />
        <rect className="colour-2" x="0" y="-30" width="30" height="20" rx="2" ry="2" />
        <rect className="colour-2" x="-30" y="-10" width="20" height="20" rx="2" ry="2" />
        <rect className="colour-3" x="-10" y="-10" width="20" height="20" rx="2" ry="2" />
        <rect className="colour-1" x="10" y="-10" width="20" height="20" rx="2" ry="2" />
        <rect className="colour-1" x="-30" y="10" width="30" height="20" rx="2" ry="2" />
        <rect className="colour-2" x="0" y="10" width="30" height="20" rx="2" ry="2" />
    </g>

export default [ColourMapIcon1, ColourMapIcon2];
