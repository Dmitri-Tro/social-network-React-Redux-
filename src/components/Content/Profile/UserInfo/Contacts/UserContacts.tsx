import { FC, memo } from "react";
import styles from "components/Content/Profile/UserInfo/UserInfo.module.css";

type AboutUserProps = {
    title: string;
    value: string;
};
export const UserContacts: FC<AboutUserProps> = memo(({ title, value }) => {
    return (
        <div className={styles.infoBlock + " " + styles.contact}>
            <span className={styles.item}>{title}: </span>
            <a href={value} className={styles.itemValue}>
                {value}
            </a>
        </div>
    );
});
