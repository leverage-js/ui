import React, {useState} from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {SearchInput} from '@leverage-js/ui';

import '../Input.scss';

export default function (props) {
    const [adventure, setAdventure] = useState('Adventure');
    const [error, setError] = useState('Error');

    function onErrorChange(value) {
        setError(value);
    }

    function onAdventureChange(value) {
        setAdventure(value);
    }

    return (
        <DemoPage name="Search Input - Scalable" ticket="UI-50">
            <inputs-wrapper>
                <SearchInput scalable />
                <SearchInput scalable onChange={onAdventureChange} value={adventure} />
                <SearchInput scalable onChange={onErrorChange} value={error} error />
                <SearchInput scalable value="Disabled" disabled />
            </inputs-wrapper>
        </DemoPage>
    );
}
