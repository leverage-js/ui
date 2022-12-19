import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {EmptyStateCard} from '@leverage-js/ui';

import './EmptyState.scss';

export default function (props) {
    return (
        <DemoPage name="Empty State Card" ticket="UI-64">
            <card-wrapper>
                <EmptyStateCard />
            </card-wrapper>
        </DemoPage>
    );
}
