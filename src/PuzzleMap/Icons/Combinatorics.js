import React from 'react';


const Combinatorics1 = () => <g>
    <g className="graph-edges">
        <line x1="-20" y1="-20" x2="20" y2="-20" />
        <line x1="-20" y1="0" x2="20" y2="0" />
        <line x1="-20" y1="20" x2="20" y2="20" />
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-20" cy="-20" r="6" />
        <circle className="colour-2" cx="0" cy="-20" r="6" />
        <circle className="colour-2" cx="20" cy="-20" r="6" />

        <circle className="colour-2" cx="-20" cy="0" r="6" />
        <circle className="colour-1" cx="0" cy="0" r="6" />
        <circle className="colour-2" cx="20" cy="0" r="6" />

        <circle className="colour-2" cx="-20" cy="20" r="6" />
        <circle className="colour-2" cx="0" cy="20" r="6" />
        <circle className="colour-1" cx="20" cy="20" r="6" />
    </g>
</g>

export default [Combinatorics1]