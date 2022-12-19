import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import PlusIcon from 'Component/Icon/Medium/PlusIcon';
import SecondaryIconButton from 'Component/IconButton/Secondary';

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
