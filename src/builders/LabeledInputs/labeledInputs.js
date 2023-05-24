import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput';
import classes from './labeledInputs.module.css';

const labeledInputs = (inputs) => {
    const retVal = inputs.map((input) => {
        return (
            <div className={classes.formRow}>
                <LeftLabelInput
                    id={input.id}
                    name={input.name}
                    inputType={input.inputType}
                    className={classes.inputStyle}
                    labelClassName={classes.labelText}
                    labelText={input.labelText}
                    required={true}
                    value={input.value}
                    onChange={input.onChange}
                />
            </div>
        );
    });

    return retVal;
};

export default labeledInputs;