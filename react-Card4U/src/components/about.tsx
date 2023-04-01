import { FunctionComponent, useContext } from "react";
import { SiteTheme } from "../App";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    const theme = useContext(SiteTheme);
    return <>

        <div className="darkM">
            <div style={{ height: "86vh",overflow: "auto", marginRight: "0", color: theme.color, background: theme.background }} className="darkM row">
                <div className="container col-6 mt-5">
                    <h1 className="mb-4" style={{fontFamily:"revert",fontSize:"50px"}}>About The WebSite</h1>
                    <hr />
                    <p style={{fontFamily:"serif", fontSize:"30px"}}>The webSite allow you to create and publish you own Business card in a few seconds. <br /> to do so you will need to create a Business user, lucky for you it's free! </p>
                    <p style={{fontFamily:"serif", fontSize:"30px"}}>Also you can see others people Business card and contact them if needed there services.</p>
                </div>

                <div style={{ padding: "0", justifyContent:"center",alignItems:"center",alignContent:"center",textAlign:"center"}} id="pic" className="abouteCard col-md-4">
                    <div id="allCard" style={{width:"90%", height:"95%", border:`10px solid ${theme.color}`, borderRadius:"10px",
                boxShadow:`0 10px 14px 0 ${theme.hover}, 0 15px 30px 0 ${theme.hover}`}}>
                        <div style={{border:`10px solid ${theme.color}`, display:"flex",  justifyContent:"center",alignItems:"center",alignContent:"center",textAlign:"center"}}  id="cardH">
                            <p style={{fontWeight:"bold", fontSize:"4vw",fontFamily:"unset"}}>CARD4-U</p>
                        </div>
                        <div id="cardB">
                            <p style={{marginBottom:"3vw", borderRadius:"12px", width:"100%", borderBottom:`20px solid ${theme.color}`}}></p>
                            <p style={{marginBottom:"3vw", borderRadius:"12px", width:"100%", borderBottom:`20px solid ${theme.color}`}}></p>
                            <p style={{marginBottom:"3vw", borderRadius:"12px", width:"100%", borderBottom:`20px solid ${theme.color}`}}></p>
                            <p style={{marginBottom:"3vw", borderRadius:"12px", width:"100%", borderBottom:`20px solid ${theme.color}`}}></p>
                            <p style={{marginBottom:"3vw", borderRadius:"12px", width:"100%", borderBottom:`20px solid ${theme.color}`}}></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </>
}

export default About;