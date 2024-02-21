import React, { FC } from "react";
import styles from "./Sidebar.module.css";
import { Friends } from "./Friends/Friends";
import { useAppSelector } from "store/reduxStore";
import { selectUserAuthData } from "store/reducers/authReducer/authSelectors";
import { SideBarItem } from "components/Sidebar/SideBarItem/SideBarItem";

export const Sidebar: FC = () => {
    const authData = useAppSelector(selectUserAuthData);

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <ul>
                    <SideBarItem title='Profile'
                                 navTo='/profile'
                                 itemStyles={styles.item}
                                 linkStyles={styles.item_link}
                                 linkStylesActive={styles.item_link_active}
                    />
                    <SideBarItem title='Dialogs'
                                 navTo='/dialogs'
                                 itemStyles={styles.item}
                                 linkStyles={styles.item_link}
                                 linkStylesActive={styles.item_link_active}
                    />
                    <SideBarItem title='Find users'
                                 navTo='/find'
                                 itemStyles={styles.item}
                                 linkStyles={styles.item_link}
                                 linkStylesActive={styles.item_link_active}
                    />
                    <li className={styles.item}>Newsfeed</li>
                    <li className={styles.item}>Friends</li>
                    <li className={styles.item}>Settings</li>
                </ul>
            </nav>
            {authData.isLogin && <Friends />}
        </div>
    );
};
