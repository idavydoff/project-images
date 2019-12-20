import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./index.css";

const uConvert = (unicode) => `https://twemoji.maxcdn.com/svg/${unicode.codePointAt(0).toString(16)}.svg`;

const IClassesBar = ({ Store }) => {
    const classes = Store.iClassesList;

    useEffect(() => {
        Store.getIClassesList();
    }, []);

    return (
        <div className="container-fluid component classes-bar p-2">
            {classes && classes.map((cur, i) => (
                <Link to={`/emoji/${cur.emoji}`} key={i}>
                    <p className="class-item d-flex justify-content-between align-items-center p-2 pl-3 pr-3">
                        <img src={uConvert(cur.emoji)} />
                        <span className="badge badge-dark">{cur.quantity}</span>
                    </p>
                </Link>
            ))}
        </div>
    );
}

export default inject("Store")(observer(IClassesBar));