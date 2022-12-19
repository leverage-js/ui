import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    Button,
    Notification,
    useNotification,
} from '@leverage-js/ui';

import './Notification.scss';

export default function (props) {
    const {successNotification} = useNotification();

    return (
        <DemoPage name="Confirmation Box" ticket="UI-67">
            <notification-demo-wrapper>
                <Button onClick={() => successNotification('Confirmation Box')}>
                    Trigger a Confirmation Box
                </Button>

                <notification-wrapper>
                    <Notification />
                </notification-wrapper>
            </notification-demo-wrapper>
        </DemoPage>
    );
}
