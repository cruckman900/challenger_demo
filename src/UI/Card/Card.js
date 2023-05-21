import React, { useState, useEffect } from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import classes from './Card.module.css';

function Card(props) {
    const [isOpened, setIsOpened] = useState('none');
    const [toggle, setToggle] = useState('+');

    const toggleIsOpened = () => {
        if (isOpened === 'none') {
            setIsOpened('inline');
            setToggle('-');
            return;
        }
        setIsOpened('none');
        setToggle('+');
    }

    useEffect(() => {
        if (props.isOpened) {
            setIsOpened('inline');
        }
    }, [props.isOpened]);

    return (
        <Container className={`${classes.card} ${isOpened === 'none' && classes.minified}`}>
            {!props.isOpened && (
                <Row className={`${classes.header} ${classes['with-cursor']}`} onClick={() => toggleIsOpened()}>
                    <Col>{props.headerText}<span className={classes.toggle}>{toggle}</span></Col>
                </Row>
            )}
            {props.isOpened && <Row className={`${classes.header}`}><Col>{props.headerText}</Col></Row>}
            <Row style={{display: isOpened}}><Col className={classes.bodyElements}>{props.children}</Col></Row>
        </Container>
    );
}

export default Card;