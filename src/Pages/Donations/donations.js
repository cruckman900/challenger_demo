import React, { Fragment } from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import classes from './donations.module.css';

export default function Donations() {
    return (
        <Fragment>
            <DefaultPage headerText="Donations">
                <div>
                    I will continually be making an effort to improve this site.  I do not earn a wage, I am not doing this
                    for an employer or with a group of developers.  I ask, from time to time, for ideas, or a second set of
                    eyes, but for the most part, I am the sole developer.  I am hoping for funding to come through through 
                    the acts of donations to support the time and effort put forth in the development of this site.  As I 
                    receive donations, I will have them recorded here: who the donation was from, what the donation was for (
                    i.e. an added feature), and some form of visual that will show the size of the donation (a meter of 
                    sorts).  But, for the time being, I am developing up to the point to where backend technologies will need 
                    to be developed and this type of feature will be made available.
                </div>
            </DefaultPage>
        </Fragment>
    );
}