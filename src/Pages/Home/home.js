import React, { Fragment, useContext, useState, useEffect } from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import Note from "../../UI/Note/Note";
import AuthContext from "../../store/auth-context";
import NavContext from "../../store/nav-context";

export default function Home() {
    const authCtx = useContext(AuthContext);
    const navCtx = useContext(NavContext);

    const [headerText, setHeaderText] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!authCtx.isLoggedIn) {
            setHeaderText("Welcome Home!");
            setMessage({
                noteType: 'info',
                headerText: 'Many parts of this site move.',
                messageText: `If you are on a phone, for instance, the icon bar to the left scrolls up and down, as well as items that 
                will appear in this area and in the right column.  There are collapsable/expandable items such as those in the right column.`
            });

            return;
        }
        if (!navCtx.channelLocation) {
            setHeaderText("What do you want to do next?");
            setMessage({
                noteType: 'info',
                headerText: 'Communities, Groups, and People',
                messageText: `The list on the right is kind of in reverse, but if you don't have anyone or anywhere set up to talk to, the icon bar to the 
                left should get you started.  Otherwise, jump on in on some conversation!  The idea is to take your conversations to communities, but groups and 
                friends are really nice too!`
            });

            return;
        }
        if (navCtx.channelLocation.navTitle || navCtx.channelLocation.navName) {
            setHeaderText(`Chatting With ${navCtx.channelLocation.navTitle ? navCtx.channelLocation.navTitle : navCtx.channelLocation.navName}`);
            setMessage(null);

            return;
        } else {
            setHeaderText(`Idling...`);
            setMessage({
                noteType: 'warning',
                headerText: `You haven't selected a conversation to get engaged with!`,
                messageText: `It's never too late to start up a conversation... but it could very well be too early!`
            });

            return
       }
    }, [authCtx.isLoggedIn, navCtx.channelLocation]);

    return (
        <Fragment>
            <DefaultPage headerText={headerText}>
                {!authCtx.isLoggedIn && (
                    <Fragment>
                        <div>
                            This place is for communities to be created and joined by all that wish to be welcomed in.  You can join communities, create a friend's group,
                            or talk individually with friends that you make, all in one spot!  In the future, if I can fund it, I would like to incorporate audio capabilities
                            so that your encounters are a little more personal than reading text on a screen.
                        </div>
                    </Fragment>
                )}
                {message && <Note noteType={message.noteType} headerText={message.headerText}>{message.messageText}</Note>}
            </DefaultPage>
        </Fragment>
    );
}