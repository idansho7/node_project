import { FunctionComponent, useContext } from "react";
import { Modal } from "react-bootstrap";
import { SiteTheme } from "../App";
import { deleteCard } from "../services/card";
import { successMsg } from "../services/feedbacks";

interface DeleteCardModalProps {
    show: boolean;
    onHide: Function;
    cardId: string;
    setQuan: Function;
    change: boolean;
    setChange: Function;
}

const DeleteCardModal: FunctionComponent<DeleteCardModalProps> = ({ show, onHide, cardId, setQuan, setChange, change }) => {
    const theme = useContext(SiteTheme);
    return <>
        <Modal
            show={show}
            onHide={() => onHide()}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ color: theme.color, backgroundColor: theme.background }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: theme.color, backgroundColor: theme.background }} >
                <p>
                    Are you sure you want to delete this card?
                </p>
            </Modal.Body>
            <Modal.Footer style={{ color: theme.color, backgroundColor: theme.background }} >
                <button onClick={() => {
                    deleteCard(cardId)
                        .then((res) => {
                            successMsg("card removed!");
                            let q = JSON.parse(localStorage.getItem("quantity") as string);
                            q = q - 1;
                            localStorage.setItem("quantity", JSON.stringify(q));
                            setQuan(q);
                            onHide();
                            setChange(!change);

                        })
                        .catch((err) => { console.log(err) });

                }} className="btn btn-danger"> yes </button>
                <button onClick={() => onHide()} className="btn btn-info"> cancel </button>
            </Modal.Footer>
        </Modal>
    </>
}

export default DeleteCardModal;