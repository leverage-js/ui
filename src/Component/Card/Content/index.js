import React from 'react';

import './Content.scss';

export default function ContentCard({
    children,
    className,
}) {
    const classes = className ? className.split(' ') : [];
    classes.push('content-card');
    return <div className={classes.join(' ')}>
        {children}
    </div>;
}
