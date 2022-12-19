import React, {useEffect, useState} from 'react';
import {RgbaStringColorPicker} from 'react-colorful';

import {colord, extend} from 'colord';
import namesPlugin from 'colord/plugins/names';
// Using CSS color names plugin for Colord
extend([namesPlugin]);

import PrimaryButton from 'Component/Button/Primary';
import SecondaryButton from 'Component/Button/Secondary';
import SimpleInput from 'Component/Input/Simple';
import Toggle from 'Component/Toggle';

import './ColorPicker.scss';

export default function ColorPicker(props) {
    const [rgbColor, setRgbColor] = useState('');
    const [isRgbFormat, setIsRgbFormat] = useState(false);

    useEffect(() => {
        if (!props.color) return;

        setFormattedRgbColor(props.color);
        setIsRgbFormat(
            isRgb(props.color)
        );
    }, [props.color]);

    function setFormattedRgbColor(color) {
        setRgbColor(
            rgbFormat(color)
        );
    }

    function isHex(color) {
        return color.startsWith('#');
    }

    function hexFormat(color) {
        return isHex(color)
            ? color
            : colord(color).toHex()
        ;
    }

    function isRgb(color) {
        return color.startsWith('rgb');
    }

    function rgbFormat(color) {
        return isRgb(color)
            ? color
            : colord(color).toRgbString()
        ;
    }

    function formatColor(color) {
        if (isRgbFormat) {
            return rgbFormat(color);
        }

        return hexFormat(color);
    }

    function onClear() {
        props.onClear();
    }

    function onSelect() {
        props.onSelect(
            formatColor(rgbColor)
        );
    }

    return <color-picker>
        <RgbaStringColorPicker
            color={rgbColor}
            onChange={setRgbColor}
        />

        <SimpleInput
            onChange={setFormattedRgbColor}
            scalable
            value={formatColor(rgbColor)}
        />

        <div className="actions">
            <toggle-with-label>
                <Toggle
                    onChange={setIsRgbFormat}
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
                >
                    Select
                </PrimaryButton>
            </buttons-wrapper>
        </div>
    </color-picker>;
}
