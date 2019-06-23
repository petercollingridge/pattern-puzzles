import React from 'react';


const IdentityIcon1 = () => <React.Fragment>
    <defs>
        <g id="identity-1-puzzle">
            <g className="graph-edges">
                <line x1="-15" y1="13" x2="0" y2="-13" />
                <line x1="-15" y1="13" x2="15" y2="13" />
                <line x1="0" y1="-13" x2="15" y2="13" />
            </g>
            <g className="graph-nodes">
                <circle className="colour-1" cx="-15" cy="13" r="5" />
                <circle className="colour-2" cx="0" cy="-13" r="5" />
                <circle className="colour-3" cx="15" cy="13" r="5" />
            </g>
        </g>
    </defs>

    <use href="#identity-1-puzzle" transform="translate(-24, -4)"/>
    <use href="#identity-1-puzzle" transform="translate(24, -4)"/>
    <line className="reflection-line" y1="-50" y2="50" />
</React.Fragment>

const ReflectionIcon1 = () => <React.Fragment>
    <defs>
        <g id="reflection-1-puzzle">
            <g className="graph-edges">
                <line x1="12" y1="0" x2="-11" y2="-15" />
                <line x1="12" y1="0" x2="-11" y2="15" />
                <line x1="-11" y1="-15" x2="-11" y2="15" />
            </g>
            <g className="graph-nodes">
                <circle className="colour-2" cx="12" cy="0" r="5" />
                <circle className="colour-1" cx="-11" cy="15" r="5" />
                <circle className="colour-1" cx="-11" cy="-15" r="5" />
            </g>
        </g>
    </defs>

    <use href="#reflection-1-puzzle" transform="translate(-20)"/>
    <use href="#reflection-1-puzzle" transform="translate(20) scale(-1, 1)"/>
    <line className="reflection-line" y1="-50" y2="50" />
</React.Fragment>

const RotationIcon1 = () => <React.Fragment>
    <defs>
        <g id="rotation-1-puzzle">
            <g className="graph-edges">
                <line x1="-16" y1="13" x2="-2" y2="-13" />
                <line x1="-16" y1="13" x2="12" y2="13" />
                <line x1="-2" y1="-13" x2="12" y2="13" />
            </g>
            <g className="graph-nodes">
                <circle className="colour-1" cx="-16" cy="13" r="5" />
                <circle className="colour-2" cx="-2" cy="-13" r="5" />
                <circle className="colour-1" cx="12" cy="13" r="5" />
            </g>
        </g>
    </defs>

    <use href="#rotation-1-puzzle" transform="translate(-20)"/>
    <use href="#rotation-1-puzzle" transform="translate(20) rotate(180)"/>
    <line className="reflection-line" y1="-50" y2="50" />
</React.Fragment>

const TransformColourIcon1 = () => <React.Fragment>
    <line className="reflection-line" y1="-50" y2="50" />

    <g transform="translate(-20)">
        <g className="graph-edges">
            <line x1="0" y1="16" x2="0" y2="-16" />
        </g>
        <g className="graph-nodes">
            <circle className="colour-1" cx="0" cy="-16" r="5" />
            <circle className="colour-2" cx="0" cy="0" r="5" />
            <circle className="colour-1" cx="0" cy="16" r="5" />
        </g>
    </g>

    <g transform="translate(20)">
        <g className="graph-edges">
            <line x1="0" y1="16" x2="0" y2="-16" />
        </g>
        <g className="graph-nodes">
            <circle className="colour-2" cx="0" cy="-16" r="5" />
            <circle className="colour-1" cx="0" cy="0" r="5" />
            <circle className="colour-2" cx="0" cy="16" r="5" />
        </g>
    </g>
</React.Fragment>

export default [IdentityIcon1, ReflectionIcon1, RotationIcon1, TransformColourIcon1];
