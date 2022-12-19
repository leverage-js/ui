import React from 'react';

import './style.scss';

export default function ({
    children,
    className,
    name,
    ticket,
 }) {
    document.title = name;

    const classes = className ? className.split(' ') : [];
    classes.push('demo-page');
    return <div className={classes.join(' ')}>
        <h1>
            <a href={'https://prestigedigital.atlassian.net/browse/' + ticket}>
                {ticket}
            </a> {name}
        </h1>

        <div className="demo-content">
            {children}
        </div>
    </div>
}
