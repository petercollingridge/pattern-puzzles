import React from 'react';
import { handleKeyDown } from '../../utils/common';


export const SVGButton = (props) =>
    <circle
        r="9"
        role="button"
        tabIndex="0"
        onKeyDown={evt => handleKeyDown(evt, props.onClick)}
        {...props} />


export const Button = (props) =>
    <svg viewBox="-15 -15 31 31">
        <SVGButton r="9" {...props} />
    </svg>
