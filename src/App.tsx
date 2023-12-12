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
                        <Route path={'/profile/*'}
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
