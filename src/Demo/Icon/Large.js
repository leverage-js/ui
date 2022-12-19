import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import FileIcon from 'Component/Icon/Large/FileIcon';

import './Icon.scss';

export default function (props) {
    const icons = [
        FileIcon,
    ];

    return <DemoPage name="Large Icons">
        <icons-demo>
            <table>
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {icons.map(Icon => <tr key={Icon.name}>
                        <td><Icon /></td>
                        <td>{Icon.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </icons-demo>
    </DemoPage>;
}
