import React from 'react';

import OneDownIcon from 'Component/Icon/Small/OneDownIcon';
import OneUpIcon from 'Component/Icon/Small/OneUpIcon';

import './Number.scss';

export default function NumberInput(props) {
    const max = props.max ?? Infinity;
    const min = props.min ?? -Infinity;
    const step = props.step ?? 1;

    function onBlur(event) {
        if (!props.onBlur) return;

        props.onBlur(
            ensureNullableNumberWithinRange(event.target.value)
        );
    }

    function onChange(event) {
        props.onChange(
            ensureNullableNumberWithinRange(event.target.value)
        );
    }

    function ensureNullableNumberWithinRange(value) {
        let normalizedValue = parseFloat(value);
        if (isNaN(normalizedValue)) return null;

        normalizedValue = Math.min(normalizedValue, max);
        normalizedValue = Math.max(normalizedValue, min);

        return normalizedValue;
    }

    function decrementValue() {
        props.onChange(
            ensureNullableNumberWithinRange(props.value - step)
        );
    }

    function incrementValue() {
        props.onChange(
            ensureNullableNumberWithinRange(props.value + step)
        );
    }

    const classes = [
        'input',
        'number-input',
    ];
    if (props.error) {
        classes.push('input-error');
    }

    const editableInput = <input
        className={classes.join(' ')}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={props.placeholder ?? ''}
        value={props.value ?? ''}
    />;
    const disabledInput = <input
        className="input number-input"
        defaultValue={props.value ?? ''}
        disabled
    />;
    const input = !props.disabled ? editableInput : disabledInput;

    const actions = <actions-wrapper>
        <OneUpIcon className="action-icon"
            onClick={incrementValue}
        />
        <OneDownIcon className="action-icon"
            onClick={decrementValue}
        />
    </actions-wrapper>;

    return <number-input>
        {input}

        {!props.disabled && actions}
    </number-input>;
}
