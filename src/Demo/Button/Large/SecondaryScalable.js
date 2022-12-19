import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import SecondaryButton from 'Component/Button/Secondary';

import '../Button.scss';

export default function (props) {
    return (
        <DemoPage name="Secondary Scalable Button" ticket="UI-19">
            <button-row>
                <SecondaryButton size="large" scalable>
                    Default
                </SecondaryButton>

                <SecondaryButton size="large" scalable disabled>
                    Disabled
                </SecondaryButton>

                <SecondaryButton size="large" scalable warning>
                    Warning
                </SecondaryButton>
            </button-row>
        </DemoPage>
    );
}
