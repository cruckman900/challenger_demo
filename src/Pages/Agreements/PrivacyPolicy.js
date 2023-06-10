/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react'
import Modal from '../../UI/Modal/Modal'
import Card from '../../UI/Card/Card'
import Label from '../../UI/Label/Label'
import classes from './Agreements.module.css'
import wClasses from '../../builders/widget.module.css'
import Button from '../../UI/Button/Button'

const PrivacyPolicy = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <Card headerText="Privacy Policy" isOpened={true}>
                <Label className={classes.header} text="General Information" />
                <div className={classes.terms}>
                    All information collected from this site and stored are for operational use only.  Personal information, such as a person's
                    name, location, and interests are collected in order to build a personal profile and for use in Friend and Community suggestions.
                    Email addresses are collected, but they are only used for the sole purpose of account verification and username/password retrieval.
                </div>
                <Label className={classes.header} text="Why is this information collected?" />
                <div className={classes.terms}>
                    Information is collected on this site for the sole purpose of creating an engaging user experience with the site.  Finding friends and
                    joining communities should be a simple process, no matter how you choose to approach them.  This information will never be taken from this
                    website and passed on to another entity for any reason.
                </div>
                <Label className={classes.header} text="Who has access to my information?" />
                <div className={classes.terms}>
                    Any information, other than information that is used soley for account verification and username/password retrieval is visible to others
                    using this site.  As such, the majority of the information that you submit when you register or update your account profile is simply
                    optional.  The site does collect First and Last names of individuals registering for the site, but using this information as a way to
                    display yourself to other users of the site will be optional.  Alternatives to using a real name will be to either use your Username that
                    you register with, or using a Display Name alias.
                </div>
                <Label className={classes.header} text="Be AWARE of you surroundings." />
                <div className={classes.terms}>
                    Although this site doesn't collect and share openly personally identifiable information, choosing to use your real name as your display name
                    and indicating your location in your profile could open yourself up to unwelcomed behavior.  There will be a check in place to choose whether
                    or not you want your location information displayed in your profile.  The software will use this information to pull up suggestions of potential
                    friends with similar interests.  This process will not openly provide your location information if you choose to keep it private, but the suggestion
                    results will indicate some proximity of your location to others.
                </div>
                <Label className={classes.header} text="Due Diligence" />
                <div className={classes.terms}>
                    People in the world that want to bring malice to others are everywhere.  I imagine that some will find their way to this site.  Scams, fraud, phishing,
                    etc., will most likely find its' way to you or someone you know.  Be careful of what information you are willing to provide to others on this site, even
                    if the person or community seems 'OK'.  With the right information in the wrong hands, bad things can happen.
                </div>
                <hr className={wClasses.br} />
                <Button onClick={props.onClose} value="Close" />
            </Card>
        </Modal>
    )
}

export default PrivacyPolicy
