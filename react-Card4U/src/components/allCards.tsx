import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SiteTheme } from "../App";
import Card from "../interfaces/card";
import { getCards } from "../services/card";
import CardModal from "./cardModal";

interface AllCardsProps {

}

const AllCards: FunctionComponent<AllCardsProps> = () => {
    let [allCardsArr, setAllCardsArr] = useState<Card[]>([]);
    let [openCardModal, setOpenCardModal] = useState<boolean>(false);
    let [cardInfo, setCardInfo] = useState<Card>({ businessAddress: "", businessDescription: "", businessImage: "", businessName: "", businessPhone: "" });

    useEffect(() => {
        getCards()
            .then((res) => { setAllCardsArr(res.data) })
            .catch((err) => console.log(err))
    }, [])
    const theme = useContext(SiteTheme);
    return <>

        <div className="darkM" style={{ backgroundColor: theme.background, color: theme.color }}>
            <div className="darkM container" style={{ height: "86vh", overflow: "auto", backgroundColor: theme.background, color: theme.color }}>
                {allCardsArr.length ?
                    (
                        <div className=" mt-5 text-center">
                            {allCardsArr.map((card) => (
                                <div onClick={() => { setCardInfo(card); setOpenCardModal(true) }} key={card._id} className="cardId darkM card" style={card.cardColor === "" ? ({ display: "inline-block", cursor: "pointer", padding: "10px", margin: "10px", width: "20rem", border: `5px solid ${theme.color}`, backgroundColor: theme.background, color: theme.color }) : ({ display: "inline-block", cursor: "pointer", padding: "10px", margin: "10px", width: "20rem", border: `5px solid ${theme.color}`, backgroundColor: card.cardColor, color: theme.color })}>
                                    <h5 style={{ fontSize: "27px" }} className="cart-title text-center mt-2" >{card.businessName}</h5>
                                    <hr />
                                    <div style={{ height: "250px" }}>
                                        <img style={{ height: "100%", borderRadius: "6px" }} src={card.businessImage} className="align-self-center card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text mt-3">{card.businessDescription}</p>
                                        <h5 className="card-text mt-1">{card.businessPhone}</h5>
                                        <h5 className="card-text mt-2" >{card.businessAddress}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    :
                    (
                        <h1 style={{ backgroundColor: theme.background, color: theme.color }} className="text-center mt-4">No cards in data base</h1>
                    )}
            </div>
        </div>
        <CardModal show={openCardModal} onHide={() => setOpenCardModal(false)} cardInfo={cardInfo as Card} />
    </>
}
export default AllCards;