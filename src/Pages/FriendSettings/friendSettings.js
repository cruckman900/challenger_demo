import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPersonThroughWindow, faPersonCirclePlus, faPersonCircleQuestion, faPersonCircleCheck
} from '@fortawesome/free-solid-svg-icons'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import DefaultPage from '../../UI/DefaultPage/DefaultPage'

import AddFriends from './AddFriend'
import FriendRequests from './FriendRequests'
import FriendsList from './FriendsList'
import FriendSuggestions from './FriendSuggestions'

import classes from './friendSettings.module.css'
import widgetClasses from '../../builders/widget.module.css'

export default function friendSettings () {
    const myIcons = {
        personThroughWindow: faPersonThroughWindow,
        personPlus: faPersonCirclePlus,
        personQuestion: faPersonCircleQuestion,
        personCheck: faPersonCircleCheck
    }

    return (
        <DefaultPage headerText="People Setup">
            <Tabs className={classes.friendSettings} selectedTabClassName={widgetClasses.selectedTab}>
                <TabList className={`${widgetClasses.tabList} ${classes.sticky}`}>
                    <Tab id="tab1" className={widgetClasses.tab}>
                        <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.personThroughWindow} />
                    </Tab>
                    <Tab id="tab2" className={widgetClasses.tab}>
                        <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.personPlus} />
                    </Tab>
                    <Tab id="tab3" className={widgetClasses.tab}>
                        <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.personQuestion} />
                    </Tab>
                    <Tab id="tab4" className={widgetClasses.tab}>
                        <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.personCheck} />
                    </Tab>
                </TabList>

                <TabPanel id="tabPanel1"><FriendSuggestions /></TabPanel>
                <TabPanel id="tabPanel2"><AddFriends /></TabPanel>
                <TabPanel id="tabPanel3"><FriendRequests /></TabPanel>
                <TabPanel id="tabPanel4"><FriendsList /></TabPanel>
            </Tabs>
        </DefaultPage>
    )
}
