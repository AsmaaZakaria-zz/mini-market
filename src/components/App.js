import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../history";
import NotFound from "./NotFound";
import ProductsList from "../modules/product/components/ProductsList";
import ProductView from "../modules/product/components/ProductView";

const App = () => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={ProductsList} />
                    <Route exact path="/list" component={ProductsList} />
                    <Route path="/list/:productID" component={ProductView} />
                    <Route path="/notFound" component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
