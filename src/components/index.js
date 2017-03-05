import React from 'react';
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import {App} from './App';

const render = (Component) => {
    console.log("rendering 1...!!!");
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        window.document.getElementById("id-main")
    );
    console.log("rendering 2...!!!");
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    console.log("rendering 3...!!!");
    module.hot.accept('./App', () => {
        console.log("rendering 4...!!!");
        render(App)
    });
}

// ReactDOM.render(<App/>, window.document.getElementById("id-main"));
