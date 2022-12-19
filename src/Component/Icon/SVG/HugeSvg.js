import React from 'react';

import './Svg.scss';

export default function ({icon}) {
    const icons = {
        'image': <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 48.7931L19.4696 36.7472C22.1548 33.3314 27.2915 33.2197 30.1228 36.5155L30.625 37.1002M38.4483 46.2069L30.625 37.1002M59.1379 35.8621L50.8124 26.1706C47.9872 22.8821 42.8672 22.9861 40.1769 26.3799L30.625 37.1002M16.8966 60H53.1034C56.9124 60 60 56.9124 60 53.1034V16.8966C60 13.0877 56.9124 10 53.1034 10H16.8966C13.0877 10 10 13.0877 10 16.8966V53.1034C10 56.9124 13.0877 60 16.8966 60Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        'spinner': <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="50" height="50" rx="25" stroke="#F4F4F6" strokeWidth="3"/>
            <path d="M60 35C60 21.1929 48.8071 10 35 10C21.1929 10 10 21.1929 10 35C10 48.8071 21.1929 60 35 60" stroke="#19ADF9" strokeWidth="3"/>
        </svg>,
    };

    return <icon-svg>
        {icons[icon]}
    </icon-svg>;
}
