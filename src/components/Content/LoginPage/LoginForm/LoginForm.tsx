import React, { FC } from "react";
import styles from "./loginForm.module.css";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginTC } from "store/reducers/authReducer/authReducer";
import { selectCaptcha } from "store/reducers/authReducer/authSelectors";

type LoginFormT = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: string;
};

const schema = yup // form validation with yup library
    .object({
        email: yup.string().required().email().default(""),
        password: yup.string().required().min(4).default(""),
        rememberMe: yup.boolean().required().default(false),
        captcha: yup.string(),
    })
    .required();

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch();
    const captcha = useAppSelector(selectCaptcha);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginFormT>({
        resolver: yupResolver<LoginFormT>(schema), // use form resolve and validation with yup library
    });
    const onSubmit: SubmitHandler<LoginFormT> = (data) => dispatch(loginTC(data)); // on submit form login user

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputField}>
                <label>E-mail</label>
                <input className={styles.input} {...register("email")} />
                <p className={styles.inputErrors}>{errors.email?.message}</p>
            </div>
            <div className={styles.inputField}>
                <label>Password</label>
                <input className={styles.input} type={"password"} {...register("password")} />
                <p className={styles.inputErrors}>{errors.password?.message}</p>
            </div>
            <div className={styles.rememberMeField}>
                <input type={"checkbox"} id={"check"} {...register("rememberMe")} />
                <label htmlFor={"check"}>Remember me</label>
            </div>
            {captcha && ( // if incorrect data is entered repeatedly - show captcha
                <>
                    <span>Enter symbols: </span>
                    <img alt={"captcha"} src={captcha} />
                    <input className={styles.input} {...register("captcha")} />
                </>
            )}
            <input className={styles.submitBtn} type="submit" />
        </form>
    );
};
