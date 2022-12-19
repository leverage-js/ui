import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    MediumDeleteIcon as DeleteIcon,
    MediumEditIcon as EditIcon,
    PrimaryIconButton,
    SecondaryIconButton,
    SmallCard,
    Tooltip,
} from '@leverage-js/ui';

import './Small.scss';

export default function (props) {
    return (
        <DemoPage name="Integration/Template Card" ticket="UI-23">
            <cards-wrapper>
                <SmallCard
                    imageUrl="/img/themes/1/preview.jpg"
                    name="Quiz"
                >
                    <Tooltip text="Edit">
                        <PrimaryIconButton>
                            <EditIcon />
                        </PrimaryIconButton>
                    </Tooltip>
                    <Tooltip text="Delete">
                        <SecondaryIconButton>
                            <DeleteIcon />
                        </SecondaryIconButton>
                    </Tooltip>
                </SmallCard>

                <SmallCard
                    imageUrl="/img/themes/2/preview.jpg"
                    name="Selected Theme with long name"
                    selected
                >
                    <Tooltip text="Edit">
                        <PrimaryIconButton>
                            <EditIcon />
                        </PrimaryIconButton>
                    </Tooltip>
                    <Tooltip text="Delete">
                        <SecondaryIconButton>
                            <DeleteIcon />
                        </SecondaryIconButton>
                    </Tooltip>
                </SmallCard>
            </cards-wrapper>
        </DemoPage>
    );
}
