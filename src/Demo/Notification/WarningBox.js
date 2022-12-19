import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import useNotification from 'Store/useNotification';

import Button from 'Component/Button';
import Notification from 'Component/Notification';

import './Notification.scss';

export default function (props) {
    const {errorNotification} = useNotification();

    return <DemoPage name="Warning Box" ticket="UI-66">
        <notification-demo-wrapper>
            <Button onClick={() => errorNotification('Warning Box')}>
                Trigger a Warning Box
            </Button>

            <Button type="secondary" onClick={() => errorNotification()}>
                Trigger a Warning Box with a default message
            </Button>

            <notification-wrapper>
                <Notification />
            </notification-wrapper>
        </notification-demo-wrapper>
    </DemoPage>;
}
