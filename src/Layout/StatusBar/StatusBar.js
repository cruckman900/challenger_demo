import { Fragment, useContext } from 'react';
import AuthContext from "../../store/auth-context";
import Status from './Status';
import classes from './StatusBar.module.css';

const StatusBar = () => {
    const ctx = useContext(AuthContext);

    return (
        <div className={classes.statusBar}>
            <Status label="Version" value={process.env.REACT_APP_VERSION} />
            <Status label="# Users" value="0" />
            <Status label="# Online" value="0" />
            {ctx.isLoggedIn && (
                <Fragment>
                    <Status label="# New PMs" value="0" />
                    <Status label="# New CMs" value="0" />
                </Fragment>
            )}
        </div>
    );
}

export default StatusBar;