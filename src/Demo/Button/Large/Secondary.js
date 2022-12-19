import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import SecondaryButton from 'Component/Button/Secondary';

import '../Button.scss';

export default function (props) {
    return (
        <DemoPage name="Button - Secondary Large" ticket="UI-5">
            <button-row>
                <SecondaryButton size="large">
                    Default
                </SecondaryButton>

                <SecondaryButton size="large" disabled>
                    Disabled
                </SecondaryButton>

                <SecondaryButton size="large" warning>
                    Warning
                </SecondaryButton>
            </button-row>
        </DemoPage>
    );
}
