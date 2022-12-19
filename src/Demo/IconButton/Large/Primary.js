import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import PlusIcon from 'Component/Icon/Medium/PlusIcon';
import PrimaryIconButton from 'Component/IconButton/Primary';

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
