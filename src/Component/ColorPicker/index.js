import React, {useEffect, useState} from 'react';
import {RgbaStringColorPicker} from 'react-colorful';

import {extend} from 'colord';
import namesPlugin from 'colord/plugins/names';
// Using CSS color names plugin for Colord
extend([namesPlugin]);

import PrimaryButton from 'Component/Button/Primary';
import SecondaryButton from 'Component/Button/Secondary';
import SimpleInput from 'Component/Input/Simple';
import Toggle from 'Component/Toggle';

import formatColor from 'Util/formatColor';
import isRgb from 'Util/isRgb';
import rgbFormat from 'Util/rgbFormat';

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

    function format(color) {
        return formatColor(color, isRgbFormat);
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
            value={format(rgbColor)}
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
