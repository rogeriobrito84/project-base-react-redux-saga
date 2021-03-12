import { Component } from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { Routes } from "./Routes";

interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export default class PrivateRoute extends Route<Props> {

    render() {
        let isLogged = true;
        if (!isLogged) {
            return (
                <Redirect 
                    to={{
                        pathname: Routes.LOGIN,
                        state: {from: this.props.location?.pathname}
                    }}
                />
            )
        }

        return <Route {...this.props} component={Component} />
       
    }
}