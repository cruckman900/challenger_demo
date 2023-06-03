import { Fragment, useState, useEffect, useContext } from 'react';
import AuthContext from "../../store/auth-context";
import Status from './Status';
import { getCountUsers } from '../../AsyncDataCaller/AsyncDataCaller';
import classes from './StatusBar.module.css';

const StatusBar = () => {
    const authCtx = useContext(AuthContext);
    const [numUsers, setNumUsers] = useState(null);

    useEffect(() => {
        getCountUsers()
            .then((result) => {
                const count = result.data[0].user_count;
                setNumUsers(count);
            })
            .catch((err) => {
                console.log('StatusBar.js getUserCount err', err);
            });
    }, []);

    return (
        <div className={classes.statusBar}>
            <Fragment>
                <Status className={authCtx.isLoggedIn && classes.statusHideIfTiny} label="Vers" value={process.env.REACT_APP_VERSION} />
                <Status className={authCtx.isLoggedIn && classes.statusHideIfTiny} label="Usrs" value={numUsers} />
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