import React, {useEffect, useRef, useState} from 'react';

import useClickOutside from 'Hook/useClickOutside';

import Option, {NullOption} from './Option';
import getOptionsPosition, {OPTIONS_POSITION_DEFAULT} from './helpers/getOptionsPosition';
import updateOptionsTop from './helpers/updateOptionsTop';

import DropdownCloseIcon from 'Component/Icon/Small/DropdownCloseIcon';
import DropdownOpenIcon from 'Component/Icon/Small/DropdownOpenIcon';

import Options from './Options';

import './Dropdown.scss';

export default function Dropdown(props) {
    const DEFAULT_PLACEHOLDER = 'Select Option';

    const [optionsPosition, setOptionsPosition] = useState(OPTIONS_POSITION_DEFAULT);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(new NullOption);

    const ref = useRef();
    const optionsRef = useRef();

    useClickOutside(ref, onClickOutside);

    useEffect(
        () => {
            if (!props.options || props.value === undefined) {
                setSelectedOption(new NullOption);
                return;
            }

            setSelectedOption(
                getSelectedOption(props.value)
            );
        },
        [props.options, props.value]
    );
    useEffect(() => {
        if (showOptions) {
            const optionsPosition = getOptionsPosition(ref.current, optionsRef.current);
            setOptionsPosition(optionsPosition);
            updateOptionsTop(ref.current, optionsRef.current, optionsPosition);
        }
    }, [showOptions]);

    function hideOptions() {
        setShowOptions(false);
    }

    function toggleOptions() {
        setShowOptions(!showOptions);
    }

    function onClickOutside() {
        hideOptions();
    }

    function onOptionClick(option) {
        setSelectedOption(option);
        hideOptions();
        props.onChange(option.key);
    }

    function options() {
        return props.options
            ? props.options.map(option => new Option(option))
            : []
        ;
    }

    function getSelectedOption(key) {
        return options().find(
            option => option.key === key
        ) ?? new NullOption;
    }

    const classes = [
        'input',
        'dropdown',
    ];
    if (props.error) {
        classes.push('input-error');
    }

    const wrappedOptions = <options-wrapper ref={optionsRef}>
        <Options
            onOptionClick={onOptionClick}
            options={options()}
            searchable={props.searchable ?? false}
            value={selectedOption}
        />
    </options-wrapper>;
    const ActionIcon = showOptions ? DropdownOpenIcon : DropdownCloseIcon;
    const editableDropdown = <>
        <input
            className={classes.join(' ')}
            onClick={toggleOptions}
            placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER}
            readOnly
            value={selectedOption.value ?? ''}
        />

        <actions-wrapper onClick={toggleOptions}>
            <button-wrapper>
                <ActionIcon className="action-icon" />
            </button-wrapper>
        </actions-wrapper>

        {showOptions ? wrappedOptions : null}
    </>;
    const disabledDropdown = <>
        <input
            className="input dropdown"
            defaultValue={selectedOption.value}
            disabled
            placeholder={DEFAULT_PLACEHOLDER}
        />

        <actions-wrapper disabled>
            <ActionIcon className="disabled-icon" />
        </actions-wrapper>
    </>;
    const dropdown = !props.disabled ? editableDropdown : disabledDropdown;
    const wrapperClasses = ['options-position-' + optionsPosition];
    if (props.fixed) {
        wrapperClasses.push('dropdown-fixed');
    }

    return <dropdown-wrapper
        class={wrapperClasses.join(' ')}
        ref={ref}
    >
        {dropdown}
    </dropdown-wrapper>;
}
