import {colord} from 'colord';

import isHex from './isHex';

export default function hexFormat(color) {
    return isHex(color)
        ? color
        : colord(color).toHex()
    ;
}