import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import ColorPicker from 'Component/ColorPicker';

export default function (props) {
    function alertOnClear() {
        alert('Cleared!');
    }

    function alertOnSelect(color) {
        alert(`Selected ${color}!`);
    }

    return (
        <DemoPage name="Color Picker" ticket="UI-42">
            <ColorPicker
                color="violet"
                onClear={alertOnClear}
                onSelect={alertOnSelect}
            />
        </DemoPage>
    );
}
