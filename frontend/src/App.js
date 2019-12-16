import React from "react";
import { observer, inject } from "mobx-react";

const app = ({ Store }) => {
    return (
        <h1>{Store.show ? 1 : 0}</h1>
    );
}

export default inject("Store")(observer(app));