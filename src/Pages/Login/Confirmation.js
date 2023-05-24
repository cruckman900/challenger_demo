import React, { useState, useEffect } from 'react';
import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card/Card";
import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput';
import Button from "../../UI/Button/Button";
import classes from "./login.module.css";

const Confirmation = (props) => {
    const [code, setCode] = useState('');
    const [codeIsValid, setCodeIsValid] = useState(false);
    const [btnEnabled, setButtonEnabled] = useState(false);

    const onChangeHandler = (event) => {
        setCode(event.target.value.toString());
    }

    useEffect(() => {
        if (code.length > 4) {
            setCodeIsValid(true);
            setButtonEnabled(true)
            return;
        }
        setCodeIsValid(false);
    }, [code]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (codeIsValid) {
            props.onClose(code);
        }
    }

    return (
        <Modal onClose={props.onClose}>
            <Card headerText="Check your email and enter activation code." isOpened={true}>
                <form onSubmit={onSubmitHandler}>
                    <LeftLabelInput
                        id="txtConfCode"
                        placeholder="5 digit code"
                        inputType="number"
                        labelText="Confirmation Code"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        maxLength="5"
                        value={code}
                        onChange={onChangeHandler}
                        valid={codeIsValid}
                        error={!codeIsValid}
                    />
                    <br />
                    <Button type="submit" value="Submit" disabled={!btnEnabled} />
                    <Button type="button" value="Cancel" onClick={props.onClose} />
                </form>
            </Card>
        </Modal>
    );
};

export default Confirmation;