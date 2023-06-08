import React from 'react';

import './Simple.scss';

export default function SimpleInput(props) {
    function onBlur(event) {
        if (!props.onBlur) return;
        
        props.onBlur(event.target.value);
    }
    
    function onChange(event) {
        props.onChange(event.target.value);
    }

    const classes = [
        'input',
        'simple-input',
    ];
    if (props.error) {
        classes.push('input-error');
    }

    const password = props.password ? {type: 'password'} : {};

    const ref = props.inputRef
        ? {ref: props.inputRef}
        : {}
    ;

    const disabledInput = <input
        className="input simple-input"
        value={props.value ?? ''}
        disabled
        {...password}
        {...ref}
    />;
    const editableInput = <input
        className={classes.join(' ')}
        onBlur={onBlur}
        onChange={onChange}
        {...password}
        placeholder={props.placeholder ?? ''}
        value={props.value ?? ''}
    />;
    const input = props.disabled ? disabledInput : editableInput;

    return <simple-input-wrapper>
        {input}
    </simple-input-wrapper>;
}
