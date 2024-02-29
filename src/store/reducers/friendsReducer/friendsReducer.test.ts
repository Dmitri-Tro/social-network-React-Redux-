import { friendsReducer, setFriendsAC } from "store/reducers/friendsReducer/friendsReducer";
import { FriendsData } from "interfaces/types";

test("should set user friends", () => {
    const startState = {} as FriendsData;

    const friends = {
        users: [
            {
                name: "Dima",
                id: 1,
                uniqueUrlName: "",
                photos: {
                    small: undefined,
                    large: undefined,
                },
                status: "",
                followed: true,
                inProgress: false,
            },
        ],
        totalCount: 1,
        isFetching: false,
    };

    const endState = friendsReducer(startState, setFriendsAC(friends.users, friends.totalCount));

    expect(endState.users.length).toBe(1);
    expect(endState.users[0].name).toBe("Dima");
    expect(endState.totalCount).toBe(1);
});
