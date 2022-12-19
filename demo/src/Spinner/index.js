import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    ContentCard,
    Spinner,
    Table,
} from '@leverage-js/ui';

import './style.scss';

export default function (props) {
    return <DemoPage className="spinner-page" name="Spinner">
        <ContentCard>
            <Table className="table-without-header">
                <tbody>
                <tr>
                    <td>
                        <Spinner size="small" />
                    </td>
                    <td>Small</td>
                </tr>
                </tbody>
            </Table>
        </ContentCard>
    </DemoPage>;
}
