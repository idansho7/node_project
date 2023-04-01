import { FunctionComponent, useContext } from "react";
import { SiteTheme } from "../App";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    const theme = useContext(SiteTheme);
    return <>
        <div className="darkM" style={{borderTop:"2px solid black", color: theme.background, background: theme.color,justifyContent:"center",alignItems:"center",alignContent:"center",textAlign:"center" }} id="footer">
            <p id="footerText">&#169; Idan Shoshani</p>
        </div>
    </>
}

export default Footer;