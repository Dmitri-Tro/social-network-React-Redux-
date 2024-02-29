import React, { FC } from "react";
import styles from "./Dialogs.module.css";
import { Messages } from "./Messages/Messages";
import { Contacts } from "./Contacts/Contacts";
import { useAppSelector } from "store/reduxStore";
import { Navigate } from "react-router-dom";
import { selectIsLogin } from "store/reducers/authReducer/authSelectors";

const Dialogs: FC = () => {
    const isLogin = useAppSelector(selectIsLogin);

    if (!isLogin) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>DIALOGS</h2>
            <div className={styles.main}>
                <Contacts />
                <Messages />
            </div>
        </div>
    );
};

export default Dialogs;
