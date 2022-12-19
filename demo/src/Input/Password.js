import React, {useState} from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {SimpleInput} from '@leverage-js/ui';

import './Input.scss';

export default function (props) {
    const [empty, setEmpty] = useState('');
    const [error, setError] = useState('Error');
    const [matteo, setMatteo] = useState('Matteo');


    function onEmptyChange(value) {
        setEmpty(value);
    }

    function onErrorChange(value) {
        setError(value);
    }

    function onMatteoChange(value) {
        setMatteo(value);
    }

    return (
        <DemoPage name="Password Input" ticket="UI-74">
            <inputs-wrapper>
                <SimpleInput
                    onChange={onEmptyChange}
                    password
                    placeholder="Enter Password"
                    value={empty}
                />
                <SimpleInput onChange={onMatteoChange} password value={matteo} />
                <SimpleInput disabled password value="Disabled" />
                <SimpleInput
                    error
                    onChange={onErrorChange}
                    password
                    value={error}
                />
            </inputs-wrapper>
        </DemoPage>
    );
}
