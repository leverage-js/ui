import React, {useRef, useState} from 'react';

import useClickOutside from 'Hook/useClickOutside';

import './Tooltip.scss';

export default function Tooltip({
    children,
    position,
    text,
}) {
    const DEFAULT_POSITION = 'top';

    const [active, setActive] = useState(false);

    const ref = useRef();

    useClickOutside(ref, onClickOutside);

    function onClickOutside() {
        // Nice for disabled elements that don't have proper onMouseLeave events.
        setActive(false);
    }

    function onMouseEnter() {
        setActive(!!text);
    }

    function onMouseLeave() {
        setActive(false);
    }

    const positionClass = 'tooltip-' + (position ?? DEFAULT_POSITION);
    const tooltip = <tooltip-text class={positionClass}>
        {text}
    </tooltip-text>;

    return <tooltip-component
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
    >
        {children}
        {active && tooltip}
    </tooltip-component>;
}
