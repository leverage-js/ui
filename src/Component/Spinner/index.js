import React from 'react';
import PropTypes from 'prop-types';

import SmallSpinner from './SmallSpinner';

import './style.scss';

const propTypes = {
    size: PropTypes.oneOf([
        'small',
    ]).isRequired,
};

export default function Spinner({size}) {
    switch (size) {
        case 'small':
            return <SmallSpinner className="spinner" />;
    }
}

Spinner.propTypes = propTypes;
