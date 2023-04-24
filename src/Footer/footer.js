import React from "react";
import classes from './footer.module.css';

export default function footer() {
    return (
        <footer className={classes.footer}>
            &copy;{new Date().getFullYear()} CHATTERBOXSM - CRUCKMAN.COM &mdash; ALL RIGHTS RESERVED
        </footer>
    );
}