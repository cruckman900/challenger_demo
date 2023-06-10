/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react'
import Modal from '../../UI/Modal/Modal'
import Card from '../../UI/Card/Card'
import classes from './Agreements.module.css'
import wClasses from '../../builders/widget.module.css'
import Label from '../../UI/Label/Label'
import Button from '../../UI/Button/Button'

const TermsOfUse = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <Card headerText="Terms of Use" isOpened={true}>
                <Label className={classes.header} text="'At Will' Agreement" />
                <div className={classes.terms}>
                    This site is intendended for educational purposes benefitting the parties involved in its'
                    creation.  Your use of this site is declared as 'at will' as you are volunteering to provide information
                    that could fall into the wrong hands by no doing of the creators of the site.  Disclosing your name and location,
                    if you choose to share it is 'at will' and is not mandatory for use of this site.
                </div>
                <Label className={classes.header} text="Transfer of data" />
                <div className={classes.terms}>
                    This site is stand-alone.  There are no third parties involved in the creation of this site, nor is any information
                    obtained from this site distributed in any way to any other softwares - voluntarily.  In the event that data originating
                    from this site is required by law to be given to authorities, then that shall be the case.  There will be safeguards
                    in place to try to prevent the data contained in the site from being hacked or leaked, but there is never a sure-fire way
                    to prevent all catastrophic events.  It is your duty to yourself to be careful what information you post to this site.  If
                    information happens to fall into the wrong hands from some unforeseen event, the creator(s) of this site cannot in any way
                    be held liable.
                </div>
                <hr className={wClasses.br} />
                <Button onClick={props.onClose} value="Close" />
            </Card>
        </Modal>
    )
}

export default TermsOfUse
