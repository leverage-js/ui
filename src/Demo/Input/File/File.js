import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import FileInput from 'Component/Input/File';

import '../Input.scss';

export default function (props) {
    return (
        <DemoPage name="File Input" ticket="UI-20">
            <inputs-wrapper>
                <FileInput
                    onChange={file => {}}
                    onDelete={() => {}}
                />

                <FileInput
                    accept="image/*"
                    filename="logo_img56.jpg"
                    onChange={file => {}}
                    onDelete={() => {}}
                />

                <FileInput disabled/>

                <FileInput
                    error
                    filename="logo_img56.jpg"
                    onChange={file => {}}
                    onDelete={() => {}}
                />
            </inputs-wrapper>
        </DemoPage>
    );
}
