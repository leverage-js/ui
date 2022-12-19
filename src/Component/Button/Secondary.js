import React from 'react';

import Button from '.';

export default function SecondaryButton(props) {
    return <Button
        disabled={props.disabled}
        onClick={props.onClick}
        size={props.size}
        scalable={props.scalable}
        type="secondary"
        warning={props.warning}
    >
        {props.children}
    </Button>;
}
