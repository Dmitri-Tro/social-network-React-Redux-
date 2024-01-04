import React, {useReducer, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {LoginPage} from "./components/Content/LoginPage/LoginPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {usersData, friendsData, messagesData, postsData,} from './store/store'
import {
    FriendsDataType,
    MessageItemType,
    MessagesDataType,
    PostItemType,
    PostsDataType, UserFriend, UserItemType,
    UsersDataType
} from "./interfaces/types";
import {v1} from "uuid";
import {addMessageReducerAC, messagesReducer} from "./store/reducers/messages-reducer/messagesReducer";
import {addPostReducerAC, postsReducer} from "./store/reducers/posts-reducer/postsReducer";

const defaultUsersData = usersData;
const defaultFriendsData = friendsData;
const defaultMessagesData = messagesData;
const defaultPostsData = postsData;

function App() {

    const [usersData, setContactsData] = useState<UsersDataType>(defaultUsersData);
    const [friendsData, setFriendsData] = useState<FriendsDataType>(defaultFriendsData);
    const [verifiedUser, setVerifiedUser] = useState<UserItemType | null>(null);


    const [messagesData, dispatchMessagesData] = useReducer(messagesReducer, defaultMessagesData);
    // const [messagesData, setMessagesData] = useState<MessagesDataType>(defaultMessagesData);
    const [postsData, dispatchPostsData] = useReducer(postsReducer, defaultPostsData);
    // const [postsData, setPostsData] = useState<PostsDataType>(defaultPostsData);


    const loginUser = (currentUser: UserItemType) => {
        setVerifiedUser(currentUser)
    }

    const logoutUser = () => {
        setVerifiedUser(null);
    }

    const verifiedUserFriendsList: Array<UserFriend> = verifiedUser ?
        friendsData[verifiedUser.userId].map(friend => {
            const userFriend = usersData.find(user => user.userId === friend.friendId);
            return {
                friendId: friend.friendId,
                friendName: userFriend?.userName,
                friendAvatar: userFriend?.userAvatar,
            }
        })
        : [];
    const messagesDataForVerifiedUser = verifiedUser ?
        messagesData.filter(message => message.sendFromUserId === verifiedUser.userId || message.sendToUserId === verifiedUser.userId) : [];

    const addPost = (userId: string, title: string) => {
        dispatchPostsData(addPostReducerAC(userId, title));
    }

    const addNewMessage = (messageTitle: string) => {
        verifiedUser && dispatchMessagesData(addMessageReducerAC(messageTitle, verifiedUser, verifiedUserFriendsList));

    }


    return (
        <div className='wrapper'>
            <div className='container'>

                <Header logoutUser={logoutUser}/>

                {verifiedUser ? <Sidebar friendsData={verifiedUserFriendsList}/> : <Sidebar/>}

                <div className='content'>
                    <Routes>
                        <Route path={'/'}
                               element={verifiedUser ? (
                                   <Navigate to={'/profile'}/>
                               ) : <LoginPage usersData={usersData} loginUser={loginUser}/>
                               }
                        />
                        <Route path={'/*'}
                               element={<div>404 ErrorPageComponent</div>}
                        />
                        <Route path={'/profile/'}
                               element={verifiedUser ? (
                                   <Profile
                                       user={verifiedUser}
                                       postsData={postsData[verifiedUser.userId]}
                                       addPost={addPost}
                                   />
                               ) : <Navigate to={'/'}/>}
                        />
                        <Route path={'/dialogs/*'}
                               element={verifiedUser ? (
                                   <Dialogs
                                       verifiedUser={verifiedUser}
                                       userFriendsList={verifiedUserFriendsList}
                                       messagesData={messagesDataForVerifiedUser}
                                       addNewMessage={addNewMessage}
                                   />
                               ) : <Navigate to={'/'}/>}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
