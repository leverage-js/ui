import {VERTICAL_CONTENT_MARGIN_SMALL} from 'constants';

import canExpandDown from './canExpandDown';
import canExpandUp from './canExpandUp';

const OPTIONS_POSITION_BOTTOM = 'bottom';
export const OPTIONS_POSITION_COVER = 'cover';
const OPTIONS_POSITION_TOP = 'top';

export const OPTIONS_POSITION_DEFAULT = OPTIONS_POSITION_BOTTOM;

export default function ($input, $options) {
    const optionsSpace = getOptionsSpace($options);

    if (canExpandDown($input, optionsSpace)) {
        return OPTIONS_POSITION_BOTTOM;
    }

    if (canExpandUp($input, optionsSpace)) {
        return OPTIONS_POSITION_TOP;
    }

    return OPTIONS_POSITION_COVER;
}

function getOptionsSpace($options) {
    return $options.getBoundingClientRect().height + (2 * VERTICAL_CONTENT_MARGIN_SMALL);
}
