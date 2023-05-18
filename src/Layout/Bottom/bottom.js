import React from "react";
import { Row, Col } from 'react-bootstrap';
import classes from './bottom.module.css';

import Card from "../../UI/Card/Card";

import female1 from '../../assets/images/female1.png';
import female2 from '../../assets/images/female2.png';
import female3 from '../../assets/images/female3.png';
import male1 from '../../assets/images/male1.png';
import male2 from '../../assets/images/male2.png';
import male3 from '../../assets/images/male3.png';

export default function bottom() {
    const chatters = [
        {id: 0, key: 0, lastName: "Doe", firstName: "John", middleInitial: "Q", age: 25, height: "5'9\"", weight: "178lbs", image: male1},
        {id: 1, key: 1, lastName: "Doe", firstName: "Jane", middleInitial: "P", age: 32, height: "5'3\"", weight: "113lbs", image: female3},
        {id: 2, key: 2, lastName: "Smith", firstName: "William", middleInitial: "F", age: 47, height: "5'8\"", weight: "221lbs", image: male2}
    ];
    
    const buildChatter = (chatter) => {
        return (
            <Card
                key={chatter.key}
                collapsed={true}
                image={chatter.image}
                lastName={chatter.lastName}
                firstName={chatter.firstName}
                middleInitial={chatter.middleInitial}
                age={chatter.age}
                height={chatter.height}
                weight={chatter.weight}
                newMessage={true}
            />
        );
    }

    return (
        <React.Fragment>
            <div className={classes.bottom}>
                <Row xs="auto">
                    {chatters.map((chatter) => (
                        <Col key={chatter.key} className={classes.right}>{buildChatter(chatter)}</Col>
                    ))}
                </Row>
            </div>
        </React.Fragment>
    );
}