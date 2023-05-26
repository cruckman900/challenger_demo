import classes from './Status.module.css';

const Status = (props) => {
    console.log(props.className);
    return (
        <div className={`${classes.statusContainer} ${props.className}`}>
            <div className={classes.statusLabel}>{props.label}</div>
            <div className={classes.status}>{props.value}</div>
        </div>
    );
}

export default Status;