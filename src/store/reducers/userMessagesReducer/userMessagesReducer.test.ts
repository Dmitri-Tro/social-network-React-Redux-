import {UserMessagesData} from "../../../interfaces/types";
import {addUserMessageReducerAC, userMessagesReducer} from "./userMessagesReducer";

test("should add new message to messagesData", () => {
    const startState: UserMessagesData = [
        {
            messageId: '02',
            message: 'Hey!',
            sendToFriendId: '0002',
            time: '09:01'
        },
    ];
    const title = 'Hi';

    const friend = {
        userName: 'Andrew',
        userId: '0001',
        userAvatar: '',
        userBirthday: '01.10.2000',
        userCityAddress: 'Helsinki',
        userOccupation: 'Frontend-developer',
        userQuot: ''
    };

    const endState = userMessagesReducer(startState, addUserMessageReducerAC(title, friend.userId));

    expect(endState.length).toBe(2);
    expect(endState[0].message).toBe('Hi');
    expect(endState[0].messageId).toBeDefined();
    expect(endState[0].sendToFriendId).toBe(friend.userId);
});