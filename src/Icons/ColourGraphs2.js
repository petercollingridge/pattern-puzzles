import React from 'react';

export default () => <svg viewBox="-50 -50 100 100">
    <circle class="spotlight" cx="0" cy="0" r="49" />
    <g class="graph-edges">
        <rect x="-32" y="-16" width="64" height="32" fill="none" />
        <line x1="0" y1="-16" x2="0" y2="16" />
        <line x1="-32" y1="-16" x2="0" y2="16" />
        <line x1="32" y1="-16" x2="0" y2="16" />
    </g>
    <g class="graph-nodes">
        <circle color="rgb(20, 146, 196)" cx="-32" cy="-16" r="8" />
        <circle color="rgb(196, 20, 96)" cx="0" cy="-16" r="8" />
        <circle color="rgb(20, 146, 196)" cx="32" cy="-16" r="8" />
        <circle color="rgb(196, 20, 96)" cx="32" cy="16" r="8" />
        <circle color="rgb(147, 20, 198)" cx="0" cy="16" r="8" />
        <circle color="rgb(196, 20, 96)" cx="-32" cy="16" r="8" />
    </g>
</svg>