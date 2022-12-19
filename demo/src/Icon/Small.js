import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    SmallArrowRightIcon as ArrowRightIcon,
    SmallBackIcon as BackIcon,
    SmallCheckIcon as CheckIcon,
    SmallConfirmationIcon as ConfirmationIcon,
    SmallDeleteIcon as DeleteIcon,
    SmallDropdownCloseIcon as DropdownCloseIcon,
    SmallDropdownOpenIcon as DropdownOpenIcon,
    SmallErrorIcon as ErrorIcon,
    SmallHourglassIcon as HourglassIcon,
    SmallInfoIcon as InfoIcon,
    SmallLockIcon as LockIcon,
    SmallOneDownIcon as OneDownIcon,
    SmallOneUpIcon as OneUpIcon,
    SmallSearchIcon as SearchIcon,
    SmallSplitTestIcon as SplitTestIcon,
    SmallUploadIcon as UploadIcon,
} from '@leverage-js/ui';

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
