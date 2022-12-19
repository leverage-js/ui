import React from 'react';

import HugeIconSvg from './SVG/HugeSvg';

import './Large.scss';

export default function (props) {
    const classes = ['huge'];
    if (props.disabled) {
        classes.push('disabled');
    }
    if (props.isActive) {
        classes.push('active');
    }
    return (
        <icon-component class={classes.join(' ')}>
            <HugeIconSvg icon={props.icon} />
        </icon-component>
    );
}
