import React, {FC, memo, useState} from "react";
import {UserAuthData} from "../../../interfaces/types";
import {Input} from "../../shared/Input/Input";
import styles from "./LoginPage.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reduxStore";
import {Button} from "../../shared/Button/Button";

type LoginPageProps = {
    isLoginUser: (isLogin: boolean) => void
}
export const LoginPage: FC<LoginPageProps> = memo(({isLoginUser}) => {

    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');

    const userAuthData = useSelector<RootState, UserAuthData>(state => state.userAuthData);

    let isLogin = true;
    const onLoginBtnClickHandler = () => {
        isLogin = userAuthData.name === nameValue && userAuthData.password === passwordValue;
        isLogin && isLoginUser(isLogin);
    };
    return (
        <form className={styles.container}>
            <Input
                type={'text'}
                value={nameValue}
                callback={(e) => {setNameValue(e.currentTarget.value)}}
                autoFocus={true}
                autoComplete={"on"}
                placeholder='Write your name'
                style={styles.input}
            />
            <Input
                type={'password'}
                value={passwordValue}
                callback={(e) => setPasswordValue(e.currentTarget.value)}
                autoFocus={true}
                autoComplete={"on"}
                placeholder='Write your password'
                style={styles.input}
            />
            {!isLogin  && <span>User name or password entered incorrectly</span>}
            <Button title={'Login'} callback={onLoginBtnClickHandler} type={"main"} isDisabled={!passwordValue || !nameValue} />
        </form>
    )
});
