import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    ContentCard,
    SmallErrorIcon as ErrorIcon,
    PrimaryButton,
    SmallConfirmationIcon as ConfirmationIcon,
    Table,
} from '@leverage-js/ui';

import './style.scss';

export default function (props) {
    return <DemoPage className="table" name="Table">
        <h2>With a header</h2>
        <ContentCard>
            <Table>
                <thead>
                <tr>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td><ConfirmationIcon /></td>
                    <td>ConfirmationIcon</td>
                    <td className="actions-column">
                        <PrimaryButton size="small">
                            Edit
                        </PrimaryButton>
                    </td>
                </tr>
                <tr>
                    <td><ErrorIcon /></td>
                    <td>ErrorIcon</td>
                    <td>
                        <PrimaryButton size="small">
                            Edit
                        </PrimaryButton>
                    </td>
                </tr>
                </tbody>
            </Table>
        </ContentCard>

        <h2>Without a header</h2>
        <ContentCard>
            <Table className="table-without-header">
                <tbody>
                <tr>
                    <td><ConfirmationIcon /></td>
                    <td>ConfirmationIcon</td>
                    <td className="actions-column">
                        <PrimaryButton size="small">
                            Edit
                        </PrimaryButton>
                    </td>
                </tr>
                <tr>
                    <td><ErrorIcon /></td>
                    <td>ErrorIcon</td>
                    <td>
                        <PrimaryButton size="small">
                            Edit
                        </PrimaryButton>
                    </td>
                </tr>
                </tbody>
            </Table>
        </ContentCard>
    </DemoPage>;
}
