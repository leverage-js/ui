import React from 'react';

import ContentCard from 'Component/Card/Content';
import SecondaryButton from 'Component/Button/Secondary';

import './style.scss';

export default function Modal({
    action,
    children,
    className,
    onCancel,
    title,
}) {
    const classes = className ? className.split(' ') : [];
    classes.push('modal');
    return <div className={classes.join(' ')}>
        <ContentCard>
            <h2>{title}</h2>

            <div className="content">
                {children}
            </div>

            <div className="actions">
                <SecondaryButton onClick={onCancel}>
                    Cancel
                </SecondaryButton>

                {action}
            </div>
        </ContentCard>
    </div>;
}
