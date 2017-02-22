import React from 'react';
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";


import { Root } from "./Root";
import { Login } from "./auth/Login";
import { Logout } from "./auth/Logout";

class App extends React.Component {

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
}

ReactDOM.render(<App/>, window.document.getElementById("id-main"));
