import React from 'react';


const PermuteSequence = () => (
    <g>
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
);

const Permutations = () => (
    <g>
        <g className="graph-edges">
            <path d="M-10 -30h20"/>
            <path d="M-10 -10h20"/>
            <path d="M-10 10h20"/>
            <path d="M-10 30h20"/>
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="-10" cy="-30" r="6" />
            <circle className="colour-1" cx="10" cy="-30" r="6" />

            <circle className="colour-1" cx="-10" cy="-10" r="6" />
            <circle className="colour-2" cx="10" cy="-10" r="6" />

            <circle className="colour-2" cx="-10" cy="10" r="6" />
            <circle className="colour-1" cx="10" cy="10" r="6" />

            <circle className="colour-2" cx="-10" cy="30" r="6" />
            <circle className="colour-2" cx="10" cy="30" r="6" />
        </g>
    </g>
);

const Combinations = () => (
    <g>
        <g className="graph-edges">
            <path d="M-10 -20h20"/>
            <path d="M-10 0h20"/>
            <path d="M-10 20h20"/>
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="-10" cy="-20" r="6" />
            <circle className="colour-1" cx="10" cy="-20" r="6" />

            <circle className="colour-1" cx="-10" cy="0" r="6" />
            <circle className="colour-2" cx="10" cy="0" r="6" />

            <circle className="colour-2" cx="-10" cy="20" r="6" />
            <circle className="colour-2" cx="10" cy="20" r="6" />
        </g>
    </g>
);

const Derrangements = () => (
    <g>
        <g className="graph-edges">
            <line x1="-12" y1="8" x2="0" y2="-12" />
            <line x1="-12" y1="8" x2="12" y2="8" />
            <line x1="0" y1="-12" x2="12" y2="8" />
            <line x1="0" y1="-32" x2="0" y2="-12" />
            <line x1="-12" y1="8" x2="-30" y2="20" />
            <line x1="12" y1="8" x2="30" y2="20" />
    </g>
    <g className="graph-nodes">
        <circle className="colour-1" cx="-12" cy="8" r="6" />
        <circle className="colour-2" cx="0" cy="-12" r="6" />
        <circle className="colour-3" cx="12" cy="8" r="6" />

        <circle className="colour-2" cx="-30" cy="20" r="6" />
        <circle className="colour-3" cx="0" cy="-32" r="6" />
        <circle className="colour-1" cx="30" cy="20" r="6" />
    </g>
</g>
);

const Combinatorics2 = () => (
    <g>
        <g transform="translate(0, -24)">
            <line className="graph-edges" x1="-20" x2="20" />
            <g className="graph-nodes">
                <circle className="colour-1" cx="-20" r="6" />
                <circle className="colour-2" cx="0" r="6" />
                <circle className="colour-2" cx="20" r="6" />
            </g>
        </g>
        <g transform="translate(0, -8)">
            <line className="graph-edges" x1="-20" x2="20" />
            <g className="graph-nodes">
                <circle className="colour-2" cx="-20" r="6" />
                <circle className="colour-1" cx="0" r="6" />
                <circle className="colour-2" cx="20" r="6" />
            </g>
        </g>
        <g transform="translate(0, 8)">
            <line className="graph-edges" x1="-20" x2="20" />
            <g className="graph-nodes">
                <circle className="colour-2" cx="-20" r="6" />
                <circle className="colour-2" cx="0" r="6" />
                <circle className="colour-1" cx="20" r="6" />
            </g>
        </g>
        <g transform="translate(0, 24)">
            <line className="graph-edges" x1="-20" x2="20" />
            <g className="graph-nodes">
                <circle className="colour-1" cx="-20" r="6" />
                <circle className="colour-2" cx="0" r="6" />
                <circle className="colour-1" cx="20" r="6" />
            </g>
        </g>
    </g>
);


export default [
    PermuteSequence,
    Permutations,
    Combinations,
    Derrangements,
    Combinatorics2,
];
