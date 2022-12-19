import {useEffect} from 'react';

export default function (ref, onClickOutside) {
    useEffect(() => {
        document.addEventListener('click', onClick, true);

        return () => {
            document.removeEventListener('click', onClick, true);
        };
    }, [ref]);

    function onClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside();
        }
    }
};
