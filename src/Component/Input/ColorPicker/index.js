import React, {useEffect, useRef, useState} from 'react';

import getOptionsPosition, {OPTIONS_POSITION_DEFAULT} from '../Dropdown/helpers/getOptionsPosition';
import updateOptionsTop from '../Dropdown/helpers/updateOptionsTop';

import ColorPicker from 'Component/ColorPicker';
import DropdownCloseIcon from 'Component/Icon/Small/DropdownCloseIcon';
import useClickOutside from 'Hook/useClickOutside';

import './ColorPicker.scss';

export default function ColorPickerInput(props) {
    const PLACEHOLDER = 'Choose Color';

    const [color, setColor] = useState(null);
    const [optionsPosition, setOptionsPosition] = useState(OPTIONS_POSITION_DEFAULT);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const ref = useRef();
    const optionsRef = useRef();

    useClickOutside(ref, onClickOutside);

    useEffect(
        () => {
            setColor(props.color);
        },
        [props.color]
    );
    useEffect(() => {
        if (showColorPicker) {
            const optionsPosition = getOptionsPosition(ref.current, optionsRef.current);
            setOptionsPosition(optionsPosition);
            updateOptionsTop(ref.current, optionsRef.current, optionsPosition);
        }
    }, [showColorPicker]);

    function toggleColorPicker() {
        setShowColorPicker(!showColorPicker);
    }

    function onClickOutside() {
        hideColorPicker();
    }

    function onClearColor() {
        setColor(null);
        hideColorPicker();
        props.onChange(null);
    }

    function onSelectColor(color) {
        setColor(color);
        hideColorPicker();
        props.onChange(color);
    }

    function hideColorPicker() {
        setShowColorPicker(false);
    }

    const classes = [
        'input',
        'color-picker-input',
    ];
    if (props.error) {
        classes.push('input-error');
    }

    const colorCircleStyle = {};
    if (color) {
        colorCircleStyle.backgroundColor = color;
    }
    const colorPicker = <color-picker-wrapper ref={optionsRef}>
        <ColorPicker
            color={color}
            onClear={onClearColor}
            onSelect={onSelectColor}
        />
    </color-picker-wrapper>;
    const editableColorPickerInput = <>
        <input
            className={classes.join(' ')}
            onClick={toggleColorPicker}
            placeholder={PLACEHOLDER}
            readOnly
            value={color ?? ''}
        />

        <color-picker-input-actions-wrapper onClick={toggleColorPicker}>
            <color-circle-wrapper>
                <color-circle style={colorCircleStyle}></color-circle>
            </color-circle-wrapper>

            <button-wrapper>
                <DropdownCloseIcon className="action-icon" />
            </button-wrapper>
        </color-picker-input-actions-wrapper>

        {showColorPicker ? colorPicker : null}
    </>;
    const disabledColorPickerInput = <>
        <input
            className="input color-picker-input"
            placeholder={PLACEHOLDER}
            defaultValue={color}
            disabled
        />

        <color-picker-input-actions-wrapper disabled>
            <color-circle></color-circle>
            <DropdownCloseIcon className="disabled-icon" />
        </color-picker-input-actions-wrapper>
    </>;
    const colorPickerInput = !props.disabled ? editableColorPickerInput : disabledColorPickerInput;

    return <color-picker-input-wrapper
        class={'color-picker-position-' + optionsPosition}
        ref={ref}
    >
        {colorPickerInput}
    </color-picker-input-wrapper>;
}
