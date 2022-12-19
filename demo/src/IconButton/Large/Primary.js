import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    MediumPlusIcon as PlusIcon,
    PrimaryIconButton,
} from '@leverage-js/ui';

import '../Button.scss';

export default function (props) {
    return (
        <DemoPage name="Icon Button - Primary Large" ticket="UI-31">
            <button-row>
                <PrimaryIconButton size="large">
                    <PlusIcon />
                </PrimaryIconButton>

                <PrimaryIconButton size="large" disabled>
                    <PlusIcon />
                </PrimaryIconButton>

                <PrimaryIconButton size="large" warning>
                    <PlusIcon />
                </PrimaryIconButton>
            </button-row>
        </DemoPage>
    );
}
