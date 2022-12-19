import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {ServerErrorCard} from '@leverage-js/ui';

import './style.scss';

export default function (props) {
    return <DemoPage className="error-card" name="Error 500 Card">
        <ServerErrorCard />
    </DemoPage>;
}
