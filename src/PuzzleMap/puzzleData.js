import React from 'react';

import {
    ColourGraphIcon1,
    ColourGraphIcon2,
    ColourGraphIcon3
} from '../Icons/ColourGraphs';

import {
    ColourMapIcon1,
    ColourMapIcon2,
} from '../Icons/ColourMaps';

import {
    ReflectionIcon1,
    RotationIcon1
} from '../Icons/Transformations';

import { RepeatingPatternsIcon1 } from '../Icons/RepeatingPatterns';

const puzzles = [
    [
        { slug: 'colour-graphs-1', icon: <ColourGraphIcon1/> },
        { slug: 'colour-graphs-2', icon: <ColourGraphIcon2/> },
        { slug: 'colour-graphs-3', icon: <ColourGraphIcon3/> },
    ],[
        { slug: 'colour-maps-1', icon: <ColourMapIcon1/> },
        { slug: 'colour-maps-2', icon: <ColourMapIcon2/> },
    ],[
        { slug: 'reflection-1', icon: <ReflectionIcon1/> },
        { slug: 'rotation-1', icon: <RotationIcon1/> },
    ],[
        { slug: 'repeating-patterns-1', icon: <RepeatingPatternsIcon1/> },
    ],
];

export default puzzles;
