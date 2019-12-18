import React, { useEffect, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { Switch, Route } from "react-router"
import MostLiked from "./mostLiked";
import RecentlyAdded from "./recentlyAdded";
import "./index.css";

const mainPart = ({ Store }) => {
    return (
        <div className="container-fluid component">
            <Switch>
                <Route exact path="/" render={() => (
                    <Fragment>
                        <MostLiked />
                        <RecentlyAdded />
                    </Fragment>
                )} />

                <Route render={({ location }) => (
                    <h1 className="text-center p-3"><code>No match for {location.pathname}</code></h1>
                )} />
            </Switch>
        </div>
    );
}

export default inject("Store")(observer(mainPart));