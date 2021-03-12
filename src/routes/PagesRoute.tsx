import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import { Routes } from "./Routes";

export default class PagesRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <PrivateRoute exact path={Routes.HOME}>
                        <Home />
                    </PrivateRoute>
                    <PrivateRoute exact path={Routes.DETAIL}>
                        <Detail />
                    </PrivateRoute>
                    <PrivateRoute exact path={Routes.LOGIN}>
                        <Login />
                    </PrivateRoute>
                    <PrivateRoute exact path={Routes.NOT_FOUND}>
                        <NotFound />
                    </PrivateRoute>
                </Switch>
            </Router>

        );
    }
}