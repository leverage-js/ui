import create from 'zustand';

const ERROR_DEFAULT =
    'Something went wrong. Please try again in a few minutes, '
    + "and if it still doesn't work, contact support@quizitri.com."
;

export default create(set => ({
    notification: {
        message: '',
        type: '',
    },

    clearNotification: () => set(
        () => ({
            notification: {
                message: '',
            },
        })
    ),
    errorNotification: message => set(
        () => ({
            notification: {
                message: message ?? ERROR_DEFAULT,
                type: 'error',
            },
        })
    ),
    successNotification: message => set(
        () => ({
            notification: {
                message,
                type: 'success',
            },
        })
    ),
}));
