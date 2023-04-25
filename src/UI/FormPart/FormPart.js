import React, { Fragment } from "react";
import classes from './FormPart.module.css';
import { Form } from "react-bootstrap";

export default function FormPart(props) {
    return (
        <Fragment>
            <Form>{props.children}</Form>
        </Fragment>
    );
}