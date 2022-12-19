import React from 'react';

import DemoPage from 'Demo/DemoPage/DemoPage';

import AccountIcon from 'Component/Icon/Medium/AccountIcon';
import AnalyticsCompleteIcon from 'Component/Icon/Medium/AnalyticsCompleteIcon';
import AnalyticsLeadsIcon from 'Component/Icon/Medium/AnalyticsLeadsIcon';
import AnalyticsUsersIcon from 'Component/Icon/Medium/AnalyticsUsersIcon';
import AnalyticsIcon from 'Component/Icon/Medium/AnalyticsIcon';
import ArrowBackIcon from 'Component/Icon/Medium/ArrowBackIcon';
import ArrowBottomRightIcon from 'Component/Icon/Medium/ArrowBottomRightIcon';
import ArrowRightIcon from 'Component/Icon/Medium/ArrowRightIcon';
import CalendarIcon from 'Component/Icon/Medium/CalendarIcon';
import CaptureFormIcon from 'Component/Icon/Medium/CaptureFormIcon';
import CloseIcon from 'Component/Icon/Medium/CloseIcon';
import ConfigureIcon from 'Component/Icon/Medium/ConfigureIcon';
import ConfirmIcon from 'Component/Icon/Medium/ConfirmIcon';
import DeleteIcon from 'Component/Icon/Medium/DeleteIcon';
import DesktopIcon from 'Component/Icon/Medium/DesktopIcon';
import DownloadIcon from 'Component/Icon/Medium/DownloadIcon';
import DragIcon from 'Component/Icon/Medium/DragIcon';
import EditIcon from 'Component/Icon/Medium/EditIcon';
import EmailIcon from 'Component/Icon/Medium/EmailIcon';
import FlagIcon from 'Component/Icon/Medium/FlagIcon';
import FolderOpenIcon from 'Component/Icon/Medium/FolderOpenIcon';
import FolderIcon from 'Component/Icon/Medium/FolderIcon';
import FunnelDesignerIcon from 'Component/Icon/Medium/FunnelDesignerIcon';
import FunnelIcon from 'Component/Icon/Medium/FunnelIcon';
import HelpIcon from 'Component/Icon/Medium/HelpIcon';
import HourglassIcon from 'Component/Icon/Medium/HourglassIcon';
import HtmlFormsIcon from 'Component/Icon/Medium/HtmlFormsIcon';
import ImageIcon from 'Component/Icon/Medium/ImageIcon';
import IntegrationsIcon from 'Component/Icon/Medium/IntegrationsIcon';
import KingIcon from 'Component/Icon/Medium/KingIcon';
import LogOutIcon from 'Component/Icon/Medium/LogOutIcon';
import MenuIcon from 'Component/Icon/Medium/MenuIcon';
import MyQuizzesIcon from 'Component/Icon/Medium/MyQuizzesIcon';
import OutcomesIcon from 'Component/Icon/Medium/OutcomesIcon';
import PercentIcon from 'Component/Icon/Medium/PercentIcon';
import PlusIcon from 'Component/Icon/Medium/PlusIcon';
import PreviewIcon from 'Component/Icon/Medium/PreviewIcon';
import PublishIcon from 'Component/Icon/Medium/PublishIcon';
import QuestionIcon from 'Component/Icon/Medium/QuestionIcon';
import ResponseIcon from 'Component/Icon/Medium/ResponseIcon';
import SaveIcon from 'Component/Icon/Medium/SaveIcon';
import ScriptsIcon from 'Component/Icon/Medium/ScriptsIcon';
import SixDayChallengeIcon from 'Component/Icon/Medium/SixDayChallengeIcon';
import SplitTestIcon from 'Component/Icon/Medium/SplitTestIcon';
import SwitchIcon from 'Component/Icon/Medium/SwitchIcon';
import TemplatesIcon from 'Component/Icon/Medium/TemplatesIcon';
import VideoIcon from 'Component/Icon/Medium/VideoIcon';
import ZapierIcon from 'Component/Icon/Medium/ZapierIcon';

import './Icon.scss';

export default function (props) {
    const icons = [
        AccountIcon,
        AnalyticsCompleteIcon,
        AnalyticsLeadsIcon,
        AnalyticsUsersIcon,
        AnalyticsIcon,
        ArrowBackIcon,
        ArrowBottomRightIcon,
        ArrowRightIcon,
        CalendarIcon,
        CaptureFormIcon,
        CloseIcon,
        ConfigureIcon,
        ConfirmIcon,
        DeleteIcon,
        DesktopIcon,
        DownloadIcon,
        DragIcon,
        EditIcon,
        EmailIcon,
        FlagIcon,
        FolderOpenIcon,
        FolderIcon,
        FunnelDesignerIcon,
        FunnelIcon,
        HelpIcon,
        HourglassIcon,
        HtmlFormsIcon,
        ImageIcon,
        IntegrationsIcon,
        KingIcon,
        LogOutIcon,
        MenuIcon,
        MyQuizzesIcon,
        OutcomesIcon,
        PercentIcon,
        PlusIcon,
        PreviewIcon,
        PublishIcon,
        QuestionIcon,
        ResponseIcon,
        SaveIcon,
        ScriptsIcon,
        SixDayChallengeIcon,
        SplitTestIcon,
        SwitchIcon,
        TemplatesIcon,
        VideoIcon,
        ZapierIcon,
    ];

    return <DemoPage name="Medium Icons">
        <icons-demo>
            <table>
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {icons.map(Icon => <tr key={Icon.name}>
                        <td><Icon /></td>
                        <td>{Icon.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </icons-demo>
    </DemoPage>;
}
