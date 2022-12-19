import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {NotFoundCard} from '@leverage-js/ui';

import './style.scss';

export default function (props) {
    return <DemoPage className="error-card" name="Error 404 Card">
        <NotFoundCard />
    </DemoPage>;
}
