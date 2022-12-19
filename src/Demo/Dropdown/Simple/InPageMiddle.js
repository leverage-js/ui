import React, {useState} from 'react';

import fonts from 'Demo/Data/fonts';

import Dropdown from 'Component/Input/Dropdown';

import '../InPageMiddle.scss';

export default function (props) {
    document.title = 'Simple (in the page middle)';

    const [value, setValue] = useState('Oswald');

    return <demo-dropdown-in-page-middle>
        <Dropdown
            onChange={setValue}
            options={fonts}
            value={value}
        />
    </demo-dropdown-in-page-middle>;
}
