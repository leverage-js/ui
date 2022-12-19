import React from 'react';

import ContentCard from 'Component/Card/Content';
import ImageIcon from 'Component/Icon/Medium/ImageIcon';

import './EmptyState.scss';

export default function EmptyStateCard(props) {
    return <ContentCard className="empty-state-card">
        <empty-state-card-content>
            <icon-wrapper>
                <ImageIcon />
            </icon-wrapper>

            <p>Nothing to see here…</p>
        </empty-state-card-content>
    </ContentCard>;
}
