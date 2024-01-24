import React, {FC, memo} from "react";
import {Input} from "../../shared/Input/Input";
import styles from "./LoginPage.module.css"
import {Button} from "../../shared/Button/Button";
import {useLogin} from "./useLogin/useLogin";

type LoginPageProps = {
    isLoginUser: (isLogin: boolean) => void
}
export const LoginPage: FC<LoginPageProps> = memo(({isLoginUser}) => {

    const {
        nameValue,
        passwordValue,
        isLogin,
        setNameValue,
        setPasswordValue,
        onLoginBtnClickHandler
    } = useLogin(isLoginUser);

    return (
        <form className={styles.container}>
            <Input
                type={'text'}
                value={nameValue}
                callback={(e) => {
                    setNameValue(e.currentTarget.value)
                }}
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
            {!isLogin && <span>User name or password entered incorrectly</span>}
            <Button title={'Login'} callback={onLoginBtnClickHandler} type={"main"}
                    isDisabled={!passwordValue || !nameValue}/>
        </form>
    )
});
