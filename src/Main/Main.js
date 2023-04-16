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
            <React.Fragment>
                <div className={`${classes.main} ${classes.scrollable} ${classes.noScrollbars}`}>
                <Routes><Route exact path="/" element={ <Home /> } /></Routes>
                <Routes><Route path="/userSettings" element={ <UserSettings /> } /></Routes>
                <Routes><Route path="/friendSettings" element={ <FriendSettings /> } /></Routes>
                <Routes><Route path="/groupSettings" element={ <GroupSettings /> } /></Routes>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;