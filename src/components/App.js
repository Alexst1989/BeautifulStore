/**
 * Created by alexp on 05.03.2017.
 */
import React from 'react';
import {Router, Route, browserHistory} from "react-router";
import {Root} from "./Root";
import {Login} from "./auth/Login";
import {Logout} from "./auth/Logout";

export class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    // <Route path={"/login"} login={{length:2}} component={Login}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/logout"} component={Logout}/>
                </Route>
            </Router>
        );
    }
};