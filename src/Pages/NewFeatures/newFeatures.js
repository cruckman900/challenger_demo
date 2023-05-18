import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Card from "../../UI/Card/Card";
import classes from './newFeatures.module.css';

export default function NewFeatures() {
    return (
        <DefaultPage headerText="Features & Updates Log">
            <Card headerText="May 2023">
                <BodyHeader>5/01/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Implemented a context for login.  Hiding and showing elements based on login status.  Changing Login menu link to Log Out once user is logged in.
                    Still need to work on database connectivity and api calls, but all in due time.  Changed animation on Portrait mode to include brightness/contrast.
                    Added onChange handler for Age in UserSettings.js.
                </div>
            </Card>
            <Card headerText="April 2023">
                <BodyHeader>4/24/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Massive styles overhaul: font spacing, color, sizing.  Created a top navigation bar.  Added all pages belonging to the navigation system.  
                    Completed the inputs for the User Settings page.  Making DefaultPage body content the scrollable element on the screen inside the Main section.
                    This will accomodate smaller devices better so that headings stay on top, the bottom is clearly visible without scrolling, and the content is kept
                    inside the container.
                </div>
                <BodyHeader>4/23/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Changed the background color for Card and Default Page to a black color.  Added CommunitySettings stub.  Added bgcolor for inputs - normal,
                    focused, valid, and error states.
                </div>
                <BodyHeader>4/22/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Added an accordion view on the right for friends, groups and communities.  Can't get the accordion to work properly yet.  Changed from
                    accordion to my own card component.
                </div>
                <BodyHeader>4/20/2023 (just 'cuz it's 4/20?)</BodyHeader>
                <div className={classes.updateBody}>
                    Added a cheap looking logo and navigation buttons on the left side are now hilighting when active.  Beginning to work 
                    on the User Settings section of the site.  I'm not wiring them up to any kind of service or implementing any kind of
                    handling for the inputs &mdash; Just Layout!
                </div>
                <BodyHeader>4/17/2023</BodyHeader>
                <div className={classes.updateBody}>
                    Not very many features here yet.  I am in the process of creating a skeleton of features that will currently not be connected to any kind of 
                    backend service.  So, while I am building, you will be able to see what things will look like when it is all finished, you just won't be 
                    able to interact with any live functionality.
                </div>
            </Card>
        </DefaultPage>
    );
}