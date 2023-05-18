import classes from './StatusBar.module.css';

const StatusBar = () => {
    return (
        <div className={classes.statusBar}>
            <div className={classes.statusContainer}>
                <span className={classes.statusLabel}># Comms:</span>
                <span className={classes.status}>0</span>
            </div>
            <div className={classes.statusContainer}>
                <span className={classes.statusLabel}># Users:</span>
                <span className={classes.status}>0</span>
            </div>
            <div className={classes.statusContainer}>
                <span className={classes.statusLabel}># Online:</span>
                <span className={classes.status}>0</span>
            </div>
            <div className={classes.statusContainer}>
                <span className={classes.statusLabel}># New DMs:</span>
                <span className={classes.status}>0</span>
            </div>
            <div className={classes.statusContainer}>
                <span className={classes.statusLabel}># New Mentions:</span>
                <span className={classes.status}>0</span>
            </div>
        </div>
    );
}

export default StatusBar;