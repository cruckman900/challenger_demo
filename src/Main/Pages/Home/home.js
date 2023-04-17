import React from "react";
import DefaultPage from "../../../UI/DefaultPage/DefaultPage";
import classes from './home.module.css';
import fonts from '../../../fonts.module.css';

export default function home() {
    return (
        <React.Fragment>
            <DefaultPage headerText="Welcome to ChatterboxSM!">
                <div className={classes.body}>
                    This place is for communities to be created and joined by all that wish to be welcomed in.  You can join communities, create a friend's group,
                    or talk individually with friends that you make, all in one spot!  In the future, if I can fund it, I would like to incorporate audio capabilities
                    so that your encounters are a little more personal than reading text on a screen.
                </div>
            </DefaultPage>
            <DefaultPage headerText="New Features">
                <div className={classes.body}>
                    <div className={`${classes.updateDate} ${fonts.ShackleRegular}`}>4/17/2023</div>
                    Not very many features here yet.  I am in the process of creating a skeleton of features that will currently not be connected to any kind of 
                    backend service.  So, while I am building, you will be able to see what things will look like when it is all finished, you just won't be 
                    able to interact with any live functionality.
                </div>
            </DefaultPage>
        </React.Fragment>
    );
}