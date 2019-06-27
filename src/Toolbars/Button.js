import React from 'react';
import { handleKeyDown } from '../utils/common';


export default (props) => {
    let className = props.className || "";
    if (props.flashing) { className += " flashing"; }

    return <svg viewBox="-12 -12 24 24">
        <circle
            className={className}
            tabIndex="0"
            r="9"
            onClick={props.onClick}
            onKeyDown={(evt) => handleKeyDown(evt, props.onClick)}
            role="button" />
    </svg>
}