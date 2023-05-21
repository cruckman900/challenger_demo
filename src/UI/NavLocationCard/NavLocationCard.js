import React, { useState, useEffect } from 'react';
import classes from './NavLocationCard.module.css';

const NavLocationCard = (props) => {
    const [dateCreatedWording, setDateCreatedWording] = useState('Created on');
    const [titleOrName, setTitleOrName] = useState('title');

    useEffect(() => {
        if (props.navType === 'community' || props.navType === 'group') {
            setDateCreatedWording('Created on');
            setTitleOrName('title');
        } else {
            setDateCreatedWording('Joined on');
            setTitleOrName('name');
        }
    }, [props]);

    return (
        <div className={classes.NavCard} onClick={props.onClickHandler}>
            {titleOrName === 'title' && <div className={classes.header}>{props.title}</div>}
            {titleOrName === 'name' && <div className={classes.header}>{props.name}</div>}
            <div className={classes.body}>{`${dateCreatedWording} ${props.dateCreated}`}</div>
        </div>
    );
};

export default NavLocationCard;