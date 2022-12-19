import React from 'react';

import './style.scss';

export default function Table({
    children,
    className,
}) {
    const classes = className ? className.split(' ') : [];
    classes.push('table');
    return <table className={classes.join(' ')}>
        {children}
    </table>;
}
