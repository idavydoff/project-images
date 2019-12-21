import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    return (
        <div className="container-fluid component p-2">
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname.includes("most-liked")  && "active"}`} to="/most-liked">Most Liked</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname == "/" && "active"}`} to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname.includes("recently-added") && "active"}`} to="/recently-added">Recently Added</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;