import React from 'react';
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import {App} from './App';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        window.document.getElementById("id-main")
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    });
}