import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {Note} from '@leverage-js/ui';

import './Note.scss';

export default function (props) {
    return (
        <DemoPage name="Note" ticket="UI-21">
            <note-wrapper>
                <Note>
                    Here, you can configure options which affect for all pages on your account.
                    If you’ve configured settings at a domain level, they will be copied here.
                </Note>
            </note-wrapper>
        </DemoPage>
    );
}
