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
                    <Routes>
                        <Route exact path="/" element={ <Home /> } />
                        <Route path="/UserSettings/userSettings" element={ <UserSettings /> } />
                        <Route path="/FriendSettings/friendSettings" element={ <FriendSettings /> } />
                        <Route path="/GroupSettings/groupSettings" element={ <GroupSettings /> } />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;