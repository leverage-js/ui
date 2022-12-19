import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import EmptyStateCard from 'Component/Card/EmptyState';

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
