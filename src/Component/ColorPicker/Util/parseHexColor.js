import parseColor, {REGEX_HEX_PATTERN} from './parseColor';

export default function parseHexColor(color) {
    return parseColor(color, REGEX_HEX_PATTERN);
}