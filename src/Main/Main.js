import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import UserSettings from './Pages/UserSettings/userSettings';
import FriendSettings from './Pages/FriendSettings/friendSettings';
import GroupSettings from './Pages/GroupSettings/groupSettings';
import classes from './main.module.css';

class Main extends Component {
    render() {
        return (
            <div className={`${classes.main} ${classes.scrollable} ${classes.noScrollbars}`}>
                <Routes>
                    <Route exact path="/" element={ <Home /> } />
                    <Route path="/userSettings" element={ <UserSettings /> } />
                    <Route path="/friendSettings" element={ <FriendSettings /> } />
                    <Route path="/groupSettings" element={ <GroupSettings /> } />
                </Routes>
            </div>
        );
    }
}

export default Main;