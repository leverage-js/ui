import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import ConfirmationIcon from 'Component/Icon/Small/ConfirmationIcon.svg';
import ContentCard from 'Component/Card/Content';
import ErrorIcon from 'Component/Icon/Small/ErrorIcon.svg';
import PrimaryButton from 'Component/Button/Primary';
import Table from 'Component/Table';

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
