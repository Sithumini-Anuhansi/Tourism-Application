import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo2.jpg";
import { isLoggedIn, isAdmin, clearSession } from "../../../utils/auth";

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const history = useHistory();

    const handleAdminLogin = () => {
        if (isAdmin()) {
            history.push("/admin");
        } else {
            history.push("/admin/login");
        }
    };

    const handleLogout = () => {
        clearSession();
        history.push("/");
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <img src={logo} alt="Site Logo" />
                </div>

                <nav className={mobile ? "nav-links mobile-nav" : "nav-links"}>
                    <ul>
                        {nav.map((item, index) => (
                            <li key={index} onClick={() => setMobile(false)}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-btn">
                    {!isLoggedIn() ? (
                        <Link to="/login" className="signin-btn-link">Sign in</Link>
                    ) : (
                        <button type="button" className="signin-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                    <button className="signin-btn" onClick={handleAdminLogin}>
                        {isAdmin() ? "Admin" : "Admin Login"}
                    </button>
                </div>

                <div className="mobile-toggle" onClick={() => setMobile(!mobile)}>
                    {mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                </div>
            </div>
        </header>
    );
};

export default Header;
