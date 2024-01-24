import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {UsersData} from "../../../../interfaces/types";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {usersApi} from "../../../../api/users-api/usersApi";
import {setCurrentPageAC, setPageSizeAC, setUsersAC} from "../../../../store/reducers/usersReducer/usersReducer";


export const useFindUsers = () => {
    const dispatch = useDispatch();
    const usersData = useSelector<RootState, UsersData>(state => state.usersData);
    const [filter, setFilter] = useState('');

    const users = usersData.users;
    const pagesSize = usersData.pageSize;
    const currentPage = usersData.page;

    const URIParams = `page=${currentPage}&count=${pagesSize}&term=${filter}&friend=${usersData.friend}`;

    useEffect(() => {
        usersApi.getUsers(URIParams)
            .then(res => dispatch(setUsersAC(res.data.items, res.data.totalCount)))
    }, [dispatch, URIParams]);

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

    return {users, pagesCount, pagesSize, currentPage, filter, onFilterChange, onPageClick, onFirstPageClick, onLastPageClick, onPageSizeSelect}
}