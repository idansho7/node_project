
import { FunctionComponent, useContext } from "react";
import { Modal } from "react-bootstrap";
import { SiteTheme } from "../App";
import Card from "../interfaces/card";
import UpdateCard from "./updateCard";

interface UpdateCardModalProps {
    show: boolean;
    onHide: Function;
    cardInfo: Card;
    change: boolean;
    setChange: Function;
}

const UpdateCardModal: FunctionComponent<UpdateCardModalProps> = ({ show, onHide, cardInfo, setChange, change }) => {

    const theme = useContext(SiteTheme);
    return <>
        <Modal
            show={show}
            onHide={() => onHide()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ color: theme.color, backgroundColor: theme.background }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ color: theme.color, backgroundColor: theme.background }}>
                <UpdateCard onHide={onHide} cardInfo={cardInfo} change={change} setChange={setChange} />
            </Modal.Body>

            <Modal.Footer style={{ color: theme.color, backgroundColor: theme.background }}>
                <button onClick={() => onHide()} className="btn btn-info"> cancel </button>
            </Modal.Footer>
        </Modal>
    </>
}

export default UpdateCardModal;