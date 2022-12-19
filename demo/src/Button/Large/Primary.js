import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {PrimaryButton} from '@leverage-js/ui';

import '../Button.scss';

export default function (props) {
    return (
        <DemoPage name="Button - Primary Large" ticket="UI-4">
            <button-row>
                <PrimaryButton size="large">
                    Default
                </PrimaryButton>

                <PrimaryButton size="large" disabled>
                    Disabled
                </PrimaryButton>

                <PrimaryButton size="large" warning>
                    Warning
                </PrimaryButton>
            </button-row>
        </DemoPage>
    );
}
