import React, { useState } from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import classes from './SmallChatCard.module.css';

function SmallChatCard(props) {
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
            <Row className={`${classes.header} ${classes.newMessage}`} onClick={() => toggleIsOpened()}><Col>{props.header}</Col></Row>
            <Row style={{display: isOpened}}><Col>{props.children}</Col></Row>
        </Container>
    );
}

export default SmallChatCard;