import React from 'react';

import IconButton from '.';

export default function SecondaryIconButton(props) {
    return <IconButton
        disabled={props.disabled}
        onClick={props.onClick}
        size={props.size}
        type="secondary"
        warning={props.warning}
    >
        {props.children}
    </IconButton>;
}
