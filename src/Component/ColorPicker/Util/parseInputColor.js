import parseHexColor from './parseHexColor';
import parseRgbColor from './parseRgbColor';

export default function parseInputColor(color, isRgbFormat) {
    return isRgbFormat
        ? parseRgbColor(color)
        : parseHexColor(color)
    ;
}