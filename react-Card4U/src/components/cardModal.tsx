import { FunctionComponent, useContext } from "react";
import { Modal } from "react-bootstrap";
import { SiteTheme } from "../App";
import Card from "../interfaces/card";

interface CardModalProps{
    show: boolean;
    onHide: Function;
    cardInfo: Card;
}

const CardModal: FunctionComponent<CardModalProps> = ({show,onHide,cardInfo}) => {
    const theme = useContext(SiteTheme);
    return <>
            <Modal
            show={show}
            onHide={() => onHide()}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div id="showCard" className="card col-12 container text-center" style={cardInfo.cardColor === ""? ({  border:`5px solid ${theme.color}`, backgroundColor: theme.background, color: theme.color }):({ border:`5px solid ${theme.color}`, backgroundColor: cardInfo.cardColor, color: theme.color })}>
                <h3 className="cart-title text-center mt-4" >{cardInfo.businessName}</h3>
                <hr />
                <div style={{height:"45vh"}}>
                    <img style={{ height: "80%", borderRadius: "6px" }} src={cardInfo.businessImage} className="align-self-center card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <p style={{fontSize:"20px"}} className="card-text">{cardInfo.businessDescription}</p>
                    <p style={{fontSize:"20px"}} className="card-text mt-1">{cardInfo.businessPhone}</p>
                    <p style={{fontSize:"20px"}} className="card-text mt-2 mb-5" >{cardInfo.businessAddress}</p>
                </div>
            </div>
        </Modal>
    </>
}

export default CardModal;