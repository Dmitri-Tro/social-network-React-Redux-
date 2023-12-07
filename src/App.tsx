import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";

function App() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header />
                <Sidebar />
                <div className='content'>
                    <Profile />
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
