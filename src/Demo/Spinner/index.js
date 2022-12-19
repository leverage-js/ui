import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import ContentCard from 'Component/Card/Content';
import Spinner from 'Component/Spinner';
import Table from 'Component/Table';

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
