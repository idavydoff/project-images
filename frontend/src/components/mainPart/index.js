import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import MostLiked from "./mostLiked";
import "./index.css";
import RecentlyAdded from "./recentlyAdded";

const mainPart = ({ Store }) => {
    return (
        <div className="container-fluid component">
            <MostLiked />
            <RecentlyAdded />
        </div>
    );
}

export default inject("Store")(observer(mainPart));