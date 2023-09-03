import React, { useState, useEffect, useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserPlus, faLocationDot, faUtensils, faTelevision, faRadio, faFootball, faComputer
} from '@fortawesome/free-solid-svg-icons'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import DefaultPage from '../../UI/DefaultPage/DefaultPage'

import AccountInfo from './AccountInfo'
import LocationInfo from './LocationInfo'
import FoodInfo from './FoodInfo'
import MovieInfo from './MovieInfo'
import ComputerInfo from './ComputerInfo'
import MusicInfo from './MusicInfo'
import ActivityInfo from './ActivityInfo'

import AuthContext from '../../store/auth-context'
import classes from './UserSettings.module.css'
import widgetClasses from '../../builders/widget.module.css'

export default function UserSettings (props) {
    const authCtx = useContext(AuthContext)

    const myIcons = {
        userPlus: faUserPlus,
        locationDot: faLocationDot,
        utensils: faUtensils,
        television: faTelevision,
        radio: faRadio,
        football: faFootball,
        computer: faComputer
    }

    const [ageSelected, setAgeSelected] = useState(null)

    const setAgeRange = (value) => {
        setAgeSelected(value)
    }

    const [accountID, setAccountID] = useState(null)

    const setID = (value) => {
        setAccountID(value)
    }

    const [showLocation, setShowLocation] = useState(false)

    useEffect(() => {
        if (ageSelected === 'under18' || ageSelected === null || accountID === null) {
            setShowLocation(false)
            return
        }
        setShowLocation(true)
    }, [ageSelected, accountID])

    useEffect(() => {
        if (authCtx.user) {
            setAccountID(authCtx.userID)
            setAgeRange(authCtx.user.agerange)
        }
    })

    return (
        <div>
            <DefaultPage headerText="User Information">
                <Tabs className={classes.userSettings} selectedTabClassName={widgetClasses.selectedTab}>
                    <TabList className={`${widgetClasses.tabList} ${classes.sticky}`}>
                        <Tab id="tab1" className={widgetClasses.tab}>
                            <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.userPlus} />
                        </Tab>
                        <Tab id="tab3" className={widgetClasses.tab} disabled={!accountID && true}>
                            <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.utensils} />
                        </Tab>
                        <Tab id="tab4" className={widgetClasses.tab} disabled={!accountID && true}>
                            <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.television} />
                        </Tab>
                        <Tab id="tab5" className={widgetClasses.tab} disabled={!accountID && true}>
                            <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.radio} />
                        </Tab>
                        <Tab id="tab6" className={widgetClasses.tab} disabled={!accountID && true}>
                            <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.football} />
                        </Tab>
                        <Tab id="tab7" className={widgetClasses.tab} disabled={!accountID && true}>
                            <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.computer} />
                        </Tab>
                        <Tab id="tab2" className={widgetClasses.tab} disabled={!showLocation && true}>
                            <FontAwesomeIcon className={widgetClasses.tabIcon} icon={myIcons.locationDot} />
                        </Tab>
                    </TabList>

                    <TabPanel id="tabPanel1"><AccountInfo setAgeRange={setAgeRange} setAccountID={setID} /></TabPanel>
                    <TabPanel id="tabPanel3"><FoodInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel4"><MovieInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel5"><MusicInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel6"><ActivityInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel7"><ComputerInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel2"><LocationInfo acctID={accountID} /></TabPanel>
                </Tabs>
            </DefaultPage>
        </div>
    )
}
