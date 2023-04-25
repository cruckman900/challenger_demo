import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Donations from './Pages/Donations/donations';
import Suggestions from './Pages/Suggestions/suggestions';
import UserSettings from './Pages/UserSettings/userSettings';
import FriendSettings from './Pages/FriendSettings/friendSettings';
import GroupSettings from './Pages/GroupSettings/groupSettings';
import CommunitySettings from './Pages/CommunitySettings/communitySettings';
import NewFeatures from './Pages/NewFeatures/newFeatures';
import SystemSettings from './Pages/SystemSettings/systemSettings';
import classes from './main.module.css';

class Main extends Component {
    render() {
        return (
            <div className={`${classes.main} ${classes.scrollable} ${classes.noScrollbars}`}>
                <Routes>
                    <Route exact path="/" element={ <Home /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/donations" element={ <Donations /> } />
                    <Route path="/suggestions" element={ <Suggestions /> } />
                    <Route path="/userSettings" element={ <UserSettings /> } />
                    <Route path="/friendSettings" element={ <FriendSettings /> } />
                    <Route path="/groupSettings" element={ <GroupSettings /> } />
                    <Route path="/communitySettings" element={ <CommunitySettings /> } />
                    <Route path="/newFeatures" element={ <NewFeatures /> } />
                    <Route path="/systemSettings" element={ <SystemSettings /> } />
                </Routes>
            </div>
        );
    }
}

export default Main;