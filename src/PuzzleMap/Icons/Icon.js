import React from 'react';
import './icons.css';

export default (props) =>
    <svg viewBox="-50 -50 100 100">
        <circle className="spotlight" cx="0" cy="0" r="49" />
        { props.children }
    </svg>
