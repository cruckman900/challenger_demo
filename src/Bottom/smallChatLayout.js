import React from "react";
import classes from './smallChatLayout.module.css';
import { Container, Row, Col } from "react-bootstrap";
import Label from "../UI/Label/Label";
import SmallChatCard from "../UI/Card/SmallChatCard";
import Button from "../UI/Button/Button";

function smallChatLayout(props) {
    return (
        <SmallChatCard className={classes.card} 
            header={`
                ${props.lastName}, 
                ${props.firstName} 
                ${props.middleInitial}`}
            newMessage={props.newMessage}
            >
            <Container fluid>
                <Row>
                    <Col className={classes.col}>
                        <img src={props.image} className={classes.chatterImage} />
                    </Col>
                    <Col className={classes.col}>
                        <div>
                            <span className={classes.infoText}>
                                <Label text="Age" /><span>{props.age}</span>
                            </span>
                        </div>
                        <div>
                            <span className={classes.infoText}>
                                <Label text="Height" /><span>{props.height}</span>
                            </span>
                        </div>
                        <div>
                            <span className={classes.infoText}>
                                <Label text="Weight" /><span>{props.weight}</span>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </SmallChatCard>
    );
}

export default smallChatLayout;