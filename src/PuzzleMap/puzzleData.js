import React from 'react';

import { ColourGraphIcon1, ColourGraphIcon2, ColourGraphIcon3 } from '../Icons/ColourGraphs';
import { ColourMapIcon1, ColourMapIcon2 } from '../Icons/ColourMaps';
import { IdentityIcon1, ReflectionIcon1, RotationIcon1 } from '../Icons/Transformations';
import { RepeatingPatternsIcon1 } from '../Icons/RepeatingPatterns';
import { Categorisation1 } from '../Icons/Categorisation';

const puzzles = [
    [
        { slug: 'colour-graphs-1', icon: <ColourGraphIcon1/> },
        { slug: 'colour-graphs-2', icon: <ColourGraphIcon2/> },
        { slug: 'colour-graphs-3', icon: <ColourGraphIcon3/> },
    ], [
        { slug: 'colour-maps-1', icon: <ColourMapIcon1/> },
        { slug: 'colour-maps-2', icon: <ColourMapIcon2/> },
    ], [
        { slug: 'identity-1', icon: <IdentityIcon1/> },
        { slug: 'reflection-1', icon: <ReflectionIcon1/> },
        { slug: 'rotation-1', icon: <RotationIcon1/> },
    ], [
        { slug: 'repeating-patterns-1', icon: <RepeatingPatternsIcon1/> },
    ], [
        { slug: 'categorisation-1', icon: <Categorisation1/> },
    ],
];

export default puzzles;
