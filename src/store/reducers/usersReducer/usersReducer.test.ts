import {
    followAC,
    followingInProgressAC, setCurrentPageAC, setIsFetchingAC,
    setPageSizeAC,
    setUsersAC,
    usersReducer
} from "store/reducers/usersReducer/usersReducer";
import { User, UsersData } from "interfaces/types";

let startState: UsersData;
beforeEach(() => {
   startState = {
       users: [
           {
               name: 'Dima',
               id: 1,
               uniqueUrlName: '',
               photos: {
                   small: '',
                   large: ''
               },
               status: 'At home',
               followed: false,
               inProgress: false,
           }
       ],
       totalCount: 1,
       pageSize: 10,
       page: 1,
       friend: false,
       isFetching: false,
   };
})
test("should add users to usersData", () => {
    const initialState: UsersData = {
        users: [] as User[],
        totalCount: 0,
        pageSize: 10,
        page: 1,
        friend: false,
        isFetching: false,
    }
    const newUsers = [
        {
            name: 'Dima',
            id: 1,
            uniqueUrlName: '',
            photos: {
                small: '',
                large: ''
            },
            status: 'At home',
            followed: false,
            inProgress: false,
        }
    ]

    const endState = usersReducer(initialState, setUsersAC(newUsers, 1));

    expect(endState.users.length).toBe(1);
    expect(endState.users[0].name).toBe('Dima');
    expect(endState.totalCount).toBe(1);
});
test("should set user followed", () => {

    const endState = usersReducer(startState, followAC(1));

    expect(endState.users.length).toBe(1);
    expect(endState.users[0].name).toBe('Dima');
    expect(endState.users[0].followed).toBe(true);
});
test("should update user inProgress status", () => {

    const endState = usersReducer(startState, followingInProgressAC(1, true));

    expect(endState.users.length).toBe(1);
    expect(endState.users[0].name).toBe('Dima');
    expect(endState.users[0].inProgress).toBe(true);
});
test("should set page size", () => {

    const endState = usersReducer(startState, setPageSizeAC('5'));

    expect(endState.users.length).toBe(1);
    expect(endState.users[0].name).toBe('Dima');
    expect(endState.pageSize).toBe(5);
});
test("should set current page", () => {

    const endState = usersReducer(startState, setCurrentPageAC(2));

    expect(endState.users.length).toBe(1);
    expect(endState.users[0].name).toBe('Dima');
    expect(endState.page).toBe(2);
});
test("should set fetching status", () => {

    const endState = usersReducer(startState, setIsFetchingAC(true));

    expect(endState.users.length).toBe(1);
    expect(endState.users[0].name).toBe('Dima');
    expect(endState.isFetching).toBe(true);
});