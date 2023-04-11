import React from "react";
import { Row, Col } from 'react-bootstrap';
import classes from './bottom.module.css';

import female1 from '../assets/images/female1.png';
import female2 from '../assets/images/female2.png';
import female3 from '../assets/images/female3.png';
import male1 from '../assets/images/male1.png';
import male2 from '../assets/images/male2.png';
import male3 from '../assets/images/male3.png';

const patients = [
    {key: 0, lastName: "Doe", firstName: "John", middleInitial: "Q", age: 25, height: "5'9\"", weight: "178lbs", picture: male1},
    {key: 1, lastName: "Doe", firstName: "Jane", middleInitial: "P", age: 32, height: "5'3\"", weight: "113lbs", picture: female3},
    {key: 2, lastName: "Smith", firstName: "William", middleInitial: "F", age: 47, height: "5'8\"", weight: "221lbs", picture: male2},
];

const buildPatient = (patient) => {

}

export default function bottom() {
    return (
        <React.Fragment>
            <div className={classes.bottom}>
                <Row xs="auto">
                    {patients.map((patient) => (
                        <Col className={classes.right}>buildPatient(patient)</Col>
                    ))}
                </Row>
            </div>
        </React.Fragment>
    );
}