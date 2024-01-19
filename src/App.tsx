import React, {useCallback, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {LoginPage} from "./components/Content/LoginPage/LoginPage";
import {Navigate, Route, Routes} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {FindUsers} from "./components/Content/FindUsers/FindUsers";

function App() {
    const isLoginFromLocalstorage = localStorage.getItem('user is login');
    const initialStateForLogin = isLoginFromLocalstorage ? JSON.parse(isLoginFromLocalstorage) : false;
    const [isLogin, setIsLogin] = useState(initialStateForLogin);

    const isLoginUser = useCallback((isLogin: boolean) => {
        setIsLogin(isLogin);
        localStorage.setItem('user is login', JSON.stringify(isLogin))
    }, []);

    const isLogoutUser = useCallback(() => {
        setIsLogin(false);
        localStorage.removeItem('user is login');
    }, []);
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header onLogoutBtnClick={isLogoutUser}/>
                <Sidebar isLogin={isLogin}/>
                <div className='content'>
                    <Routes>
                        <Route path={'/'}
                               element={isLogin ? ( <Navigate to={'/profile'} /> ) : <LoginPage isLoginUser={isLoginUser} />}
                        />
                        <Route path={'/*'}
                               element={ <ErrorPage />}
                        />
                        <Route path={'/profile/'}
                               element={isLogin ? ( <Profile /> ) : <Navigate to={'/'}/>}
                        />
                        <Route path={'/dialogs/*'}
                               element={isLogin ? ( <Dialogs /> ) : <Navigate to={'/'}/>}
                        />
                        <Route path={'/find/*'}
                               element={isLogin ? ( <FindUsers /> ) : <Navigate to={'/'}/>}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;
