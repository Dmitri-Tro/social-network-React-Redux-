import {useCallback, useState} from "react";

export const useApp = () => {
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
    return {isLogin, isLoginUser, isLogoutUser}
}