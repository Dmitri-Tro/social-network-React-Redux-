import {useCallback, useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {UserAuthData} from "../../../../interfaces/types";

export const useLogin = (isLoginUser: (isLogin: boolean) => void) => {
    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');

    const userAuthData = useSelector<RootState, UserAuthData>(state => state.userAuthData);

    const isLogin = useMemo(() => {
        return userAuthData.name === nameValue && userAuthData.password === passwordValue;
    }, [userAuthData.name, nameValue, userAuthData.password, passwordValue])

    const onLoginBtnClickHandler = useCallback(() => {
        isLogin && isLoginUser(isLogin);
    }, [isLogin, isLoginUser]);

    return {nameValue, passwordValue, isLogin, setNameValue, setPasswordValue, onLoginBtnClickHandler}
}