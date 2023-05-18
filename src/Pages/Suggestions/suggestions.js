import React, { Fragment } from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import classes from './suggestions.module.css';

export default function Suggestions() {
    return (
        <Fragment>
            <DefaultPage headerText="Suggestions">
                <p>
                    I hope to have this section up and running as soon as possible.  I have had a general idea 
                    of what it is I hope to achieve, but a large part of the shaping of this site has come from the
                    eyes and mouths of others &mdash; font issues, colors, readibility, contrast, etc.  Just the
                    basic look and feel has undergone several revisisons, and as of this writing, it's only been 12 
                    hours!
                </p>
            </DefaultPage>
        </Fragment>
    );
}