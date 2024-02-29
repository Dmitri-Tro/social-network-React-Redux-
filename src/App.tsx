import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Header } from "components/Header/Header";
import { Sidebar } from "components/Sidebar/Sidebar";
import { Profile } from "components/Content/Profile/Profile";
import { FindUsers } from "components/Content/FindUsers/FindUsers";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { authMeTC } from "store/reducers/authReducer/authReducer";
import { ErrorSnackbar } from "components/ErrorSnackbar/ErrorSnackbar";
import { CircularProgress } from "@mui/material";
import { selectIsInitialized } from "store/reducers/appReducer/appSelectors";
import { setErrorAC } from "store/reducers/appReducer/appReducer";

// The loading of these components has been deferred until needed
const Dialogs = lazy(() => import("components/Content/Dialogs/Dialogs"));
const LoginPage = lazy(() => import("components/Content/LoginPage/LoginPage"));
const ErrorPage = lazy(() => import("components/ErrorPage/ErrorPage"));

function App() {
    const dispatch = useAppDispatch();
    const setIsInitialized = useAppSelector(selectIsInitialized);

    useEffect(() => {
        dispatch(authMeTC()); // authorise user and initialize App
        window.addEventListener("unhandledrejection", (e) => setErrorAC(e.reason.message)); // handle all uncaught errors
        return window.removeEventListener("unhandledrejection", (e) => setErrorAC(e.reason.message)); // unsubscribe from listener
    }, [dispatch]);

    if (!setIsInitialized) { // if App not initialized show preloader
        return (
            <div className={"preloader"}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <Sidebar />
                <div className="content">
                    <Suspense fallback={<CircularProgress />}>
                        <Routes>
                            <Route path={"/"} element={<Navigate to={"/profile"} />} />
                            <Route path={"/profile/:userId?"} element={<Profile />} />
                            <Route path={"/dialogs/*"} element={<Dialogs />} />
                            <Route path={"/find/"} element={<FindUsers />} />
                            <Route path={"/login/"} element={<LoginPage />} />
                            <Route path={"*"} element={<ErrorPage />} />
                        </Routes>
                    </Suspense>
                </div>
                <ErrorSnackbar />
            </div>
        </div>
    );
}

export default App;
