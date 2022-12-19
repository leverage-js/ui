export default function (ref, onSuccess, onError) {
    const $element = ref.current;

    try {
        const disabled = !!$element.disabled;

        $element.disabled = false;
        $element.focus();
        $element.select();

        document.execCommand('copy');
        onSuccess();

        $element.setSelectionRange(0, 0);
        $element.blur();
        $element.disabled = disabled;
    } catch (error) {
        onError();
    }
}
