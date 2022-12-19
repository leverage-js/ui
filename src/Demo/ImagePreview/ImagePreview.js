import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import ImagePreview from 'Component/ImagePreview';

import './ImagePreview.scss';

export default function (props) {
    return (
        <DemoPage name="Image Preview" ticket="UI-48">
            <demo-image-preview-wrapper>
                <ImagePreview />

                <ImagePreview url="/img/black-puppy.jpg" />
            </demo-image-preview-wrapper>
        </DemoPage>
    );
}
