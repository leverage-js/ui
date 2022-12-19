export default function ($element) {
    return window.scrollY + $element.getBoundingClientRect().top;
}
