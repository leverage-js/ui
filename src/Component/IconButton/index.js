import React from 'react';

import './IconButton.scss';

export default function IconButton(props) {
    const classes = [
        'button',
        'icon-button',
    ];

    const sizeClass = props.size === 'small' ? 'icon-button-small' : 'icon-button-large';
    classes.push(sizeClass);

    const typeClass = props.type === 'secondary' ? 'icon-button-secondary' : 'icon-button-primary';
    classes.push(typeClass);

    if (props.warning) {
        classes.push('icon-button-warning');
    }

    return <button
        className={classes.join(' ')}
        disabled={props.disabled}
        onClick={props.onClick}
    >
        {props.children}
    </button>;
}
