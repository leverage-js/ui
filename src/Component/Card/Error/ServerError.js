import React from 'react';

import ErrorCard from '.';

import './style.scss';

export default function ServerErrorCard(props) {
    return <ErrorCard className="server-error-card">
        <h1>It’s me, not you.</h1>

        <p>
            Our servers encountered an error – it looks like someone<br />
            dropped spaghetti in the carbon fusion reactor again.<br />
            Please email support@quizitri.com and let us know<br />
            what you were doing when this error occurred.
        </p>
    </ErrorCard>;
}
