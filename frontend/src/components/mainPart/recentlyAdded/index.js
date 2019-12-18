import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import Image from "../image";

const RecentlyAdded = ({ Store }) => {
    const list = Store.recentlyAdded;
    
    useEffect(() => {
        Store.getRecentlyAdded();
    }, [])

    return (
        <div className="container-fluid p-2">
            <h4 className="text-center text-muted mb-1">Recently Added</h4>
            <div className="row p-3">
                {list && list.map((img, i) => (
                    <Image img={img} key={i}/>
                ))}
            </div>
        </div>
    );
}

export default inject("Store")(observer(RecentlyAdded));