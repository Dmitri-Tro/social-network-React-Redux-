import React, {useState} from 'react';
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

const defaultUsersData = usersData;
const defaultFriendsData = friendsData;
const defaultMessagesData = messagesData;
const defaultPostsData = postsData;

function App() {
    const [usersData, setContactsData] = useState<UsersDataType>(defaultUsersData);
    const [friendsData, setFriendsData] = useState<FriendsDataType>(defaultFriendsData);
    const [messagesData, setMessagesData] = useState<MessagesDataType>(defaultMessagesData);
    const [postsData, setPostsData] = useState<PostsDataType>(defaultPostsData);
    const [verifiedUser, setVerifiedUser] = useState<UserItemType | null>(null)

    const loginUser = (currentUser: UserItemType) => {
        setVerifiedUser(currentUser)
    }

    const logoutUser = () => {
        setVerifiedUser(null);
    }

    const setNewPostsData = (userId: string, newPost: PostItemType) => {
        setPostsData({...postsData, [userId]: [newPost, ...postsData[userId]]});
    }

    const setNewMessagesData = (newMessage: MessageItemType) => {
        setMessagesData([newMessage, ...messagesData]);
    }

    const verifiedUserFriendsList: Array<UserFriend> = verifiedUser ?
        friendsData[verifiedUser.userId].map(friend => {
            const userFriend= usersData.find(user => user.userId === friend.friendId);
            return {
                friendId: friend.friendId,
                friendName: userFriend?.userName,
                friendAvatar: userFriend?.userAvatar,
            }
        })
        : [];
    const messagesDataForVerifiedUser =verifiedUser ?
        messagesData.filter(message => message.sendFromUserId === verifiedUser.userId || message.sendToUserId === verifiedUser.userId): [];

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
                                       setPostsData={setNewPostsData}
                                   />
                               ) : <Navigate to={'/'}/>}
                        />
                        <Route path={'/dialogs/*'}
                               element={verifiedUser ? (
                                   <Dialogs
                                       verifiedUser={verifiedUser}
                                       userFriendsList={verifiedUserFriendsList}
                                       messagesData={messagesDataForVerifiedUser}
                                       setMessagesData={setNewMessagesData}
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
