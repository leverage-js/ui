import React from 'react';

import Modal from 'Component/Modal';
import Note from 'Component/Note';
import PrimaryButton from 'Component/Button/Primary';

export default function ConfirmationModal({
    confirmName,
    description,
    onCancel,
    onConfirm,
    title,
    warning,
}) {
    const DEFAULT_CONFIRM_NAME = 'OK';
    const DEFAULT_TITLE = 'Are you sure?';

    const descriptionNote = <Note>{description}</Note>;

    const action = <PrimaryButton
        onClick={onConfirm}
        warning={warning}
    >
        {confirmName ?? DEFAULT_CONFIRM_NAME}
    </PrimaryButton>;

    return <confirmation-modal-component>
        <Modal
           action={action}
           onCancel={onCancel}
           title={title ?? DEFAULT_TITLE}
        >
            {description && descriptionNote}
        </Modal>
    </confirmation-modal-component>;
}
