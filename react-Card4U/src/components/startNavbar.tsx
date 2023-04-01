/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";
import { SiteTheme } from "../App";


interface StartNavbarProps {
    darkMod: boolean
    setDarkMod: Function

}

const StartNavbar: FunctionComponent<StartNavbarProps> = ({ darkMod, setDarkMod }) => {
    const theme = useContext(SiteTheme);
    return <>

        <nav style={{ padding: "0" }} className={darkMod ? ("darkM navbar navbar-expand-lg ") : ("navbar navbar-dark navbar-expand-lg bg-dark")} >
            <div className="container-fluid ">
                <div style={{ marginTop: "10px" }} className="navbar-brand">
                    <Link id="navBrand" to="/">Card4-U</Link>
                    <button id="darkMod" style={{ color: theme.color, background: theme.background, marginLeft: "10px", borderRadius: "60%", paddingTop: "11px", paddingBottom: "8px" }} className="btn" onClick={() => setDarkMod(!darkMod)}>{darkMod ? (<i style={{ fontSize: "21px" }} className="fa-regular fa-moon"></i>) : (<i style={{ fontSize: "21px" }} className="fa-regular fa-sun"></i>)}</button>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/business-signup" className="nav-link">Business</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </>
}

export default StartNavbar;