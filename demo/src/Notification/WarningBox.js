import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    Button,
    Notification,
    useNotification,
} from '@leverage-js/ui';

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
