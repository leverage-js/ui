import React, {useState} from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {NumberInput} from '@leverage-js/ui';

import '../Input.scss';

export default function (props) {
    const [empty, setEmpty] = useState(null);
    const [error, setError] = useState(456);

    function onEmptyChange(value) {
        setEmpty(value);
    }

    function onErrorChange(value) {
        setError(value);
    }

    return (
        <DemoPage name="Numeric Input" ticket="UI-72">
            <inputs-wrapper>
                <NumberInput
                    onChange={onEmptyChange}
                    min={1}
                    max={10}
                    placeholder="Enter Number (from 1 to 10 step 0.5)"
                    step={0.5}
                    value={empty}
                />

                <NumberInput disabled value={123} />

                <NumberInput
                    error
                    onChange={onErrorChange}
                    value={error}
                />
            </inputs-wrapper>
        </DemoPage>
    );
}
