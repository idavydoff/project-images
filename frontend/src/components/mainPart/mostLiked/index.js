import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import Image from "../image";

const MostLiked = ({ Store, isHome }) => {
    const list = Store.mostLiked;
    
    useEffect(() => {
        Store.getMostLiked(isHome, 1);
    }, [isHome])

    return (
        <div className="container-fluid p-2">
            {isHome ? (
                <Link to="/most-liked"><h4 className="text-center text-muted mb-1">Most Liked</h4></Link>
            ) : (
                <ul className="nav justify-content-center mb-4">
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/most-liked">MostLiked</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/recently-added">Recently Added</Link>
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

export default inject("Store")(observer(MostLiked));