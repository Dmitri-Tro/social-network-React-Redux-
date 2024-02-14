import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {LoginPage} from "./components/Content/LoginPage/LoginPage";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {FindUsers} from "./components/Content/FindUsers/FindUsers";
import {useAppDispatch} from "./store/reduxStore";
import {authMeTC} from "./store/reducers/authReducer/authReducer";

function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authMeTC());
    }, [dispatch]);

    return (
        <div className='wrapper'>
            <div className='container'>
                <Header />
                <Sidebar />
                <div className='content'>
                    <Routes>
                        <Route path={'/'}
                               element={ <Profile /> }
                        />
                        <Route path={'/*'}
                               element={ <ErrorPage /> }
                        />
                        <Route path={'/profile/:userId?'}
                               element={ <Profile /> }
                        />
                        <Route path={'/dialogs/*'}
                               element={ <Dialogs /> }
                        />
                        <Route path={'/find/'}
                               element={ <FindUsers /> }
                        />
                        <Route path={'/login/'}
                               element={ <LoginPage /> }
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;
