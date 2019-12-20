import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import Image from "../image";

const RecentlyAdded = ({ Store, isHome }) => {
    const list = Store.recentlyAdded;
    
    useEffect(() => {
        Store.getRecentlyAdded(isHome, 1);
    }, [isHome])

    return (
        <div className="container-fluid p-2">
            {isHome ? (
                <Link to="/most-liked"><h4 className="text-center text-muted mb-1">Recently Added</h4></Link>
            ) : (
                <ul className="nav justify-content-center mb-4">
                    <li className="nav-item">
                        <Link className="nav-link" to="/most-liked">MostLiked</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/recently-added">Recently Added</Link>
                    </li>
                </ul>
            )}
            <div className="row p-3">
                {list && list.map((img, i) => (
                    <Image img={img} key={i}/>
                ))}
            </div>
        </div>
    );
}

export default inject("Store")(observer(RecentlyAdded));