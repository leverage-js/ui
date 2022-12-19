'use strict';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Index from 'index';
import ConfirmationModalPage from 'Modal/Confirmation';
import ColorPickerPage from 'ColorPicker/ColorPicker';
import ColorPickerInputPage from 'Input/ColorPicker/ColorPicker';
import ColorPickerInputInPageMiddlePage from 'Input/ColorPicker/InPageMiddle';
import ConfirmationBoxPage from 'Notification/ConfirmationBox';
import ContentCardPage from 'Card/Content/Content';
import DropdownPage from 'Dropdown/Simple/Simple';
import DropdownInPageMiddlePage from 'Dropdown/Simple/InPageMiddle';
import EmptyStateCardPage from 'Card/EmptyState/EmptyState';
import FileInputPage from 'Input/File/File';
import FixedWidthDropdownPage from 'Dropdown/Fixed/Fixed';
import FixedWidthSearchInputPage from 'Input/Search/FixedWidth';
import IconsPage from 'Icon/Icon';
import IconsSmallPage from 'Icon/Small';
import IconsMediumPage from 'Icon/Medium';
import IconsLargePage from 'Icon/Large';
import ImagePreviewPage from 'ImagePreview/ImagePreview';
import LargePrimaryButtonPage from 'Button/Large/Primary';
import LargePrimaryIconButtonPage from 'IconButton/Large/Primary';
import LargeSecondaryButtonPage from 'Button/Large/Secondary';
import LargeSecondaryIconButtonPage from 'IconButton/Large/Secondary';
import ModalPage from 'Modal/Modal';
import NotePage from 'Note/Note';
import NotFoundError from 'Card/Error/NotFound';
import NumberInputPage from 'Input/Number/Number';
import PasswordInputPage from 'Input/Password';
import PrimaryScalableButtonPage from 'Button/Large/PrimaryScalable';
import RequestOverlayPage from 'RequestOverlay';
import ScalableSearchInputPage from 'Input/Search/Scalable';
import SearchableDropdownPage from 'Dropdown/Searchable/Searchable';
import SearchableDropdownInPageMiddlePage from 'Dropdown/Searchable/InPageMiddle';
import SecondaryScalableButtonPage from 'Button/Large/SecondaryScalable';
import ServerError from 'Card/Error/ServerError';
import SimpleInputPage from 'Input/Simple/Simple';
import SmallCardPage from 'Card/Small/Small';
import SmallPrimaryButtonPage from 'Button/Small/Primary';
import SmallSecondaryButtonPage from 'Button/Small/Secondary';
import Spinner from 'Spinner';
import SwitchPage from 'Switch/Switch';
import Table from 'Table';
import TextareaPage from 'Input/Textarea/Textarea';
import TogglePage from 'Toggle/Toggle';
import TooltipPage from 'Tooltip/Tooltip';
import WarningBoxPage from 'Notification/WarningBox';

import './style.scss';

window.onload = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    root.render(
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/button/large/primary" element={<LargePrimaryButtonPage />} />
                <Route path="/button/large/primary-scalable" element={<PrimaryScalableButtonPage />} />
                <Route path="/button/large/secondary" element={<LargeSecondaryButtonPage />} />
                <Route path="/button/large/secondary-scalable" element={<SecondaryScalableButtonPage />} />
                <Route path="/button/small/primary" element={<SmallPrimaryButtonPage />} />
                <Route path="/button/small/secondary" element={<SmallSecondaryButtonPage />} />
                <Route path="/card/content" element={<ContentCardPage />} />
                <Route path="/card/empty-state" element={<EmptyStateCardPage />} />
                <Route path="/card/error/404" element={<NotFoundError />} />
                <Route path="/card/error/500" element={<ServerError />} />
                <Route path="/card/small" element={<SmallCardPage />} />
                <Route path="/color-picker" element={<ColorPickerPage />} />
                <Route path="/dropdown/fixed" element={<FixedWidthDropdownPage />} />
                <Route path="/dropdown/searchable" element={<SearchableDropdownPage />} />
                <Route path="/dropdown/searchable/in-page-middle" element={<SearchableDropdownInPageMiddlePage />} />
                <Route path="/dropdown/simple" element={<DropdownPage />} />
                <Route path="/dropdown/simple/in-page-middle" element={<DropdownInPageMiddlePage />} />
                <Route path="/icons" element={<IconsPage />} />
                <Route path="/icons/small" element={<IconsSmallPage />} />
                <Route path="/icons/medium" element={<IconsMediumPage />} />
                <Route path="/icons/large" element={<IconsLargePage />} />
                <Route path="/icon-button/large/primary" element={<LargePrimaryIconButtonPage />} />
                <Route path="/icon-button/large/secondary" element={<LargeSecondaryIconButtonPage />} />
                <Route path="/image-preview" element={<ImagePreviewPage />} />
                <Route path="/input/color-picker" element={<ColorPickerInputPage />} />
                <Route path="/input/color-picker/in-page-middle" element={<ColorPickerInputInPageMiddlePage />} />
                <Route path="/input/file" element={<FileInputPage />} />
                <Route path="/input/number" element={<NumberInputPage />} />
                <Route path="/input/password" element={<PasswordInputPage />} />
                <Route path="/input/search/fixed-width" element={<FixedWidthSearchInputPage />} />
                <Route path="/input/search/scalable" element={<ScalableSearchInputPage />} />
                <Route path="/input/simple" element={<SimpleInputPage />} />
                <Route path="/input/textarea" element={<TextareaPage />} />
                <Route path="/modal" element={<ModalPage />} />
                <Route path="/modal/confirm" element={<ConfirmationModalPage />} />
                <Route path="/note" element={<NotePage />} />
                <Route path="/notification/error" element={<WarningBoxPage />} />
                <Route path="/notification/success" element={<ConfirmationBoxPage />} />
                <Route path="/request-overlay" element={<RequestOverlayPage />} />
                <Route path="/spinner" element={<Spinner />} />
                <Route path="/switch" element={<SwitchPage />} />
                <Route path="/table" element={<Table />} />
                <Route path="/toggle" element={<TogglePage />} />
                <Route path="/tooltip" element={<TooltipPage />} />
            </Routes>
        </BrowserRouter>
    );
};
