import React, {useState} from 'react';

import {ColorPickerInput} from '@leverage-js/ui';

import 'Dropdown/InPageMiddle.scss';

export default function (props) {
    document.title = 'Color Picker Input (in the page middle)';

    const [color, setColor] = useState('green');

    return <demo-dropdown-in-page-middle>
        <ColorPickerInput
            color={color}
            onChange={setColor}
        />
    </demo-dropdown-in-page-middle>;
}
