import React, {useEffect, useState} from 'react';

import './Toggle.scss';

export default function Toggle(props) {
    const [value, setValue] = useState(props.value);

    useEffect(
        () => setValue(props.value),
        [props.value]
    );

    function onClick() {
        const newValue = !value;
        setValue(newValue);
        props.onChange(newValue);
    }

    const classes = [
        value ? 'toggle-on' : 'toggle-off',
    ];
    if (props.disabled) {
        classes.push('toggle-disabled');
    }

    return <toggle-component class={classes.join(' ')}>
        <toggle-container onClick={onClick}>
            <toggle-circle />
        </toggle-container>
    </toggle-component>;
}
