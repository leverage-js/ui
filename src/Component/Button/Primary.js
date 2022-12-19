import React from 'react';

import Button from '.';

export default function PrimaryButton(props) {
    return <Button
        disabled={props.disabled}
        onClick={props.onClick}
        size={props.size}
        scalable={props.scalable}
        type="primary"
        warning={props.warning}
    >
        {props.children}
    </Button>;
}
