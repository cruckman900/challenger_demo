import classes from './Status.module.css';

const Status = (props) => {
    return (
        <div className={classes.statusContainer}>
            <div className={classes.statusLabel}>{props.label}</div>
            <div className={classes.status}>{props.value}</div>
        </div>
    );
}

export default Status;