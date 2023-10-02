import parseColor, {REGEX_RGB_PATTERN, REGEX_RGBA_PATTERN} from './parseColor';

export default function parseRgbColor(color) {
    const result = parseColor(color, REGEX_RGB_PATTERN)
    return result
        ? result
        : parseColor(color, REGEX_RGBA_PATTERN)
    ;
}