import React, {useState} from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import Textarea from 'Component/Input/Textarea';

import '../Input.scss';

export default function (props) {
    const [empty, setEmpty] = useState('');
    const [matteo, setMatteo] = useState('Matteo');
    const [error, setError] = useState('Error');

    function onEmptyChange(value) {
        setEmpty(value);
    }

    function onMatteoChange(value) {
        setMatteo(value);
    }

    function onErrorChange(value) {
        setError(value);
    }

    return (
        <DemoPage name="Large Input Box" ticket="UI-35">
            <inputs-wrapper>
                <Textarea onChange={onEmptyChange} placeholder="Enter Caption" value={empty} />
                <Textarea onChange={onMatteoChange} value={matteo} />
                <Textarea disabled value="Disabled" />
                <Textarea error onChange={onErrorChange} value={error} />
            </inputs-wrapper>
        </DemoPage>
    );
}
