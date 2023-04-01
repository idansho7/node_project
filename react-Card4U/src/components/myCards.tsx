import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiteTheme } from "../App";
import Card from "../interfaces/card";
import { getList } from "../services/cardList";
import ColorModal from "./colorModal";
import DeleteCardModal from "./deleteCardModal";
import UpdateCardModal from "./updateCardModal";

interface MyCardsProps {
    setQuan: Function;
    quan: number;
    newC: boolean;
    setNewC: Function;

}

const MyCards: FunctionComponent<MyCardsProps> = ({ setQuan, quan, newC, setNewC }) => {
    let [listCards, setListCards] = useState<Card[]>([]);
    let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    let [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    let [openColorModal, setOpenColorModal] = useState<boolean>(false);
    let [cardInfo, setCardInfo] = useState<Card>();
    let [cardId, setCardId] = useState<string>("");
    let [change, setChange] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(() => {
            setNewC(false);
        }, 3000)

    }, [])
    useEffect(() => {
        getList()
            .then((res) => {
                setListCards(res.data.cards); setQuan(res.data.quantity);
                localStorage.setItem("quantity", JSON.stringify(res.data.quantity))
            })
            .catch((err) => console.log(err))
    }, [change])
    const theme = useContext(SiteTheme);
    return <>
        <div className="darkM" style={{ backgroundColor: theme.background, color: theme.color }}>
            <div className="darkM container" style={{ height: "86vh", overflow: "auto", backgroundColor: theme.background, color: theme.color }}>
                {listCards.length ?
                    (
                        <div className=" mt-5 text-center">
                            {listCards.map((card) => (
                                <>
                                    {listCards.length - 1 === listCards.indexOf(card) && newC ?
                                        (
                                            <div key={card._id} className="darkM card position-relative" style={card.cardColor === "" ? ({ display: "inline-block", padding: "10px", margin: "5px", width: "20rem", border: `5px solid red`, backgroundColor: theme.background, color: theme.color }) : ({ display: "inline-block", padding: "10px", margin: "5px", width: "20rem", border: `5px solid ${theme.color}`, backgroundColor: card.cardColor, color: theme.color })}>
                                                <h5 style={{ fontSize: "27px" }} className="cart-title text-center mt-2" >{card.businessName}</h5>
                                                <hr />
                                                <div style={{ height: "250px" }}>
                                                    <img style={{ height: "100%", borderRadius: "6px" }} src={card.businessImage} className="align-self-center card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text mt-3">{card.businessDescription}</p>
                                                    <h5 className="card-text mt-1">{card.businessPhone}</h5>
                                                    <h5 className="card-text mt-2" >{card.businessAddress}</h5>

                                                    <div className="text-center mt-5">
                                                        <button onClick={() => { setOpenDeleteModal(true); setCardId(card._id as string) }} className="btn btn-danger me-2"><i className="fa-solid fa-trash-can"></i></button>
                                                        <button onClick={() => { setOpenUpdateModal(true); setCardInfo(card) }} className="btn btn-warning me-2"><i className="fa-solid fa-pen-to-square"></i></button>
                                                        <button onClick={() => { setOpenColorModal(true); setCardInfo(card) }} style={{ color: "white" }} className="btn colorCardBtn"><i className="fa-solid fa-paintbrush"></i></button>
                                                    </div>
                                                </div>
                                                <span style={{ fontSize: "18px" }} className="position-absolute top-0 start-95 translate-middle badge rounded-pill bg-danger">
                                                    New!
                                                </span>
                                            </div>

                                        )
                                        :
                                        (
                                            <div key={card._id} className="darkM card" style={card.cardColor === "" ? ({ display: "inline-block", padding: "10px", margin: "5px", width: "20rem", border: `5px solid ${theme.color}`, backgroundColor: theme.background, color: theme.color }) : ({ display: "inline-block", padding: "10px", margin: "5px", width: "20rem", border: `5px solid ${theme.color}`, backgroundColor: card.cardColor, color: theme.color })}>
                                                <h5 style={{ fontSize: "27px" }} className="cart-title text-center mt-2" >{card.businessName}</h5>
                                                <hr />
                                                <div style={{ height: "250px" }}>
                                                    <img style={{ height: "100%", borderRadius: "6px" }} src={card.businessImage} className="align-self-center card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text mt-3">{card.businessDescription}</p>
                                                    <h5 className="card-text mt-1">{card.businessPhone}</h5>
                                                    <h5 className="card-text mt-2" >{card.businessAddress}</h5>

                                                    <div className="text-center mt-5">
                                                        <button onClick={() => { setOpenDeleteModal(true); setCardId(card._id as string) }} className="btn btn-danger me-2"><i className="fa-solid fa-trash-can"></i></button>
                                                        <button style={{ color: "white" }} onClick={() => { setOpenUpdateModal(true); setCardInfo(card) }} className="btn btn-warning me-2"><i className="fa-solid fa-pen-to-square"></i></button>
                                                        <button onClick={() => { setOpenColorModal(true); setCardInfo(card) }} style={{ color: "white" }} className="btn colorCardBtn"><i className="fa-solid fa-paintbrush"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}


                                </>
                            ))}
                        </div>
                    )
                    :
                    (
                        <>
                            <div style={{ backgroundColor: theme.background, color: theme.color }} className="darkM text-center mt-5">
                                <h1 >You have no cards!</h1>
                                <Link style={{ fontSize: "25px" }} to="/add-card">Add new card here</Link>
                            </div>

                        </>
                    )}
            </div>
        </div>
        <UpdateCardModal show={openUpdateModal} onHide={() => setOpenUpdateModal(false)} cardInfo={cardInfo as Card} setChange={setChange} change={change} />
        <DeleteCardModal show={openDeleteModal} onHide={() => setOpenDeleteModal(false)} cardId={cardId} setChange={setChange} change={change} setQuan={() => setQuan} />
        <ColorModal show={openColorModal} onHide={() => setOpenColorModal(false)} cardInfo={cardInfo as Card} setChange={setChange} change={change} />
    </>
}

export default MyCards;