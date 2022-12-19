import React from 'react';

import './Button.scss';

export default function Button(props) {
    const classes = [
        'button',
    ];

    const sizeClass = props.size === 'small' ? 'button-small' : 'button-large';
    classes.push(sizeClass);

    const typeClass = props.type === 'secondary' ? 'button-secondary' : 'button-primary';
    classes.push(typeClass);

    if (props.scalable) {
        classes.push('button-scalable');
    }

    if (props.warning) {
        classes.push('button-warning');
    }

    return <button
        className={classes.join(' ')}
        disabled={props.disabled}
        onClick={props.onClick}
    >
        {props.children}
    </button>;
}
