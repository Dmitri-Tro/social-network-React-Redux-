import React, {FC, useState} from "react";
import {UserItemType, UsersDataType} from "../../../interfaces/types";
import {useNavigate} from "react-router-dom";

type LoginPageProps = {
    usersData: UsersDataType
    loginUser: (currentUser: UserItemType) => void
}
export const LoginPage: FC<LoginPageProps> = ({usersData, loginUser}) => {

    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const navigate = useNavigate();
    const verifyUser = () => {
       const currentUser = usersData.find(user => user.userName === nameValue && user.userPassword === passwordValue);
        if (currentUser) {
            loginUser(currentUser);
            setIsLogin(true);
            navigate('/profile')
        } else {
            setIsLogin(false);
        }
    }

    return (
        <>
            <textarea
                wrap='hard'
                placeholder='Write your name'
                value={nameValue}
                onChange={(e) => setNameValue(e.currentTarget.value)}
            />
            <textarea
                wrap='hard'
                placeholder='Write password'
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.currentTarget.value)}
            />
            {!isLogin  && <span>User name or password entered incorrectly</span>}
            <button onClick={verifyUser}>Login</button>
        </>
    )
}
