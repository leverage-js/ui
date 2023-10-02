import React, {useEffect, useRef, useState} from 'react';
import {RgbaStringColorPicker} from 'react-colorful';

import {extend} from 'colord';
import namesPlugin from 'colord/plugins/names';
// Using CSS color names plugin for Colord
extend([namesPlugin]);

import PrimaryButton from 'Component/Button/Primary';
import SecondaryButton from 'Component/Button/Secondary';
import SimpleInput from 'Component/Input/Simple';
import Toggle from 'Component/Toggle';

import formatColor from './Util/formatColor';
import isRgb from './Util/isRgb';
import parseInputColor from './Util/parseInputColor';
import rgbFormat from './Util/rgbFormat';

import './ColorPicker.scss';

export default function ColorPicker(props) {
    const [rgbColor, setRgbColor] = useState('');
    const [colorInput, setColorInput] = useState('');
    const [isRgbFormat, setIsRgbFormat] = useState(false);
    const inputError = useRef(false);

    useEffect(() => {
        if (!props.color) return;

        const isRgbType = isRgb(props.color);
        setRgbColor(rgbFormat(props.color));
        setColorInput(formatColor(props.color, isRgbType))
        setIsRgbFormat(isRgbType);
    }, [props.color]);

    function updateRgbToggle(rgbModeOn) {
        setIsRgbFormat(rgbModeOn);
        setColorInput(formatColor(rgbColor, rgbModeOn));
    }

    function updateSelectedColor(color) {
        setColorInput(format(color));
        setRgbColor(rgbFormat(color));
    }

    function updateColorInput(color) {
        const validColor = parseInputColor(color, isRgbFormat);

        if (validColor) {
            inputError.current = false;
            updateSelectedColor(validColor);

            return;
        }

        inputError.current = true;
        setColorInput(color);
    }

    function format(color) {
        return formatColor(color, isRgbFormat);
    }

    function onClear() {
        props.onClear();
    }

    function onSelect() {
        props.onSelect(
            format(rgbColor)
        );
    }

    return <color-picker>
        <RgbaStringColorPicker
            color={rgbColor}
            onChange={updateSelectedColor}
        />

        <SimpleInput
            onChange={updateColorInput}
            scalable
            value={colorInput}
            error={inputError.current}
        />

        <div className="actions">
            <toggle-with-label>
                <Toggle
                    onChange={updateRgbToggle}
                    value={isRgbFormat}
                />

                <label>RGBA</label>
            </toggle-with-label>

            <buttons-wrapper>
                <SecondaryButton
                    onClick={onClear}
                    size="large"
                >
                    Clear
                </SecondaryButton>
                <PrimaryButton
                    onClick={onSelect}
                    size="large"
                    disabled={inputError.current}
                >
                    Select
                </PrimaryButton>
            </buttons-wrapper>
        </div>
    </color-picker>;
}
