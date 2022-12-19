import React from 'react';

import ContentCard from 'Component/Card/Content';
import ImageIcon from 'Component/Icon/Medium/ImageIcon';

import './style.scss';

export default function ErrorCard({
    children,
    className,
}) {
    const classes = className ? className.split(' ') : [];
    classes.push('error-card');
    return <ContentCard className={classes.join(' ')}>
        <icon-wrapper>
            <ImageIcon />
        </icon-wrapper>

        {children}
    </ContentCard>;
}
