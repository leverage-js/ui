import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import ServerError from 'Component/Card/Error/ServerError';

import './style.scss';

export default function (props) {
    return <DemoPage className="error-card" name="Error 500 Card">
        <ServerError />
    </DemoPage>;
}
