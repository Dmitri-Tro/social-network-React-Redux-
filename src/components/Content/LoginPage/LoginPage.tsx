import React, {FC, memo} from "react";
import {Input} from "../../shared/Input/Input";
import styles from "./LoginPage.module.css"
import {Button} from "../../shared/Button/Button";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reduxStore";
import {UserAuthData} from "../../../interfaces/types";
import {Preloader} from "../../shared/Preloader/Preloader";

type LoginPageProps = {
    isLoginUser: (isLogin: boolean) => void
}
export const LoginPage: FC<LoginPageProps> = memo(({isLoginUser}) => {
    const authData = useSelector<RootState, UserAuthData>(state => state.userAuthData);
    if (authData.isFetching) {
        return <Preloader style={styles.preloader} />
    } else {
        return (
            <form className={styles.container}>
                <Input
                    type={'text'}
                    value={''}
                    callback={(e) => {
                    }}
                    autoFocus={true}
                    autoComplete={"on"}
                    placeholder='Write your name'
                    style={styles.input}
                />
                <Input
                    type={'password'}
                    value={''}
                    callback={(e) => {
                    }}
                    autoFocus={true}
                    autoComplete={"on"}
                    placeholder='Write your password'
                    style={styles.input}
                />
                {false && <span>User name or password entered incorrectly</span>}
                <Button title={'Login'} callback={() => {
                }} type={"main"}
                        isDisabled={true}/>
            </form>
        )
    }
});
