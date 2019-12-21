import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import Image from "../image";

const RecentlyAdded = ({ Store, isHome }) => {
    const list = Store.recentlyAdded;
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        Store.clearAll();
        Store.getRecentlyAdded(isHome, 1);
        setPage(1);
    }, [location])

    const loadNew = () => {
        setPage(page+1);
        Store.getRecentlyAdded(isHome, page + 1);
    }

    return (
        <div className="container-fluid p-2">
            <h4 className="text-center text-muted mb-1">Recently Added</h4>
            <div className="row p-3">
                {list && list.map((img, i) => (
                    <Image img={img} key={i}/>
                ))}
            </div>
            {(!isHome && Store.canLoad) && <center><button className="btn btn-info mb-2" onClick={loadNew}>More</button></center>}
        </div>
    );
}

export default inject("Store")(observer(RecentlyAdded));