import React, {FC, memo} from "react";
import styles from "./preloader.module.css"
import preloader from "../../../images/preloader.svg";

type PreloaderProps = {
    style?: string
}

export const Preloader: FC<PreloaderProps> = memo(({style}) => {
    return (
        <img className={styles.main + ' ' + style} src={preloader} alt={'page is loading'}/>
    )
});