import React from 'react';

import { ColourGraphIcon1, ColourGraphIcon2, ColourGraphIcon3 } from './Icons/ColourGraphs';
import { ColourMapIcon1, ColourMapIcon2 } from './Icons/ColourMaps';
import { IdentityIcon1, ReflectionIcon1, RotationIcon1, TransformColourIcon1 } from './Icons/Transformations';
import { SequencesIcon1 } from './Icons/Sequences';
import { Categorisation1, Categorisation2, Categorisation3 } from './Icons/Categorisation';

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
        { slug: 'transform-colour-1', icon: <TransformColourIcon1/> },
    ], [
        { slug: 'sequences-1', icon: <SequencesIcon1/> },
    ], [
        { slug: 'categorisation-1', icon: <Categorisation1/> },
        { slug: 'categorisation-2', icon: <Categorisation2/> },
        { slug: 'categorisation-3', icon: <Categorisation3/> },
    ],
];

export default puzzles;
