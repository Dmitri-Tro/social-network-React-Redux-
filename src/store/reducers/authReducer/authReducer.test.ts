import { authReducer, loginAC, setAuthDataAC } from "store/reducers/authReducer/authReducer";
import { UserAuthData } from "interfaces/types";

let startState: UserAuthData;
beforeEach(() => {
    startState = {
        id: null,
        email: null,
        login: null,
        isFetching: false,
        isLogin: false,
    };
});
test('should set auth data', () => {
    const authData = {
        id: 1,
        email: 'test@test.com',
        login: 'test',
        isFetching: false,
        isLogin: false
    }
    const endState = authReducer(startState, setAuthDataAC(authData));
    
    expect(endState.id).toBe(1);
    expect(endState.email).toBe('test@test.com');
    expect(endState.isLogin).toBe(false);
});
test('should update isLogin', () => {
    const authData = {
        id: 1,
        email: 'test@test.com',
        login: 'test',
        isFetching: false,
        isLogin: false
    }
    const endState = authReducer(startState, loginAC(true));

    expect(endState.isLogin).toBe(true);
})