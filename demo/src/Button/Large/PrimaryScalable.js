import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {PrimaryButton} from '@leverage-js/ui';

import '../Button.scss';

export default function (props) {
    return (
        <DemoPage name="Scalable Primary Button" ticket="UI-18">
            <button-row>
                <PrimaryButton size="large" scalable>
                    Default
                </PrimaryButton>

                <PrimaryButton size="large" scalable disabled>
                    Disabled
                </PrimaryButton>

                <PrimaryButton size="large" scalable warning>
                    Warning
                </PrimaryButton>
            </button-row>
        </DemoPage>
    );
}
