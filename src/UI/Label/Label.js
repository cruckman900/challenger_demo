import classes from './Label.module.css';

export default function Label(props) {
    return (
        <label className={`${classes.label} ${props.className}`} htmlFor={props.htmlFor}>{props.text}</label>
    );
}