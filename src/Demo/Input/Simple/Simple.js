import React, {useState} from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import SimpleInput from 'Component/Input/Simple';

import '../Input.scss';

export default function (props) {
    const [matteo, setMatteo] = useState('Matteo');
    const [error, setError] = useState('Error');

    function onMatteoChange(value) {
        setMatteo(value);
    }

    function onErrorChange(value) {
        setError(value);
    }

    return (
        <DemoPage name="Text Input" ticket="UI-9">
            <inputs-wrapper>
                <SimpleInput placeholder="Enter Name" />
                <SimpleInput onChange={onMatteoChange} value={matteo} />
                <SimpleInput value="Disabled" disabled />
                <SimpleInput onChange={onErrorChange} value={error} error />
            </inputs-wrapper>
        </DemoPage>
    );
}
