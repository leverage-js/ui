import React from 'react';

import LargeIconSvg from './SVG/LargeSvg';

import './Large.scss';

export default function (props) {
    const classes = ['large'];
    if (props.disabled) {
        classes.push('disabled');
    }
    if (props.isActive) {
        classes.push('active');
    }
    return (
        <icon-component
            class={classes.join(' ')}
            onClick={props.onClick}
        >
            <LargeIconSvg icon={props.icon} />
        </icon-component>
    );
}
