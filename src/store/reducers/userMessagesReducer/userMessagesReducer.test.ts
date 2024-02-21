import { UserMessagesData } from "interfaces/types";
import {
    addUserMessageAC, deleteMessageAC,
    updateMessageTitleAC,
    userMessagesReducer
} from "store/reducers/userMessagesReducer/userMessagesReducer";

let startState: UserMessagesData;
beforeEach(() => {
    startState = [{
        messageId: "02",
        message: "Hey!",
        time: "09:01",
    }]
})
test("should add new message to messagesData", () => {
    const title = "Hi";

    const endState = userMessagesReducer(startState, addUserMessageAC(title));

    expect(endState.length).toBe(2);
    expect(endState[0].message).toBe("Hi");
    expect(endState[0].messageId).toBeDefined();
});
test("should update message title", () => {
    const title = "Hi";

    const endState = userMessagesReducer(startState, updateMessageTitleAC('02', title));

    expect(endState.length).toBe(1);
    expect(endState[0].message).toBe("Hi");
});
test("should delete message", () => {

    const endState = userMessagesReducer(startState, deleteMessageAC('02'));

    expect(endState.length).toBe(0);
});
