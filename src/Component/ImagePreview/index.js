import React, {useLayoutEffect, useRef, useState} from 'react';

import ImageIcon from 'Component/Icon/Large/ImageIcon';

import './ImagePreview.scss';

export default function ImagePreview({url}) {
    const [height, setHeight] = useState(150);

    const ref = useRef();

    useLayoutEffect(
        () => {
            const resizeObserver = new ResizeObserver(onResize);
            resizeObserver.observe(ref.current);

            return () => {
                resizeObserver.unobserve(ref.current);
            };
        },
        []
    );

    function onResize() {
        setHeight(ref.current.offsetWidth / 2);
    }

    const image = <img src={url} />;
    const imagePlaceholder = <image-placeholder>
        <ImageIcon />
    </image-placeholder>;

    return <image-preview
        ref={ref}
        style={{
            height,
        }}
    >
        {url && image}

        {!url && imagePlaceholder}
    </image-preview>;
}
