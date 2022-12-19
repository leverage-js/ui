import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    MediumPlusIcon as PlusIcon,
    SecondaryIconButton,
} from '@leverage-js/ui';

import '../Button.scss';

export default function (props) {
    return (
        <DemoPage name="Icon Button - Secondary Large" ticket="UI-32">
            <button-row class="secondary">
                <SecondaryIconButton size="large">
                    <PlusIcon />
                </SecondaryIconButton>

                <SecondaryIconButton size="large" disabled>
                    <PlusIcon />
                </SecondaryIconButton>

                <SecondaryIconButton size="large" warning>
                    <PlusIcon />
                </SecondaryIconButton>
            </button-row>
        </DemoPage>
    );
}
