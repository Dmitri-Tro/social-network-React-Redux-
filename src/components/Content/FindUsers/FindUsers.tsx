import React, { FC } from "react";
import { UserCard } from "./UserCard/UserCard";
import styles from "./FindUsers.module.css";
import { Accordion } from "../../shared/Accordion/Accordion";
import { Pagination } from "../../shared/Pagination/Pagination";
import { useFindUsers } from "./useFindUsers/useFindUsers";
import { Input } from "../../shared/Input/Input";
import { Preloader } from "../../shared/Preloader/Preloader";
import { useAppSelector } from "store/reduxStore";
import { Navigate } from "react-router-dom";
import { selectIsLogin } from "store/reducers/authReducer/authSelectors";

export const FindUsers: FC = () => {
    const {
        users,
        pagesCount,
        pagesSize,
        currentPage,
        isFetching,
        filter,
        onFilterChange,
        onPageClick,
        onFirstPageClick,
        onLastPageClick,
        onPageSizeSelect,
    } = useFindUsers();

    const isLogin = useAppSelector(selectIsLogin);

    if (!isLogin) {
        return <Navigate to={"/login"} />;
    }

    return (
        <>
            <div className={styles.container}>
                {isFetching && <Preloader style={styles.preloader} />}
                <Input
                    type={"search"}
                    value={filter}
                    callback={onFilterChange}
                />
                <Pagination
                    pagesCount={pagesCount}
                    currentPage={currentPage}
                    onFirstPageClick={onFirstPageClick}
                    onPageClick={onPageClick}
                    onLastPageClick={onLastPageClick}
                />
                <ul className={styles.list}>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </ul>
                <Pagination
                    pagesCount={pagesCount}
                    currentPage={currentPage}
                    onFirstPageClick={onFirstPageClick}
                    onPageClick={onPageClick}
                    onLastPageClick={onLastPageClick}
                />
                <span className={styles.usersCountSpan}>Set users count on page</span>
                <Accordion title={pagesSize.toString()} type={"secondary"} onItemSelect={onPageSizeSelect} />
            </div>
        </>
    );
};
