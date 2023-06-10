import React from 'react'
import classes from './header.module.css'

export default function header () {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <span className={classes.headerText}>
                    <a href="https://cruckman.com" alt="cruckman.com" target="_blank" rel="noreferrer">By <i>CRUCKMAN</i></a>
                </span>
            </div>
        </React.Fragment>
    )
}
