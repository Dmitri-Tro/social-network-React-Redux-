import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {LoginPage} from "./components/Content/LoginPage/LoginPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {usersData, friendsData} from './store/store'
import {
    FriendsDataType, MessagesDataType, PostsDataType,
    UserFriend,
    UserItemType,
    UsersDataType
} from "./interfaces/types";
import {addMessageReducerAC} from "./store/reducers/messages-reducer/messagesReducer";
import {addPostReducerAC} from "./store/reducers/posts-reducer/postsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/reduxStore";

const defaultUsersData = usersData;
const defaultFriendsData = friendsData;

function App() {

    const [usersData, setContactsData] = useState<UsersDataType>(defaultUsersData);
    const [friendsData, setFriendsData] = useState<FriendsDataType>(defaultFriendsData);
    const [verifiedUser, setVerifiedUser] = useState<UserItemType | null>(null);

    const dispatch = useDispatch();
    const messagesData = useSelector<RootState, MessagesDataType>( state => state.messagesData );
    const postsData = useSelector<RootState, PostsDataType>( state => state.postsData );

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
        dispatch(addPostReducerAC(userId, title));
    }

    const addNewMessage = (messageTitle: string) => {
        verifiedUser && dispatch(addMessageReducerAC(messageTitle, verifiedUser, verifiedUserFriendsList));

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
