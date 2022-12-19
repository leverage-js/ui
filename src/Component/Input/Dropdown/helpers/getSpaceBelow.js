export default function ($element) {
    const bodyHeight = document.body.offsetHeight;
    const pixelsToBottom = window.scrollY + $element.getBoundingClientRect().bottom;

    return bodyHeight - pixelsToBottom;
}
