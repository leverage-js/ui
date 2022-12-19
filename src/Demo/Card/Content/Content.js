import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import ContentCard from 'Component/Card/Content';

import './Content.scss';

export default function (props) {
    return (
        <DemoPage name="Content Card" ticket="UI-33">
            <card-wrapper>
                <ContentCard>
                    Content Card
                </ContentCard>
            </card-wrapper>
        </DemoPage>
    );
}
