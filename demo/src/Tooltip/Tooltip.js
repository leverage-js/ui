import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    SecondaryButton,
    Tooltip,
} from '@leverage-js/ui';

import './Tooltip.scss';

export default function (props) {
    return (
        <DemoPage name="Tooltip" ticket="UI-25">
            <tooltips-wrapper>
                <Tooltip text="Above Tooltip">
                    <SecondaryButton size="small">
                        Above
                    </SecondaryButton>
                </Tooltip>

                <Tooltip position="bottom" text="Below Tooltip">
                    <SecondaryButton size="small">
                        Below
                    </SecondaryButton>
                </Tooltip>

                <Tooltip text="This is a very long tooltip that goes on multiple lines. And it goes on and on and on.">
                    <SecondaryButton size="small">
                        Long
                    </SecondaryButton>
                </Tooltip>
            </tooltips-wrapper>
        </DemoPage>
    );
}
