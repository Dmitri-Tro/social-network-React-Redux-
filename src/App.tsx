import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {store} from "./store/store";
import {
    FriendsDataType,
    MessageItemType,
    MessagesDataType,
    PostItemType,
    PostsDataType,
    UsersDataType
} from "./interfaces/types";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";

function App() {

    const [messagesData, setMessagesData] = useState<MessagesDataType>(store.messagesData);
    const [usersData, setContactsData] = useState<UsersDataType>(store.usersData);
    const [postsData, setPostsData] = useState<PostsDataType>(store.postsData);
    const [friendsData, setFriendsData] = useState<FriendsDataType>(store.friendsData);

    const setNewPostsData = (newPost: PostItemType) => {
        setPostsData([newPost, ...postsData])
    }

    const setNewMessagesData = (newMessage: MessageItemType) => {
        setMessagesData([newMessage, ...messagesData])
    }
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header/>
                <Sidebar friendsData={friendsData}/>
                <div className='content'>
                    <Routes>
                        <Route path={'/'}
                               element={<img className={'main-page'} alt={'network presentation logo'} src='https://uploads.turbologo.com/uploads/design/hq_preview_image/1503315/draw_svg20210630-4871-1vsl6q8.svg.png' />}
                        />
                        <Route path={'/*'}
                               element={<div>404 ErrorPageComponent</div>}
                        />
                        <Route path={'/profile/'}
                               element={<Profile
                                   postsData={postsData}
                                   setPostsData={setNewPostsData}
                               />}
                        />
                        <Route path={'/dialogs/*'}
                               element={<Dialogs
                                   usersData={usersData}
                                   messagesData={messagesData}
                                   setMessagesData={setNewMessagesData}
                               />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
