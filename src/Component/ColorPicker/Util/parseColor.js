export const REGEX_HEX_PATTERN = /#(([0-9a-fA-F]{2}){3,4})/g;
export const REGEX_RGB_PATTERN = /rgb\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*\)/g;
export const REGEX_RGBA_PATTERN = /rgba\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d)\s*,?\s*([0]\.?\d*?|1)\)/g;

export default function parseColor(color, regexPattern) {
    const match = color.match(regexPattern);
    const isValidColor = match?.length === 1 && match[0] === color;
    return isValidColor
        ? color
        : ''
    ;
}