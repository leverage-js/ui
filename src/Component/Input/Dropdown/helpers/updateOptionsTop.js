import {VERTICAL_CONTENT_MARGIN_SMALL} from 'constants';

import {OPTIONS_POSITION_COVER} from './getOptionsPosition';
import getSpaceAbove from './getSpaceAbove';

export default function ($input, $options, position) {
    if (position !== OPTIONS_POSITION_COVER) {
        $options.style.top = null;
        return;
    }

    const optionsTop = getSpaceAbove($input) - VERTICAL_CONTENT_MARGIN_SMALL;
    $options.style.top = '-' + optionsTop + 'px';
}
