import React from 'react';

import ErrorCard from '.';

import './style.scss';

export default function NotFoundCard(props) {
    return <ErrorCard className="not-found-card">
        <h1>Oops! That page could not be found.</h1>

        <p>
            Don’t worry, the internet isn’t broken, but something fishy is going on.<br />
            Please email support@quizitri.com and let us know what you were doing<br />
            and which page you were expecting to see.
        </p>
    </ErrorCard>;
}
