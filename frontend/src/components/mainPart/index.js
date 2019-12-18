import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
// import styles from './index.css';

const mainPart = ({ Store }) => {
    return (
        <div className="container-fluid component">
            <br />
        </div>
    );
}

export default inject("Store")(observer(mainPart));