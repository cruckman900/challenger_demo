import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card/Card";
import classes from './Agreements.module.css';

const TermsOfUse = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <Card headerText="Terms of Use" isOpened={true}>
                Blah. Blah. Blah.
            </Card>
        </Modal>
    )
}

export default TermsOfUse;