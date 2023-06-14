import React, { useState, useEffect } from 'react'
import DefaultPage from '../../UI/DefaultPage/DefaultPage'
import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput'
import BodyHeader from '../../UI/BodyHeader/BodyHeader'
import Label from '../../UI/Label/Label'
import Button from '../../UI/Button/Button'
import classes from './systemSettings.module.css'

export default function SystemSettings () {
    const [imageSrc, setImageSrc] = useState(null)
    const [primaryColor, setPrimaryColor] = useState('#990000')
    const [secondaryColor, setSecondaryColor] = useState('#009900')

    const imgOnChangeHandler = (event) => {
        console.log(event.target)
        if (event.target.files && event.target.files[0]) {
            setImageSrc(URL.createObjectURL(event.target.files[0]))
        }
    }

    const [blurb, setBlurb] = useState(null)
    const [blurbCharCount, setBlurbCharCount] = useState(0)
    const [blurbDisabled, setBlurbDisabled] = useState(false)

    const blurbChangeHandler = (event) => {
        setBlurb(event.target.value)
        setBlurbCharCount(event.target.value.length)
    }

    useEffect(() => {
        if (+blurbCharCount > 699) {
            setBlurbDisabled(true)
        }
    }, [blurbCharCount])

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <DefaultPage headerText="System Settings">
            <form onSubmit={onSubmitHandler}>
                <div className={classes.row}>
                    <div>
                        <LeftLabelInput
                            id="avatarImage"
                            inputType="file"
                            labelText="Avatar Image"
                            inputClassName={classes.inputFileType}
                            onChange={(event) => imgOnChangeHandler(event)}
                        />
                    </div>
                    {imageSrc !== null && (
                        <div>
                            <Label text="Preview" className={classes.Label} />
                            <img src={imageSrc} className={classes.image} alt="Avatar Preview" />
                        </div>
                    )}
                </div>
                <div className={classes.row}>
                    <LeftLabelInput
                        id="txtBlurbCounter"
                        placeholder={blurbCharCount}
                        inputType="text"
                        labelClassName={classes.labelText}
                        inputClassName={classes.tinyInput}
                        readOnly={true}
                        disabled={true}
                        labelText="Character Count"
                    />
                    <div className={classes.formRow}>
                        <LeftLabelInput
                            id="txtBlurb"
                            placeholder="Up to 500 characters"
                            inputType="textarea"
                            labelText="Describe Yourself"
                            labelClassName={classes.labelText}
                            inputClassName={classes.textarea}
                            readOnly={false}
                            disabled={blurbDisabled}
                            onChange={blurbChangeHandler}
                            value={blurb}
                        />
                    </div>
                </div>
                <div className={classes.row}>
                    <div>
                        <LeftLabelInput
                            id="primaryColor"
                            inputType="color"
                            inputClassName={classes.inputColorType}
                            labelText="Primary Color"
                            value={primaryColor}
                            onChange={(event) => setPrimaryColor(event.target.value)}
                        />
                    </div>
                    <div>
                        <LeftLabelInput
                            id="secondaryColor"
                            inputType="color"
                            inputClassName={classes.inputColorType}
                            labelText="Secondary Color"
                            value={secondaryColor}
                            onChange={(event) => setSecondaryColor(event.target.value)}
                        />
                    </div>
                    <div className={classes.row}>
                        <Label text="Preview" className={classes.Label} />
                        <div>
                            <div className={classes.span} style={{ color: `${primaryColor}` }}>Your Name: </div>
                            <div className={classes.span} style={{ color: `${secondaryColor}` }}>Your Message Here.</div>
                        </div>
                    </div>
                </div>

                <BodyHeader>&nbsp;</BodyHeader>
                <div className={classes.formRow}>
                    <Button
                        className={classes.primaryBtn}
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </DefaultPage>
    )
}
