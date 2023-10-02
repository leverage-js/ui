import hexFormat from './hexFormat';
import rgbFormat from './rgbFormat';

export default function formatColor(color, isRgbFormat) {
    if (isRgbFormat) {
        return rgbFormat(color);
    }

    return hexFormat(color);
}
