import {
    deleteFriendMessageAC,
    friendsMessagesReducer,
} from "store/reducers/friendsMessagesReducer/friendsMessagesReducer";

test("should delete friend message", () => {
    const startState = [
        {
            messageId: "1",
            message: "Hi!",
            time: "01.01.2000",
        },
    ];

    const endState = friendsMessagesReducer(startState, deleteFriendMessageAC("1"));

    expect(endState.length).toBe(0);
});
