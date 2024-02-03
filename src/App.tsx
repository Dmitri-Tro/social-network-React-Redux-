import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {LoginPage} from "./components/Content/LoginPage/LoginPage";
import {Navigate, Route, Routes} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {FindUsers} from "./components/Content/FindUsers/FindUsers";
import {useSelector} from "react-redux";
import {RootState} from "./store/reduxStore";
import {UserAuthData} from "./interfaces/types";

function App() {

    const authData = useSelector<RootState, UserAuthData>(state => state.userAuthData);

    let isLogin = false;
    authData.id ? isLogin = true : isLogin = false

    return (
        <div className='wrapper'>
            <div className='container'>
                <Header onLogoutBtnClick={() => {}}/>
                <Sidebar isLogin={isLogin}/>
                <div className='content'>
                    <Routes>
                        <Route path={'/'}
                               element={isLogin ? ( <Navigate to={'/profile'} /> ) : <LoginPage isLoginUser={() => {}} />}
                        />
                        <Route path={'/*'}
                               element={ <ErrorPage />}
                        />
                        <Route path={'/profile/:userId?'}
                               element={isLogin ? ( <Profile /> ) : <Navigate to={'/'}/>}
                        />
                        <Route path={'/dialogs/*'}
                               element={isLogin ? ( <Dialogs /> ) : <Navigate to={'/'}/>}
                        />
                        <Route path={'/find/'}
                               element={isLogin ? ( <FindUsers /> ) : <Navigate to={'/'}/>}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;
