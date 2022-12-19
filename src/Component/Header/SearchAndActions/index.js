import React from 'react';

import SearchInput from 'Component/Input/Search';

import './SearchAndActions.scss';

export default function SearchAndActions(props) {
    return <search-and-actions>
        <SearchInput onChange={props.onSearch} />

        <actions-wrapper>{props.children}</actions-wrapper>
    </search-and-actions>;
}
