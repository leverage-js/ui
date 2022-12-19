import React, {useEffect, useState} from 'react';

import DeleteIcon from 'Component/Icon/Small/DeleteIcon';
import UploadIcon from 'Component/Icon/Small/UploadIcon';

import './File.scss';

export default function FileInput(props) {
    const PLACEHOLDER = 'Choose File';

    const [filename, setFilename] = useState('');

    useEffect(() => {
        setFilename(props.filename ?? '');
    }, [props.filename]);

    function onDelete(event) {
        setFilename('');
        props.onDelete();
    }

    function onUpload(event) {
        const $fileInput = document.createElement('input');
        $fileInput.type = 'file';
        $fileInput.accept = props.accept ?? '*';
        $fileInput.onchange = event => {
            const file = event.target.files[0];
            setFilename(file.name);
            props.onChange(file);
        };
        $fileInput.click();
    }

    const classes = [
        'input',
        'file-input',
    ];
    if (props.error) {
        classes.push('input-error');
    }

    const canBeDeleted = filename.length;
    const deleteButton = <button-wrapper onClick={onDelete}>
        <DeleteIcon className="action-icon" />
    </button-wrapper>;
    const editableFileInput = <>
        <input
            className={classes.join(' ')}
            onClick={onUpload}
            placeholder={PLACEHOLDER}
            readOnly
            value={filename}
        />

        <actions-wrapper>
            {canBeDeleted ? deleteButton : null}
            <button-wrapper onClick={onUpload}>
                <UploadIcon className="action-icon" />
            </button-wrapper>
        </actions-wrapper>
    </>;
    const disabledFileInput = <>
        <input
            className="input file-input"
            placeholder={PLACEHOLDER}
            defaultValue={filename}
            disabled
        />

        <actions-wrapper>
            {canBeDeleted && <DeleteIcon className="disabled-icon" />}
            <UploadIcon className="disabled-icon" />
        </actions-wrapper>
    </>;
    const fileInput = !props.disabled ? editableFileInput : disabledFileInput;

    return <file-input-wrapper>
        {fileInput}
    </file-input-wrapper>;
}
