import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import DeleteIcon from 'Component/Icon/Medium/DeleteIcon';
import EditIcon from 'Component/Icon/Medium/EditIcon';
import PrimaryIconButton from 'Component/IconButton/Primary';
import SecondaryIconButton from 'Component/IconButton/Secondary';
import SmallCard from 'Component/Card/Small';
import Tooltip from 'Component/Tooltip';

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
