import React from 'react';

import PrimaryButton from 'Component/Button/Primary';

import './Small.scss';

export default function SmallCard(props) {
    return <small-card class={props.selected ? 'card-selected' : ''}>
        <card-image-overlay>
            <card-actions>
                {props.children}
            </card-actions>
        </card-image-overlay>
        <card-selected-overlay>
            <badge-wrapper>
                <PrimaryButton size="small">
                    Selected
                </PrimaryButton>
            </badge-wrapper>
        </card-selected-overlay>
        <card-image
            style={{
                backgroundImage: 'url(' + props.imageUrl + ')',
            }}
        >{props.logo}</card-image>
        <card-label-wrapper>
            <card-label>
                {props.name}
            </card-label>
        </card-label-wrapper>
    </small-card>;
}
