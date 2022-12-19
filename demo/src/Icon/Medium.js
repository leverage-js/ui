import React from 'react';

import DemoPage from 'DemoPage/DemoPage';

import {
    MediumAccountIcon as AccountIcon,
    MediumAnalyticsCompleteIcon as AnalyticsCompleteIcon,
    MediumAnalyticsLeadsIcon as AnalyticsLeadsIcon,
    MediumAnalyticsUsersIcon as AnalyticsUsersIcon,
    MediumAnalyticsIcon as AnalyticsIcon,
    MediumArrowBackIcon as ArrowBackIcon,
    MediumArrowBottomRightIcon as ArrowBottomRightIcon,
    MediumArrowRightIcon as ArrowRightIcon,
    MediumCalendarIcon as CalendarIcon,
    MediumCaptureFormIcon as CaptureFormIcon,
    MediumCloseIcon as CloseIcon,
    MediumConfigureIcon as ConfigureIcon,
    MediumConfirmIcon as ConfirmIcon,
    MediumDeleteIcon as DeleteIcon,
    MediumDesktopIcon as DesktopIcon,
    MediumDownloadIcon as DownloadIcon,
    MediumDragIcon as DragIcon,
    MediumEditIcon as EditIcon,
    MediumEmailIcon as EmailIcon,
    MediumFlagIcon as FlagIcon,
    MediumFolderOpenIcon as FolderOpenIcon,
    MediumFolderIcon as FolderIcon,
    MediumFunnelDesignerIcon as FunnelDesignerIcon,
    MediumFunnelIcon as FunnelIcon,
    MediumHelpIcon as HelpIcon,
    MediumHourglassIcon as HourglassIcon,
    MediumHtmlFormsIcon as HtmlFormsIcon,
    MediumImageIcon as ImageIcon,
    MediumIntegrationsIcon as IntegrationsIcon,
    MediumKingIcon as KingIcon,
    MediumLogOutIcon as LogOutIcon,
    MediumMenuIcon as MenuIcon,
    MediumMyQuizzesIcon as MyQuizzesIcon,
    MediumOutcomesIcon as OutcomesIcon,
    MediumPercentIcon as PercentIcon,
    MediumPlusIcon as PlusIcon,
    MediumPreviewIcon as PreviewIcon,
    MediumPublishIcon as PublishIcon,
    MediumQuestionIcon as QuestionIcon,
    MediumResponseIcon as ResponseIcon,
    MediumSaveIcon as SaveIcon,
    MediumScriptsIcon as ScriptsIcon,
    MediumSixDayChallengeIcon as SixDayChallengeIcon,
    MediumSplitTestIcon as SplitTestIcon,
    MediumSwitchIcon as SwitchIcon,
    MediumTemplatesIcon as TemplatesIcon,
    MediumVideoIcon as VideoIcon,
    MediumZapierIcon as ZapierIcon,
} from '@leverage-js/ui';

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
