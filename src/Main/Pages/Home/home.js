import React, { Fragment } from "react";
import DefaultPage from "../../../UI/DefaultPage/DefaultPage";
import Card from "../../../UI/Card/Card";
import BodyHeader from "../../../UI/BodyHeader/BodyHeader";
import classes from './home.module.css';

export default function home() {
    return (
        <Fragment>
            <DefaultPage headerText="Welcome to ChatterboxSM!">
                <div>
                    This place is for communities to be created and joined by all that wish to be welcomed in.  You can join communities, create a friend's group,
                    or talk individually with friends that you make, all in one spot!  In the future, if I can fund it, I would like to incorporate audio capabilities
                    so that your encounters are a little more personal than reading text on a screen.
                </div>
            </DefaultPage>
            <DefaultPage headerText="New Features Log">
                <Card headerText="April 2023">
                    <BodyHeader>4/20/2023 (just 'cuz it's 4/20?)</BodyHeader>
                    <div>
                        Added a cheap looking logo and navigation buttons on the left side are now hilighting when active.
                    </div>
                    <div>
                        Beginning to work on the User Settings section of the site.  I'm not wiring them up to any kind of service or implementing any kind of
                        handling for the inputs &mdash; Just Layout!
                    </div>
                    <BodyHeader>4/17/2023</BodyHeader>
                    <div>
                        Not very many features here yet.  I am in the process of creating a skeleton of features that will currently not be connected to any kind of 
                        backend service.  So, while I am building, you will be able to see what things will look like when it is all finished, you just won't be 
                        able to interact with any live functionality.
                    </div>
                </Card>
            </DefaultPage>
        </Fragment>
    );
}