import React, { useEffect, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { Switch, Route } from "react-router"
import MostLiked from "./mostLiked";
import RecentlyAdded from "./recentlyAdded";
import ByEmoji from "./byEmoji";
import ImagePage from "./imagePage";
import "./index.css";

const mainPart = ({ Store }) => {
    return (
        <div className="container-fluid component">
            <Switch>
                <Route exact path="/" render={() => (
                    <Fragment>
                        <MostLiked isHome/>
                        <RecentlyAdded isHome/>
                    </Fragment>
                )} />

                <Route path="/most-liked" component={MostLiked} />
                <Route path="/recently-added" component={RecentlyAdded} />
                <Route path="/emoji/:emoji" component={ByEmoji} />
                <Route path="/image/:id" component={ImagePage} />

                <Route render={({ location }) => (
                    <h1 className="text-center p-3"><code>No match for {location.pathname}</code></h1>
                )} />
            </Switch>
        </div>
    );
}

export default inject("Store")(observer(mainPart));