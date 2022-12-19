import getSpaceBelow from './getSpaceBelow';

export default function ($element, pixelsToDisplayOptions) {
    const bottomSpace = getSpaceBelow($element);
    return bottomSpace >= pixelsToDisplayOptions;
}
