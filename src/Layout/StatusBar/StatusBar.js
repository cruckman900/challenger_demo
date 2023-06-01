import { Fragment, useContext } from 'react';
import AuthContext from "../../store/auth-context";
import Status from './Status';
import classes from './StatusBar.module.css';

const StatusBar = () => {
    const authCtx = useContext(AuthContext);

    return (
        <div className={classes.statusBar}>
            <Fragment>
                <Status className={authCtx.isLoggedIn && classes.statusHideIfTiny} label="Vers" value={process.env.REACT_APP_VERSION} />
                <Status className={authCtx.isLoggedIn && classes.statusHideIfTiny} label="Usrs" value="0" />
                <Status className={authCtx.isLoggedIn && classes.statusHideIfTiny} label="# On" value="0" />
            </Fragment>
            {authCtx.isLoggedIn && (
                <Fragment>
                    <Status label="PMs" value="0" />
                    <Status label="CMs" value="0" />
                </Fragment>
            )}
        </div>
    );
}

export default StatusBar;