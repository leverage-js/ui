import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import SecondaryButton from 'Component/Button/Secondary';

import '../Button.scss';

export default function (props) {
    return (
        <DemoPage name="Button - Secondary Small" ticket="UI-7">
            <button-row>
                <SecondaryButton size="small">
                    Default
                </SecondaryButton>

                <SecondaryButton size="small" disabled>
                    Disabled
                </SecondaryButton>

                <SecondaryButton size="small" warning>
                    Warning
                </SecondaryButton>
            </button-row>
        </DemoPage>
    );
}
