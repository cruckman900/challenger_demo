import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLandmark, faFolderPlus, faListCheck, faGroupArrowsRotate
} from '@fortawesome/free-solid-svg-icons'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import DefaultPage from '../../UI/DefaultPage/DefaultPage'

import classes from './communitySettings.module.css'
import widgetClasses from '../../builders/widget.module.css'

export default function CommunitySettings () {
    const myIcons = {
        landmark: faLandmark,
        folderPlus: faFolderPlus,
        listCheck: faListCheck,
        arrowsRotate: faGroupArrowsRotate
    }

    return (
        <DefaultPage headerText="Community Setup">
            <Tabs className={classes.communitySettings} selectedTabClassName={widgetClasses.selectedTab}>
                <TabList className={`${widgetClasses.tabList} ${classes.sticky}`}>
                    <Tab id="tab1" className={widgetClasses.tab}>
                        <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.landmark} />
                    </Tab>
                    <Tab id="tab2" className={widgetClasses.tab}>
                        <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.folderPlus} />
                    </Tab>
                    <Tab id="tab3" className={widgetClasses.tab}>
                        <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.listCheck} />
                    </Tab>
                    <Tab id="tab4" className={widgetClasses.tab}>
                        <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.arrowsRotate} />
                    </Tab>
                </TabList>

                <TabPanel id="tabPanel1"></TabPanel>
                <TabPanel id="tabPanel2"></TabPanel>
                <TabPanel id="tabPanel3"></TabPanel>
                <TabPanel id="tabPanel4"></TabPanel>
            </Tabs>
        </DefaultPage>
    )
}
