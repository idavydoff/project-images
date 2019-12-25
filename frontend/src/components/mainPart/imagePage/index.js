import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import "./index.css";

const ImagePage = ({ Store, match }) => {
    const imgData = Store.imageData;
    const date = new Date(imgData?.date.slice(0, -3) * 1000);

    useEffect(() => {
        Store.getImage(match.params.id);
    }, [])

    const pressLikeButton = () => {
        Store.imageData.likes += 1;
        Store.setLike(match.params.id);
    }

    return (
        <div className="container-fluid pt-3 pb-3 pl-0 pr-0">
            <div className="img-container">
                <img src={`/images/${imgData?.path}`}/>
            </div>
            <ul className="nav nav-justified mt-4">
                <li className="nav-item">
                    <h3 className="nav-link mb-0">{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</h3>
                </li>
                <li className="nav-item image-like">
                    <h3 className="nav-link mb-0 text-danger">{imgData?.likes} <i className="fas fa-heart" onClick={!Store.setLikeData ? pressLikeButton : null} /></h3>
                </li>
            </ul>
        </div>
    );
}

export default inject("Store")(observer(ImagePage));