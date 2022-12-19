import React, {useEffect, useState} from 'react';

import './Switch.scss';

export default function Switch(props) {
    const [value, setValue] = useState(props.value);

    useEffect(
        () => setValue(props.value),
        [props.value]
    );

    function onChange(value) {
        return () => {
            setValue(value);
            props.onChange(value);
        };
    }

    const options = Array.from(props.options).map(
        ([optionValue, optionLabel]) => <switch-option
            class={value === optionValue ? 'switch-option-selected' : ''}
            key={optionValue}
            onClick={onChange(optionValue)}
        >
            {optionLabel}
        </switch-option>
    );

    return <switch-component>
        {options}
    </switch-component>;
}
