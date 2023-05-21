import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUserPlus, faLocationDot, faUtensils, faTelevision, faRadio, faFootball, faComputer
} from '@fortawesome/free-solid-svg-icons';

import classes from './NavLocationCard.module.css';

const NavLocationCard = (props) => {
    const myIcons = {
        userPlus: faUserPlus,
        locationDot: faLocationDot,
        utensils: faUtensils,
        television: faTelevision,
        radio: faRadio,
        football: faFootball,
        computer: faComputer,
    };

    const [dateCreatedWording, setDateCreatedWording] = useState('Created on');
    const [titleOrName, setTitleOrName] = useState('title');
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (props.navType === 'community' || props.navType === 'group') {
            setDateCreatedWording('Created on');
            setTitleOrName('title');
        } else {
            setDateCreatedWording('Joined on');
            setTitleOrName('name');
        }

        if (props.selected === true) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [props]);

    return (
        <Fragment>
            <div className={`${classes.NavCard} ${selected && classes.selected}`} onClick={props.onClickHandler}>
                <Container>
                    <Row style={{display: 'flex'}}>
                        <Col className={classes.colLeft}>
                            {titleOrName === 'title' && <div className={`${classes.header} ${classes.noSelect}`}>{props.title}</div>}
                            {titleOrName === 'name' && <div className={`${classes.header} ${classes.noSelect}`}>{props.name}</div>}
                            <div className={`${classes.body} ${classes.noSelect}`}>{`${dateCreatedWording} ${props.dateCreated}`}</div>
                        </Col>
                        <Col className={classes.colRight}>
                            {props.icon && <FontAwesomeIcon className={classes.icon} icon={myIcons[props.icon]} />}
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default NavLocationCard;