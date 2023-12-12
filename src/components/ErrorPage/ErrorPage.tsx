import { useRouteError } from "react-router-dom";
import styles from './errorPage.module.css'



export const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className={styles.errorPage} id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}