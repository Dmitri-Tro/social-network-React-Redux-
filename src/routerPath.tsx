import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {ErrorPage} from "./components/ErrorPage/ErrorPage";


export const routerPath = createBrowserRouter([
    {
        path: "*",
        element: <App />,
        errorElement: <ErrorPage />
    },

]);