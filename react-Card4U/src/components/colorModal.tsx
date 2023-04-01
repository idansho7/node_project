import { FunctionComponent, useContext } from "react";
import { Modal } from "react-bootstrap";
import { SiteTheme } from "../App";
import Card from "../interfaces/card";
import { updateCard } from "../services/card";

interface ColorModalProps {
    show: boolean;
    onHide: Function;
    cardInfo: Card;
    setChange: Function;
    change: boolean
}

const ColorModal: FunctionComponent<ColorModalProps> = ({ show, onHide, cardInfo, change, setChange }) => {
    const theme = useContext(SiteTheme);
    return <>
        <Modal
            show={show}
            onHide={() => onHide()}
            // size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body style={{ color: theme.color, backgroundColor: theme.background, borderRadius: "10px" }}>
                <div id="colorBtns" style={{ backgroundColor: theme.background, color: theme.color }}>
                    <button onClick={() => {
                        updateCard({ ...cardInfo, cardColor: "#F4FF00" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#F4FF00" }} className="btn"></button>

                    <button onClick={() => {

                        updateCard({ ...cardInfo, cardColor: "#002EFF" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#002EFF" }} className="btn"></button>

                    <button onClick={() => {

                        updateCard({ ...cardInfo, cardColor: "#00FF23" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#00FF23" }} className="btn"></button>

                    <button onClick={() => {

                        updateCard({ ...cardInfo, cardColor: "#F82D31" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#F82D31" }} className="btn"></button>

                    <button onClick={() => {

                        updateCard({ ...cardInfo, cardColor: "#A200F4" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#A200F4" }} className="btn"></button>

                    <button onClick={() => {
                        updateCard({ ...cardInfo, cardColor: "black" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "black" }} className="btn"></button>

                    <button onClick={() => {
                        updateCard({ ...cardInfo, cardColor: "#F4A200" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#F4A200" }} className="btn"></button>

                    <button onClick={() => {
                        updateCard({ ...cardInfo, cardColor: "#2CFFB0" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#2CFFB0" }} className="btn"></button>

                    <button onClick={() => {
                        updateCard({ ...cardInfo, cardColor: "#026602" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#026602" }} className="btn"></button>

                    <button onClick={() => {
                        updateCard({ ...cardInfo, cardColor: "red" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "red" }} className="btn"></button>

                    <button onClick={() => {
                        updateCard({ ...cardInfo, cardColor: "#FF64F2" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: "#FF64F2" }} className="btn"></button>

                    <button onClick={() => {
                        updateCard({ ...cardInfo, cardColor: "" })
                            .then(() => {
                                onHide();
                                setChange(!change);
                            })
                            .catch((err) => console.log(err));
                    }} style={{ margin: "15px", width: "40px", height: "40px", backgroundColor: theme.background, border: `5px solid ${theme.color}` }} className="btn"></button>
                </div>
            </Modal.Body>


        </Modal>
    </>
}

export default ColorModal;