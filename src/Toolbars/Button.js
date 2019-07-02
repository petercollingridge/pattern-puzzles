import React from 'react';
import { handleKeyDown } from '../utils/common';


export default (props) => {
    let className = props.className || "";
    if (props.flashing) { className += " flashing"; }

    let buttonProps = {};
    if (!props.link) {
        buttonProps.tabIndex = 0;
    }
    
    if (props.onClick) {
        buttonProps.onClick = props.onClick;
        buttonProps.onKeyDown = (evt) => handleKeyDown(evt, props.onClick);
        buttonProps.role = "button";
    }

    return <svg viewBox="-15 -15 31 31">
        <circle
            r="9"
            className={className}
            {...buttonProps} />
    </svg>
};
