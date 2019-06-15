import React from 'react';


export default (props) => {
    let className = props.className || "";
    if (props.flashing) { className += " flashing"; }

    return <svg viewBox="-12 -12 24 24">
        <circle className={className} r="9" onClick={props.onClick} role="button" />
    </svg>
}