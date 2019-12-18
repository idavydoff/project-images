import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import "./index.css";

const uConvert = (unicode) => `https://twemoji.maxcdn.com/svg/${unicode.codePointAt(0).toString(16)}.svg`;


const IClassesBar = ({ Store }) => {
    const classes = Store.iClassesList;

    useEffect(() => {
        Store.getIClassesList();
    }, [])

    return (
        <div className="container-fluid component classes-bar p-2">
            {classes && classes.map((cur, i) => (
                <p className="class-item d-flex justify-content-between align-items-center p-2 pl-3 pr-3">
                    <img src={uConvert(cur.emoji)} />
                    <span class="badge badge-light">{cur.quantity}</span>
                </p>
            ))}
        </div>
    );
}

export default inject("Store")(observer(IClassesBar));