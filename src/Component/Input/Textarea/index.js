import React from 'react';

import './Textarea.scss';

export default function Textarea(props) {
    function onBlur(event) {
        if (!props.onBlur) return;

        props.onBlur(event.target.value);
    }

    function onChange(event) {
        props.onChange(event.target.value);
    }

    const classes = [
        'input',
        'textarea',
    ];
    if (props.error) {
        classes.push('input-error');
    }

    const ref = props.inputRef
        ? {ref: props.inputRef}
        : {}
    ;

    const editableTextarea = <textarea
        className={classes.join(' ')}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={props.placeholder ?? ''}
        value={props.value ?? ''}
    />;
    const disabledTextarea = <textarea
        className="input textarea"
        defaultValue={props.value ?? ''}
        disabled
        {...ref}
    />;
    const textarea = !props.disabled ? editableTextarea : disabledTextarea;

    return <textarea-component>
        {textarea}
    </textarea-component>;
}
