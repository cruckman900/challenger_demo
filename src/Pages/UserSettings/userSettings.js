import React, { Fragment, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUserPlus, faLocationDot, faUtensils, faTelevision, faRadio, faFootball, faComputer
} from '@fortawesome/free-solid-svg-icons';

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import DefaultPage from '../../UI/DefaultPage/DefaultPage';

import AccountInfo from "./AccountInfo";
import LocationInfo from "./LocationInfo";
import FoodInfo from "./FoodInfo";
import MovieInfo from "./MovieInfo";
import ComputerInfo from "./ComputerInfo";
import MusicInfo from "./MusicInfo";
import ActivityInfo from "./ActivityInfo";

import classes from './userSettings.module.css';

export default function UserSettings(props) {
    const myIcons = {
        userPlus: faUserPlus,
        locationDot: faLocationDot,
        utensils: faUtensils,
        television: faTelevision,
        radio: faRadio,
        football: faFootball,
        computer: faComputer,
    };

    const [ageSelected, setAgeSelected] = useState(null);

    const setAgeRange = (value) => {
        setAgeSelected(value);
    };

    const [accountID, setAccountID] = useState(null);

    const setID = (value) => {
        setAccountID(value);
    }

    const [showLocation, setShowLocation] = useState(false);

    useEffect(() => {
        if(ageSelected === 'under18' || ageSelected === null || accountID === null) {
            setShowLocation(false);
            return;
        }
        setShowLocation(true);
    }, [ageSelected, accountID]);

    return (
        <Fragment>
            <DefaultPage headerText="User Information">
                <Tabs selectedTabClassName={classes.selectedTab}>
                    <TabList className={classes.tabList}>
                        <Tab id="tab1" className={classes.tab}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['userPlus']} /></Tab>
                        <Tab id="tab2" className={classes.tab} disabled={!showLocation && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['locationDot']} /></Tab>
                        <Tab id="tab3" className={classes.tab} disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['utensils']} /></Tab>
                        <Tab id="tab4" className={classes.tab} disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['television']} /></Tab>
                        <Tab id="tab5" className={classes.tab} disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['radio']} /></Tab>
                        <Tab id="tab6" className={classes.tab} disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['football']} /></Tab>
                        <Tab id="tab7" className={classes.tab} disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['computer']} /></Tab>
                    </TabList>

                    <TabPanel id="tabPanel1"><AccountInfo setAgeRange={setAgeRange} setAccountID={setID} /></TabPanel>
                    <TabPanel id="tabPanel2"><LocationInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel3"><FoodInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel4"><MovieInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel5"><MusicInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel6"><ActivityInfo acctID={accountID} /></TabPanel>
                    <TabPanel id="tabPanel7"><ComputerInfo acctID={accountID} /></TabPanel>
                </Tabs>
            </DefaultPage>
        </Fragment>
    );
}