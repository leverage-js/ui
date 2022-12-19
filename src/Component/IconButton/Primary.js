import React from 'react';

import IconButton from '.';

export default function PrimaryIconButton(props) {
    return <IconButton
        disabled={props.disabled}
        onClick={props.onClick}
        size={props.size}
        type="primary"
        warning={props.warning}
    >
        {props.children}
    </IconButton>;
}
