import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {UsersData} from "../../../../interfaces/types";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {usersApi} from "../../../../api/users-api/usersApi";
import {
    setCurrentPageAC,
    setIsFetchingAC,
    setPageSizeAC,
    setUsersAC
} from "../../../../store/reducers/usersReducer/usersReducer";


export const useFindUsers = () => {
    const dispatch = useDispatch();
    const usersData = useSelector<RootState, UsersData>(state => state.usersData);
    const [filter, setFilter] = useState('');

    const users = usersData.users;
    const pagesSize = usersData.pageSize;
    const currentPage = usersData.page;
    const isFetching = usersData.isFetching;

    useEffect(() => {
        const uriParams = {
            count: pagesSize,
            page: currentPage,
            term: ''
        };
        dispatch(setIsFetchingAC(true));
        usersApi.getUsers(uriParams)
            .then(res => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUsersAC(res.data.items, res.data.totalCount));
            })
    }, [dispatch, pagesSize, currentPage]);

    const onFilterChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value)
    }, [])

    const pagesCount = Math.ceil(usersData.totalCount / pagesSize);

    const onPageClick = useCallback((p: number) => {
        dispatch(setCurrentPageAC(p));
    }, [dispatch]);

    const onFirstPageClick = useCallback(() => {
        dispatch(setCurrentPageAC(1));
    }, [dispatch]);

    const onLastPageClick = useCallback(() => {
        dispatch(setCurrentPageAC(pagesCount));
    }, [dispatch, pagesCount]);

    const onPageSizeSelect = useCallback((item: string) => {
        dispatch(setPageSizeAC(item));
    }, [dispatch]);

    return {users, pagesCount, pagesSize, currentPage, isFetching, filter, onFilterChange, onPageClick, onFirstPageClick, onLastPageClick, onPageSizeSelect}
}