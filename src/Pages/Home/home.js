import React, { Fragment, useContext, useState, useEffect } from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import Note from "../../UI/Note/Note";
import AuthContext from "../../store/auth-context";
import NavContext from "../../store/nav-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import classes from './home.module.css';

export default function Home() {
    const authCtx = useContext(AuthContext);
    const navCtx = useContext(NavContext);

    const [headerText, setHeaderText] = useState('Welcome Home!');
    const [message, setMessage] = useState(null);
    const [chatMessages, setChatMessages] = useState(null);
    
    useEffect(() => {
        // Do something when chatMessages changes.
    }, [chatMessages]);

    // will use loader at some point
    const [hideLoader, setHideLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHideLoader(true);
        }, 2000);
    }, [headerText])

    useEffect(() => {
        if (!authCtx.isLoggedIn) {
            setHeaderText("Welcome Home!");
            setMessage(null);
        }
        if (authCtx.isLoggedIn && headerText !== "What do you want to do next?") {
            setChatMessages("There are no messages here yet.  Be the first!");
        }
        if (!navCtx.channelLocation) {
            setHeaderText("What do you want to do next?");
            setMessage({
                noteType: 'info',
                headerText: 'Communities, Groups, and People',
                messageText: `If you don't have anyone or anywhere set up to talk to, the icon bar to the left should get you started.
                Otherwise, jump on in on some conversation!  The idea is to take your conversations to communities, but groups and 
                friends are really nice too!`
            });
        } else if (navCtx.channelLocation.navTitle || navCtx.channelLocation.navName) {
            setHeaderText(`${navCtx.channelLocation.navTitle ? navCtx.channelLocation.navTitle : navCtx.channelLocation.navName}`);
            setMessage(null);
        } else {
            setHeaderText(`Idling...`);
            setMessage({
                noteType: 'warning',
                headerText: `You haven't selected a conversation to get engaged with!`,
                messageText: `It's never too late to start up a conversation... but it could very well be too early!  Coffee first could be good.`
            });
       }
    }, [authCtx.isLoggedIn, navCtx.channelLocation]);

    return (
        <Fragment>
            <DefaultPage headerText={headerText}>
                {!hideLoader && <div className={classes.goRotate}><FontAwesomeIcon className={classes.iconRotate} icon={faRotate} /></div>}
                {!authCtx.isLoggedIn && (
                    <div>
                        This place is for communities and groups to be created and joined by all that wish to be welcomed in.
                        You can join communities, create a friend's group,
                        or talk individually with friends that you make, all in one spot!
                    </div>
                )}
                {message && <Note noteType={message.noteType} headerText={message.headerText}>{message.messageText}</Note>}
                {authCtx.isLoggedIn && <div>{headerText !== 'Idling...' && <div>{chatMessages}</div>}</div>}
            </DefaultPage>
        </Fragment>
    );
}