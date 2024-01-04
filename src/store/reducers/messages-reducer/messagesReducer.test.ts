import {MessagesDataType} from "../../../interfaces/types";
import {addMessageReducerAC, messagesReducer} from "./messagesReducer";

test("should add new message to messagesData", () => {
    const startState: MessagesDataType = [
        {
            messageId: '01',
            message: 'Hi! Nice to meet you here!!!',
            sendFromUserId: '0001',
            sendToUserId: '0011',
        },
        {
            messageId: '02',
            message: 'Hey!',
            sendFromUserId: '0011',
            sendToUserId: '0001',
        },
    ];
    const title = 'Hi';
    const verifiedUser = {
            userName: 'Andrew',
            userPassword: '0001',
            userId: '0001',
            userAvatar: '',
            userBirthday: '01.10.2000',
            userCityAddress: 'Helsinki',
            userOccupation: 'Frontend-developer',
            userQuot: ''
        }
        const verifiedUserFriendsList = [{
            friendId: '0011',
            friendName: 'SpongeBob',
            friendAvatar: '',
        },]

        const endState = messagesReducer(startState, addMessageReducerAC(title, verifiedUser, verifiedUserFriendsList));

    expect(endState.length).toBe(3);
    expect(endState[0].message).toBe('Hi');
    expect(endState[0].messageId).toBeDefined();
    expect(endState[0].sendFromUserId).toBe(verifiedUser.userId);
    expect(endState[0].sendToUserId).toBe(verifiedUserFriendsList[0].friendId);


})