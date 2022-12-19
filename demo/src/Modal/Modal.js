import React, {useState} from 'react';

import {
    Modal,
    PrimaryButton,
} from '@leverage-js/ui';

import DemoPage from 'DemoPage/DemoPage';

export default function (props) {
    const [show, setShow] = useState(false);

    const action = <PrimaryButton onClick={() => setShow(false)}>
        Action
    </PrimaryButton>;
    const modal = <Modal
        action={action}
        onCancel={() => setShow(false)}
        title="Demo Modal title"
    >
        <p>Here, you can place any content that you want:</p>
        <ul>
            <li>and something else probably</li>
            <li>and something else probably</li>
            <li>and something else probably</li>
            <li>and something else probably</li>
        </ul>
    </Modal>;

    return <DemoPage name="Modal" ticket="UI-49">
        <PrimaryButton onClick={() => setShow(true)}>
            Open modal
        </PrimaryButton>
        {show && modal}
    </DemoPage>;
}
