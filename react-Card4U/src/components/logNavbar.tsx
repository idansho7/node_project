import { FunctionComponent, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiteTheme } from "../App";

interface LogNavbarProps {
    darkMod: boolean
    setDarkMod: Function
    setLogged: Function
    setBis: Function
    bis: boolean
    quan: number;
}

const LogNavbar: FunctionComponent<LogNavbarProps> = ({ darkMod, setDarkMod, setLogged, setBis, bis, quan }) => {
    const theme = useContext(SiteTheme);
    let nav = useNavigate();
    useEffect(() => {
    }, [quan])
    return <>
        <nav style={{ padding: "0" }} className={darkMod ? ("darkM navbar navbar-expand-lg ") : ("navbar navbar-dark navbar-expand-lg bg-dark")} >
            <div className="container-fluid ">
                <div style={{ marginTop: "10px" }} className="navbar-brand">
                    <Link style={{ cursor: "default" }} id="navBrand" to="/">Card4-U</Link>
                    <button id="darkMod" style={{ color: theme.color, background: theme.background, marginRight: "10px", marginLeft: "10px", borderRadius: "60%", paddingTop: "11px", paddingBottom: "8px" }} className="btn" onClick={() => setDarkMod(!darkMod)}>{darkMod ? (<i style={{ fontSize: "21px" }} className="fa-regular fa-moon"></i>) : (<i style={{ fontSize: "21px" }} className="fa-regular fa-sun"></i>)}</button>
                    <button
                        style={{ marginBottom: "10px" }}
                        onClick={() => {
                            localStorage.setItem("userData", JSON.stringify({ logged: false }));
                            setLogged(false);
                            setBis(false);
                            nav("/");
                            localStorage.removeItem("quantity");
                        }}
                        className="btn btn-danger">log out</button>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">About</Link>
                        </li>

                        {bis ?
                            (
                                <>
                                    <li className="nav-item position-relative">
                                        <Link to="/add-card" className="nav-link">New Card
                                        </Link>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <Link to="/my-cards" className="nav-link">My Cards
                                            <span className="linkSpanMedia bg-warning">{quan ? (`${quan}`) : ("0")}</span>
                                            <span id="linkSpan" className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-warning">
                                                {`${quan}`}
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            )
                            :
                            (
                                <>
                                    <li className="nav-item position-relative">
                                        <Link to="/new-card" className="nav-link disabled">New Card
                                            <span className="linkSpanMedia">only Business</span>
                                            <span id="linkSpan" className="position-absolute top-10 start-50 translate-middle badge rounded-pill">
                                                only Business
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <Link to="/my-cards" className="nav-link disabled">My Cards
                                            <span className="linkSpanMedia">only Business</span>
                                            <span id="linkSpan" className="position-absolute top-10 start-50 translate-middle badge rounded-pill">
                                                only Business
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            )}

                        <li className="nav-item">
                            <Link to="/all-cards" className="nav-link">All Cards</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </>
}

export default LogNavbar;