import React, {useState} from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import SearchInput from 'Component/Input/Search';

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
        <DemoPage name="Search Input - Fixed-Width" ticket="UI-10">
            <inputs-wrapper>
                <SearchInput />
                <SearchInput onChange={onAdventureChange} value={adventure} />
                <SearchInput onChange={onErrorChange} value={error} error />
                <SearchInput value="Disabled" disabled />
            </inputs-wrapper>
        </DemoPage>
    );
}
