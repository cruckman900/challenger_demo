import React, { useState } from "react";
import PrivacyPolicy from "../../Pages/Agreements/PrivacyPolicy";
import TermsOfUse from "../../Pages/Agreements/TermsOfUse";
import Button from "../../UI/Button/Button";
import classes from './footer.module.css';

export default function Footer() {
    const [privacyIsShown, setPrivacyIsShown] = useState(false);
    const [termsIsShown, setTermsIsShown] = useState(false);

    const showPrivacyHandler = () => {
        setPrivacyIsShown(true);
    }

    const hidePrivacyHandler = () => {
        setPrivacyIsShown(false);
    }

    const showTermsHandler = () => {
        setTermsIsShown(true);
    }

    const hideTermsHandler = () => {
        setTermsIsShown(false);
    }

    return (
        <footer className={classes.footer}>
            &copy;{new Date().getFullYear()} CHATTERBOXSM &mdash; ALL RIGHTS RESERVED &nbsp;
            <span className={classes.terms}>
                <Button className={classes.link} href="#" onClick={showPrivacyHandler} value="PRIVACY POLICY" />
                &nbsp;AND&nbsp;
                <Button className={classes.link} href="#" onClick={showTermsHandler} value="TERMS OF USE" />
                .
            </span>
            {privacyIsShown && <PrivacyPolicy onClose={hidePrivacyHandler} />}
            {termsIsShown && <TermsOfUse onClose={hideTermsHandler} />}
        </footer>
    );
}