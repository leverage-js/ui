import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import NotFoundError from 'Component/Card/Error/NotFound';

import './style.scss';

export default function (props) {
    return <DemoPage className="error-card" name="Error 404 Card">
        <NotFoundError />
    </DemoPage>;
}
