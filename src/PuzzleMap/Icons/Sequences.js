import React from 'react';


const SequencesIcon1 = () => 
    <g className="graph-nodes">
        <rect className="colour-1" x="-37.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
        <rect className="colour-2" x="-22.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
        <rect className="colour-1" x="-7.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
        <rect className="colour-2" x="7.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
        <rect className="colour-1" x="22.5" y="-7.5" width="15" height="15" rx="2" ry="2" />
    </g>

const SequencesIcon2 = () => 
    <g className="graph-nodes">
        {[1, 2, 1, 0, 1, 2, 1].map((colour, index) =>
            <rect
                key={index}
                className={"colour-" + colour}
                x={-42 + index * 12}
                y="-7.5"
                width="12" height="12" rx="2" ry="2" />
        )}
    </g>

export default [
    SequencesIcon1,
    SequencesIcon2,
    SequencesIcon2,
];
