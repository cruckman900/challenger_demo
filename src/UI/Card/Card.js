import React, { useState } from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import classes from './Card.module.css';
import fonts from '../../fonts.module.css';

function Card(props) {
    const [isOpened, setIsOpened] = useState('none');

    const toggleIsOpened = () => {
        if (isOpened === 'none') {
            setIsOpened('inline');
            return;
        }
        setIsOpened('none');
    }

    return (
        <Container className={`${classes.card} ${isOpened === 'none' && classes.minified}`}>
            <Row className={`${classes.header} ${fonts.ShackleItalic}`} onClick={() => toggleIsOpened()}><Col>{props.headerText}</Col></Row>
            <Row style={{display: isOpened}}><Col className={classes.bodyElements}>{props.children}</Col></Row>
        </Container>
    );
}

export default Card;