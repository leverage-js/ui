import React from 'react';
import {useNavigate} from 'react-router-dom';

import BackIcon from 'Component/Icon/Small/BackIcon';

import './Header.scss';

export default function Header(props) {
    const navigate = useNavigate();

    const backIcon = <BackIcon
        className="action-icon"
        onClick={() => navigate(-1)}
    />;
    return <header-component>
        <h1>{props.canNavigateBack && backIcon} {props.title}</h1>
        {props.children && <header-content>{props.children}</header-content>}
    </header-component>;
}
