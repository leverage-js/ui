import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import Toggle from 'Component/Toggle';

import './Toggle.scss';

export default function (props) {
    function onChange(value) {
        console.log({value});
    }

    return (
        <DemoPage name="Toggle" ticket="UI-37">
            <demo-toggles-wrapper>
                <h2>On</h2>
                <Toggle onChange={onChange} value={true} />

                <h2>Disabled</h2>
                <Toggle disabled />
            </demo-toggles-wrapper>
        </DemoPage>
    );
}
