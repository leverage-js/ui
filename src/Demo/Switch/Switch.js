import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import Switch from 'Component/Switch';

export default function (props) {
    const options = (new Map)
        .set('one', 'One')
        .set('two', 'Two')
        .set('three', 'Three')
    ;

    return (
        <DemoPage name="Switch" ticket="UI-36">
            <Switch
                options={options}
                value="one"
            />
        </DemoPage>
    );
}
