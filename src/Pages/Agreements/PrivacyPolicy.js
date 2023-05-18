import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card/Card";
import classes from './Agreements.module.css';

const PrivacyPolicy = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <Card headerText="Privacy Policy" isOpened={true}>
                Blah. Blah. Blah.
            </Card>
        </Modal>
    )
}

export default PrivacyPolicy;