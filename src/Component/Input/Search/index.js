import React from 'react';

import SearchIcon from 'Component/Icon/Small/SearchIcon';

import './Search.scss';

export default function SearchInput(props) {
    function onChange(event) {
        props.onChange(event.target.value);
    }

    const classes = [
        'input',
        'search-input',
    ];
    const disabledClasses = [...classes];
    if (props.error) {
        classes.push('input-error');
    }
    if (props.scalable) {
        classes.push('search-input-scalable');
        disabledClasses.push('search-input-scalable');
    }

    const disabledInput = <input
        className={disabledClasses.join(' ')}
        defaultValue={props.value ?? ''}
        disabled
    />;
    const editableInput = <input
        className={classes.join(' ')}
        onChange={onChange}
        placeholder="Search"
        value={props.value}
    />;
    const input = props.disabled ? disabledInput : editableInput;

    return <search-input>
        <SearchIcon className="light-icon" />
        {input}
    </search-input>;
}
