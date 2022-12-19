import React, {useState} from 'react';

import {PrimaryButton, RequestOverlay} from '@leverage-js/ui';

import DemoPage from 'DemoPage/DemoPage';

export default function (props) {
    const [show, setShow] = useState(false);

    function onShow() {
        setShow(true);
        setTimeout(() => setShow(false), 3000);
    }

    return <DemoPage name="Request Overlay">
        <PrimaryButton onClick={onShow}>
            Show it for 3 seconds
        </PrimaryButton>

        {show && <RequestOverlay />}
    </DemoPage>;
}
