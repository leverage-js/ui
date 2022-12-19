import React from 'react';

import './TextCta.scss';

export default function TextCtaCard(props) {
    return <text-cta-card class={props.active ? 'active' : ''}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <card-actions>{props.children}</card-actions>
    </text-cta-card>;
}
