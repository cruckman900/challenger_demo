import React, { Fragment } from "react";
import DefaultPage from "../../../UI/DefaultPage/DefaultPage";
import Card from "../../../UI/Card/Card";
import BodyHeader from "../../../UI/BodyHeader/BodyHeader";
import classes from './home.module.css';

export default function home() {
    return (
        <Fragment>
            <DefaultPage headerText="Welcome Home!">
                <div>
                    This place is for communities to be created and joined by all that wish to be welcomed in.  You can join communities, create a friend's group,
                    or talk individually with friends that you make, all in one spot!  In the future, if I can fund it, I would like to incorporate audio capabilities
                    so that your encounters are a little more personal than reading text on a screen.
                </div>
                <div>
                    NOTE:  Be aware that many parts of this site move.  If you are on a phone, for instance, the icon bar to the left scroll up and down, as well as items that 
                    will appear in this area and to the right.  Perhaps take some time to navigate around and get familiar with the interface.
                </div>
            </DefaultPage>
        </Fragment>
    );
}