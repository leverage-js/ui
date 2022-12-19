import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
    return <div className="demo-page">
        <ul>
            <li>
                Button
                <ul>
                    <li>
                        <Link to="/button/large/primary">
                            Primary Large
                        </Link>
                    </li>
                    <li>
                        <Link to="/button/large/primary-scalable">
                            Primary Scalable
                        </Link>
                    </li>
                    <li>
                        <Link to="/button/large/secondary">
                            Secondary Large
                        </Link>
                    </li>
                    <li>
                        <Link to="/button/large/secondary-scalable">
                            Secondary Scalable
                        </Link>
                    </li>
                    <li>
                        <Link to="/button/small/primary">
                            Primary Small
                        </Link>
                    </li>
                    <li>
                        <Link to="/button/small/secondary">
                            Secondary Small
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                Card
                <ul>
                    <li>
                        <Link to="/card/content">
                            Content
                        </Link>
                    </li>
                    <li>
                        <Link to="/card/empty-state">
                            Empty State
                        </Link>
                    </li>
                    <li>
                        <Link to="/card/error/404">
                            Error 404
                        </Link>
                    </li>
                    <li>
                        <Link to="/card/error/500">
                            Error 500
                        </Link>
                    </li>
                    <li>
                        <Link to="/card/small">
                            Small
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/color-picker">
                    Color Picker
                </Link>
            </li>
            <li>
                Dropdown
                <ul>
                    <li>
                        <Link to="/dropdown/fixed">
                            Fixed
                        </Link>
                    </li>
                    <li>
                        <Link to="/dropdown/searchable">
                            Searchable
                        </Link>

                        <ul>
                            <li>
                                <Link to="/dropdown/searchable/in-page-middle">
                                    In the page's middle
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/dropdown/simple">
                            Simple
                        </Link>

                        <ul>
                            <li>
                                <Link to="/dropdown/simple/in-page-middle">
                                    In the page's middle
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/icons">Icons</Link>
                <ul>
                    <li><Link to="/icons/small">Small</Link></li>
                    <li><Link to="/icons/medium">Medium</Link></li>
                    <li><Link to="/icons/large">Large</Link></li>
                </ul>
            </li>
            <li>
                Icon Button
                <ul>
                    <li>
                        <Link to="/icon-button/large/primary">
                            Large Primary
                        </Link>
                    </li>
                    <li>
                        <Link to="/icon-button/large/secondary">
                            Large Secondary
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/image-preview">
                    Image Preview
                </Link>
            </li>
            <li>
                Input
                <ul>
                    <li>
                        <Link to="/input/color-picker">
                            Color Picker
                        </Link>

                        <ul>
                            <li>
                                <Link to="/input/color-picker/in-page-middle">
                                    In the page's middle
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/input/file">
                            File
                        </Link>
                    </li>
                    <li>
                        <Link to="/input/number">
                            Number
                        </Link>
                    </li>
                    <li>
                        <Link to="/input/password">
                            Password
                        </Link>
                    </li>
                    <li>
                        Search
                        <ul>
                            <li>
                                <Link to="/input/search/fixed-width">
                                    Fixed-Width
                                </Link>
                            </li>
                            <li>
                                <Link to="/input/search/scalable">
                                    Scalable
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/input/simple">
                            Simple
                        </Link>
                    </li>
                    <li>
                        <Link to="/input/textarea">
                            Textarea
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/modal">
                    Modal
                </Link>
                <ul>
                    <li>
                        <Link to="/modal/confirm">
                            Confirmation Modal
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/note">
                    Note
                </Link>
            </li>
            <li>
                Notification
                <ul>
                    <li>
                        <Link to="/notification/success">
                            Confirmation Box
                        </Link>
                    </li>
                    <li>
                        <Link to="/notification/error">
                            Warning Box
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/request-overlay">
                    Request Overlay
                </Link>
            </li>
            <li>
                <Link to="/spinner">
                    Spinner
                </Link>
            </li>
            <li>
                <Link to="/switch">
                    Switch
                </Link>
            </li>
            <li>
                <Link to="/table">
                    Table
                </Link>
            </li>
            <li>
                <Link to="/toggle">
                    Toggle
                </Link>
            </li>
            <li>
                <Link to="/tooltip">
                    Tooltip
                </Link>
            </li>
        </ul>
    </div>;
}
