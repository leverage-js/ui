import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import ArrowRightIcon from 'Component/Icon/Small/ArrowRightIcon';
import BackIcon from 'Component/Icon/Small/BackIcon';
import CheckIcon from 'Component/Icon/Small/CheckIcon';
import ConfirmationIcon from 'Component/Icon/Small/ConfirmationIcon';
import DeleteIcon from 'Component/Icon/Small/DeleteIcon';
import DropdownCloseIcon from 'Component/Icon/Small/DropdownCloseIcon';
import DropdownOpenIcon from 'Component/Icon/Small/DropdownOpenIcon';
import ErrorIcon from 'Component/Icon/Small/ErrorIcon';
import HourglassIcon from 'Component/Icon/Small/HourglassIcon';
import InfoIcon from 'Component/Icon/Small/InfoIcon';
import LockIcon from 'Component/Icon/Small/LockIcon';
import OneDownIcon from 'Component/Icon/Small/OneDownIcon';
import OneUpIcon from 'Component/Icon/Small/OneUpIcon';
import SearchIcon from 'Component/Icon/Small/SearchIcon';
import SplitTestIcon from 'Component/Icon/Small/SplitTestIcon';
import UploadIcon from 'Component/Icon/Small/UploadIcon';

import './Icon.scss';

export default function (props) {
    const icons = [
        ArrowRightIcon,
        BackIcon,
        CheckIcon,
        ConfirmationIcon,
        DeleteIcon,
        DropdownCloseIcon,
        DropdownOpenIcon,
        ErrorIcon,
        HourglassIcon,
        InfoIcon,
        LockIcon,
        OneDownIcon,
        OneUpIcon,
        SearchIcon,
        SplitTestIcon,
        UploadIcon,
    ];

    return <DemoPage name="Small Icons">
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
