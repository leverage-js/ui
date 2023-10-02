import {colord} from 'colord';

import isRgb from './isRgb';

export default function rgbFormat(color) {
    return isRgb(color)
        ? color
        : colord(color).toRgbString()
    ;
}

