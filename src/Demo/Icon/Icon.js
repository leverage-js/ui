import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import FileIcon from 'Component/Icon/Large/FileIcon';

export default function (props) {
    return <DemoPage name="Icons">
        <icons-demo>
            <h2>Using Icons</h2>
            
            <p>Icons are SVGs.  This makes them light weight and easily styled
                using CSS.  They are broken down into 3 sizes small (20x20),
                medium (30x30) and large (70x70).  Each size has a different
                icon set.
            </p>

            <p>Despite being SVGs they are designed to appear the same as any
                other component in our system.  There is no need to add .svg to
                your import and they automatically have targetable classes on
                the root svg element returned.
            </p>

            <h2>Classes</h2>

            <p>Icons automatically have classes "icon" and "name-icon" applied
                to them.  Eg if the icon is FileIcon it will have the
                "file-icon" class on it.  This makes targeting them the same as
                any other component.
            </p>

            <p>Apply classes to the imported svg to use the built in styles.
                There's nothing to import.  These are included once at the root
                of the app so they can be used everywhere.
            </p>

            <p>&lt;FileIcon className="action-icon" /&gt;</p>

            <h3>action</h3>
            <FileIcon className="action-icon" />

            <h3>disabled</h3>
            <FileIcon className="disabled-icon" />

            <h3>light</h3>
            <FileIcon className="light-icon" />

            <h3>positive</h3>
            <FileIcon className="positive-icon" />

            <h3>negative</h3>
            <FileIcon className="negative-icon" />
        </icons-demo>
    </DemoPage>;
}
