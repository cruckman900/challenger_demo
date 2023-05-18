import React, { Fragment } from "react";
import DefaultPage from "../../../../UI/DefaultPage/DefaultPage";
import Note from "../../../../UI/Note/Note";

export default function home() {
    return (
        <Fragment>
            <DefaultPage headerText="Welcome Home!">
                <div>
                    This place is for communities to be created and joined by all that wish to be welcomed in.  You can join communities, create a friend's group,
                    or talk individually with friends that you make, all in one spot!  In the future, if I can fund it, I would like to incorporate audio capabilities
                    so that your encounters are a little more personal than reading text on a screen.
                </div>
                <Note headerText="NOTE: Many parts of this site move.">
                    If you are on a phone, for instance, the icon bar to the left scrolls up and down, as well as items that 
                    will appear in this area and in the right column.  There are collapsable/expandable items such as those in the right column.
                </Note>
            </DefaultPage>
        </Fragment>
    );
}