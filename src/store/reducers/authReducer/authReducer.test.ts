import { authReducer, setAuthDataAC } from "store/reducers/authReducer/authReducer";
import { UserAuthData } from "interfaces/types";

let startState: UserAuthData;
beforeEach(() => {
    startState = {
        id: null,
        email: null,
        login: null,
        isLogin: false,
        captcha: null,
    };
});
test("should set auth data", () => {
    const authData = {
        id: 1,
        email: "test@test.com",
        login: "test",
        isLogin: false,
    };
    const endState = authReducer(startState, setAuthDataAC(authData, true));

    expect(endState.id).toBe(1);
    expect(endState.email).toBe("test@test.com");
    expect(endState.isLogin).toBe(true);
});
