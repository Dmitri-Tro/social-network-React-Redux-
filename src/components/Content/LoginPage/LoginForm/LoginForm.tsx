import React, { FC } from "react";
import styles from './loginForm.module.css'
import { useAppDispatch } from "store/reduxStore";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginTC } from "store/reducers/authReducer/authReducer";

type LoginFormT = {
    email: string;
    password: string;
    rememberMe: boolean;
};

const schema = yup
    .object({
        email: yup.string().required().email().default(""),
        password: yup.string().required().min(4).default(""),
        rememberMe: yup.boolean().required().default(false),
    })
    .required();

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginFormT>({
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<LoginFormT> = (data) => dispatch(loginTC(data));

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
                    <input className={styles.submitBtn} type="submit" />
                </form>
        );
};
