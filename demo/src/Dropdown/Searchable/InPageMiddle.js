import React, {useState} from 'react';

import fonts from 'Data/fonts';

import {Dropdown} from '@leverage-js/ui';

import '../InPageMiddle.scss';

export default function (props) {
    document.title = 'Searchable (in the page middle)';

    const [value, setValue] = useState('Oswald');

    return <demo-dropdown-in-page-middle>
        <Dropdown
            onChange={setValue}
            options={fonts}
            searchable
            value={value}
        />
    </demo-dropdown-in-page-middle>;
}
