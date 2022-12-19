import React from 'react';

import ContentCard from 'Component/Card/Content';

import LoadingIcon from './loading.svg';

import './style.scss';

export default function RequestOverlay(props) {
    return <div className="request-overlay">
        <ContentCard>
            <LoadingIcon />
        </ContentCard>
    </div>;
}
