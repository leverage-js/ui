import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import ColorPickerInput from 'Component/Input/ColorPicker';

import '../Input.scss';

export default function (props) {
    return (
        <DemoPage name="Color Picker Input" ticket="UI-21">
            <inputs-wrapper>
                <ColorPickerInput
                    onChange={color => {}}
                />

                <ColorPickerInput
                    color="rgba(0, 0, 0, 0.5)"
                    onChange={color => {}}
                />

                <ColorPickerInput disabled/>

                <ColorPickerInput
                    error
                    color="green"
                    onChange={color => {}}
                />
            </inputs-wrapper>
        </DemoPage>
    );
}
