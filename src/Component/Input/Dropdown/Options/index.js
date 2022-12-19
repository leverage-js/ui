import React, {useEffect, useState} from 'react';

import {NullOption} from '../Option';

import SearchInput from 'Component/Input/Search';

import './Options.scss';

export default function DropdownOptions(props) {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [selectedOption, setSelectedOption] = useState(new NullOption);

    useEffect(
        () => {
            setSelectedOption(props.value ? props.value : new NullOption);
        },
        [props.value]
    );

    function onSearch(searchPhrase) {
        setSearchPhrase(searchPhrase);
    }

    let options = props.options
        .filter(option => {
            const lowerCaseValue = option.value.toLowerCase();
            const lowerCaseSearchPhrase = searchPhrase.toLowerCase();
            return lowerCaseValue.includes(lowerCaseSearchPhrase);
        })
        .map(
            option => {
                const classes = [];
                if (selectedOption.isEqual(option)) {
                    classes.push('option-selected');
                }
                return <option-component
                    class={classes.join(' ')}
                    key={option.key}
                    onClick={() => props.onOptionClick(option)}
                >
                    {option.value}
                </option-component>;
            }
        )
    ;
    if (!options.length) {
        options = <option-component class="options-no-results">
            No Results
        </option-component>;
    }
    const searchInput = <search-input-wrapper>
        <SearchInput
            onChange={onSearch}
            scalable
            value={searchPhrase}
        />
    </search-input-wrapper>;
    return <options-component>
        {props.searchable ? searchInput : null}

        <options-container>
            {options}
        </options-container>
    </options-component>;
}
