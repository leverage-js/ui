import React, {useState} from 'react';

import fonts from 'Demo/Data/fonts';

import DemoPage from 'DemoPage/DemoPage';

import {Dropdown} from '@leverage-js/ui';

import '../Dropdown.scss';

export default function (props) {
    const ERROR_OPTIONS = [
        [1, 'One'],
        [2, 'Two'],
        [3, 'Three'],
    ];

    const [emptyValue, setEmptyValue] = useState(null);
    const [errorValue, setErrorValue] = useState(2);
    const [filledValue, setFilledValue] = useState('Oswald');

    function onEmptyChange(value) {
        setEmptyValue(value);
    }

    function onErrorChange(value) {
        setErrorValue(value);
    }

    function onFilledChange(value) {
        setFilledValue(value);
    }

    return (
        <DemoPage name="Fixed dropdown" ticket="UI-73">
            <demo-dropdowns-wrapper>
                <Dropdown
                    fixed
                    onChange={onEmptyChange}
                    options={fonts}
                    placeholder="Select Font"
                    searchable
                    value={emptyValue}
                />
                <Dropdown
                    fixed
                    onChange={onFilledChange}
                    options={fonts}
                    searchable
                    value={filledValue}
                />
                <Dropdown
                    fixed
                    disabled
                    searchable
                    value="Nunito"
                />
                <Dropdown
                    error
                    fixed
                    onChange={onErrorChange}
                    options={ERROR_OPTIONS}
                    searchable
                    value={errorValue}
                />
            </demo-dropdowns-wrapper>
        </DemoPage>
    );
}
