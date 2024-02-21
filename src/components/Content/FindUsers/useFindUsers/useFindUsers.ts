import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { getUsersTC, setCurrentPageAC, setPageSizeAC } from "store/reducers/usersReducer/usersReducer";
import { selectUsersData } from "store/reducers/usersReducer/usersSelectors";

export const useFindUsers = () => {
    const dispatch = useAppDispatch();
    const usersData = useAppSelector(selectUsersData);
    const [filter, setFilter] = useState("");

    const users = usersData.users;
    const pagesSize = usersData.pageSize;
    const currentPage = usersData.page;
    const isFetching = usersData.isFetching;

    useEffect(() => {
        dispatch(getUsersTC(pagesSize, currentPage));
    }, [dispatch, pagesSize, currentPage]);

    const onFilterChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    }, []);

    const pagesCount = Math.ceil(usersData.totalCount / pagesSize);

    const onPageClick = useCallback(
        (p: number) => {
            dispatch(setCurrentPageAC(p));
        },
        [dispatch],
    );

    const onFirstPageClick = useCallback(() => {
        dispatch(setCurrentPageAC(1));
    }, [dispatch]);

    const onLastPageClick = useCallback(() => {
        dispatch(setCurrentPageAC(pagesCount));
    }, [dispatch, pagesCount]);

    const onPageSizeSelect = useCallback(
        (item: string) => {
            dispatch(setPageSizeAC(item));
        },
        [dispatch],
    );

    return {
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
    };
};
