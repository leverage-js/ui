import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import PrimaryButton from 'Component/Button/Primary';

import '../Button.scss';

export default function (props) {
    return (
        <DemoPage name="Button - Primary Small" ticket="UI-6">
            <button-row>
                <PrimaryButton size="small">
                    Default
                </PrimaryButton>

                <PrimaryButton size="small" disabled>
                    Disabled
                </PrimaryButton>

                <PrimaryButton size="small" warning>
                    Warning
                </PrimaryButton>
            </button-row>
        </DemoPage>
    );
}
