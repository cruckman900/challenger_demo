import classes from './Label.module.css';

export default function Label(props) {
    return (
        <label className={`${classes.label} ${props.className}`} for={props.for}>{props.text}</label>
    );
}