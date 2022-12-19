import React, { useEffect, useRef } from 'react';

import useNotification from 'Store/useNotification';

import './Notification.scss';

export default function Notification(props) {
    const { notification, clearNotification } = useNotification();

    let hideNotificationTimeout = useRef(null);
    const notificationTimeout = 10000;

    useEffect(() => {
        clearNotification();
        clearTimeout(hideNotificationTimeout.current);
    }, []);

    useEffect(() => {
        if (notification.message.length) {
            clearTimeout(hideNotificationTimeout.current);
            hideNotificationTimeout.current = setTimeout(hideNotification, notificationTimeout);
        }
    }, [notification]);

    function hideNotification() {
        clearNotification();
    }

    const classes = [
        'notification-' + notification.type,
    ];
    classes.push(notification.message.length ? 'notification-show' : 'notification-hide');

    return <notification-component
        class={classes.join(' ')}
    >
        {notification.message}
    </notification-component>;
}
