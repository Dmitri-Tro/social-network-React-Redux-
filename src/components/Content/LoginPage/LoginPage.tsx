import React, {FC} from "react";
import styles from "./LoginPage.module.css"
import {useAppDispatch, useAppSelector} from "../../../store/reduxStore";
import {Preloader} from "../../shared/Preloader/Preloader";
import {SubmitHandler, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {loginTC} from "../../../store/reducers/authReducer/authReducer";
import {Navigate} from "react-router-dom";

type LoginForm = {
    email: string,
    password: string,
    rememberMe: boolean
}

const schema = yup
    .object({
        email: yup.string().required().email().default(''),
        password: yup.string().required().min(4).default(''),
        rememberMe: yup.boolean().required().default(false)
    })
    .required()

export const LoginPage: FC= () => {
const dispatch = useAppDispatch();
    const authData = useAppSelector(state => state.userAuthData);
    const isLogin = useAppSelector(state => state.userAuthData.isLogin);

    const { register,
        formState: { errors },
        handleSubmit } = useForm<LoginForm>({
        resolver: yupResolver(schema)
    })
    const onSubmit: SubmitHandler<LoginForm> = (data) => dispatch(loginTC(data))



        if (isLogin) {
            return <Navigate to={'/profile'} />
        }

    if (authData.isFetching) {
        return <Preloader style={styles.preloader} />
    } else {
        return (
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputField}>
                        <label>E-mail</label>
                        <input className={styles.input} {...register("email")} />
                        <p className={styles.inputErrors}>{errors.email?.message}</p>
                    </div>
                    <div className={styles.inputField}>
                        <label>Password</label>
                        <input className={styles.input} type={"password"} {...register("password")}/>
                        <p className={styles.inputErrors}>{errors.password?.message}</p>
                    </div>
                    <div className={styles.rememberMeField}>
                        <input type={"checkbox"} id={'check'} {...register("rememberMe")} />
                        <label htmlFor={'check'} >Remember me</label>
                    </div>
                    <input className={styles.submitBtn} type="submit"/>
                </form>
            </div>
        )
    }
};
