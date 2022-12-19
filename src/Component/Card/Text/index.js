import React from 'react';

import './Text.scss';

export default function TextCard(props) {
    return <text-card class={props.active ? 'text-card-active' : ''}>
        {props.children}
    </text-card>;
}
