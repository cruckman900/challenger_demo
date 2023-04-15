import classes from './Label.module.css';

export default function Label(props) {
    return (
        <span className={`${classes.label} ${props.className}`}>{props.text}</span>
    );
}