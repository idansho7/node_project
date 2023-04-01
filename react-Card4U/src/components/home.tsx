import { FunctionComponent, useContext } from "react";
import { SiteTheme } from "../App";

interface HomeProps{

}

const Home: FunctionComponent<HomeProps> = () => {
    const theme = useContext(SiteTheme);
    return <>

    <div className="darkM" style={{ height:"86vh" ,backgroundColor: theme.background, color: theme.color}}>

            <p style={{height:"15%", display:"flex", justifyContent:"center",alignItems:"center",alignContent:"center",textAlign:"center"}} className="m-0 display-3">Welcome to Card4-U</p>

        <div style={{ height:"85%", flexWrap:"nowrap", marginRight: "0" }} className="row">

            <div id="pic2" style={{ padding: "0"}} className="">
                <img style={{ height: "100%" }} className="w-100" src="https://img.freepik.com/free-photo/blank-business-card-blue-background_1232-5003.jpg?w=2000" alt="" />
            </div>

            <div id="pic" style={{width:"30%" ,padding: "50px" }} className=" ">
                <div style={{width:"100%",height:"100%"}} className="position-relative">
                    <p className="display-1 position-absolute top-0 start-0 ">MAKE</p>
                    <p style={{color:"orange"}} id="centered" className="display-1">YOUR</p>
                    <p className="display-1 position-absolute bottom-0 end-0">CARD</p>
                </div>
            </div>

        </div>

    </div>
    </>
}

export default Home;