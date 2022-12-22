import React, {useState} from 'react';

import fonts from 'Data/fonts';

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
        <DemoPage name="Searchable dropdown" ticket="UI-24">
            <demo-dropdowns-wrapper>
                <Dropdown
                    onChange={onEmptyChange}
                    options={fonts}
                    placeholder="Select Font"
                    searchable
                    value={emptyValue}
                />
                <Dropdown
                    onChange={onFilledChange}
                    options={fonts}
                    searchable
                    value={filledValue}
                />
                <Dropdown
                    disabled
                    searchable
                    value="Nunito"
                />
                <Dropdown
                    error
                    onChange={onErrorChange}
                    options={ERROR_OPTIONS}
                    searchable
                    value={errorValue}
                />
            </demo-dropdowns-wrapper>
        </DemoPage>
    );
}
