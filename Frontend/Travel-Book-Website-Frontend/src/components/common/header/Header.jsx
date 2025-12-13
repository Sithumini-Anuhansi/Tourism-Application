import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.jpg";

const Header = () => {
    const [mobile, setMobile] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="Site Logo" />
                </div>

                {/* Navigation */}
                <nav className={mobile ? "nav-links mobile-nav" : "nav-links"}>
                    <ul>
                        {nav.map((item, index) => (
                            <li key={index} onClick={() => setMobile(false)}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Sign-in Button */}
                <div className="header-btn">
                    <button className="signin-btn">Sign In</button>
                </div>

                {/* Mobile Toggle Button */}
                <div className="mobile-toggle" onClick={() => setMobile(!mobile)}>
                    {mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                </div>
            </div>
        </header>
    );
};

export default Header;
