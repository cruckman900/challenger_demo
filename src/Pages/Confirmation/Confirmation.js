import React, { useState } from 'react';
import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';

const Confirmation = (props) => {
    const [code, setCode] = useState('');

    const onChangeHandler = (event) => {
        setCode(event.target.value.toString());
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (code.length === 5) {
            props.onClose(code);
        }
    }

    const inputs = [
        {id: "txtConfCode", placeholder: "5 digit code", inputType: "number", required: true, labelText: "Confirmation Code", onChange: onChangeHandler},
    ];

    return (
        <Modal onClose={props.onClose}>
            <Card headerText="Check your email and enter Confirmation Code below." isOpened={true}>
                <form onSubmit={onSubmitHandler}>
                    {labeledInputs(inputs)}
                    <Button type="submit" value="Submit" />
                    <Button type="button" value="Cancel" onClick={props.onClose} />
                </form>
            </Card>
        </Modal>
    );
};

export default Confirmation;