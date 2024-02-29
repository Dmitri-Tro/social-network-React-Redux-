import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { reduxStore } from "store/reduxStore";
import * as process from "process";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </HashRouter>,
    // </BrowserRouter>
);
