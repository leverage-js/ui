import React from 'react';

import SmallIconSvg from './SVG/SmallSvg';

import './Small.scss';

export default function (props) {
    const classes = ['small'];
    if (props.disabled) {
        classes.push('disabled');
    }
    if (props.isActive) {
        classes.push('active');
    }
    return (
        <icon-component class={classes.join(' ')}>
            <SmallIconSvg icon={props.icon} />
        </icon-component>
    );
}
