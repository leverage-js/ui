import React, {useState} from 'react';

import PrimaryButton from 'Component/Button/Primary';

import ConfirmationModal from 'Component/Modal/Confirmation';
import DemoPage from 'Demo/DemoPage/DemoPage';

export default function (props) {
    const [show, setShow] = useState(false);

    function onConfirm() {
        alert('confirmed') ;
        setShow(false);
    }

    function onCancel() {
        alert('not confirmed') ;
        setShow(false);
    }

    const modal = (
        <ConfirmationModal
            title="Demo Confirmation question?"
            description="Optional description here"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );

    return (
        <DemoPage name="Confirmation modal stub" ticket="QUIZ-449">
            <PrimaryButton onClick={() => setShow(true)}>
                Click to confirm
            </PrimaryButton>
            {show && modal}
        </DemoPage>
    );
}
