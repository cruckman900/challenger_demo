import React, { Fragment } from "react";
import DefaultPage from "../../../UI/DefaultPage/DefaultPage";
import LeftLabelInput from "../../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../../UI/Button/Button";
import classes from './login.module.css';

export default function Login() {
    return (
        <Fragment>
            <DefaultPage headerText="Login">
                <div>
                    <LeftLabelInput name="txtUsername" inputType="text" className={classes.LeftLabelInput}
                        required={true}
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Username"
                    ></LeftLabelInput>
                </div>
                <div>
                    <LeftLabelInput name="txtPassword" inputType="password" className={classes.LeftLabelInput}
                        required={true}
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Password"
                    ></LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <Button type="submit" name="btnSubmit" value="Submit" />
                    <Button type="button" name="btnClear" value="Clear" />
                </div>
            </DefaultPage>
        </Fragment>
    );
}