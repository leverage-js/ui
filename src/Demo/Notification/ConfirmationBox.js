import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import useNotification from 'Store/useNotification';

import Button from 'Component/Button';
import Notification from 'Component/Notification';

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
