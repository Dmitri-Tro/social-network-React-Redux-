type AppReducerState = {
    isInitialized: boolean
    isFetching: boolean
    error: string | null
}
const initialState = {
    isInitialized: false,
    isFetching: true,
    error: null
};
export const appReducer = (state: AppReducerState = initialState, action: AppReducerActions) => {
    switch (action.type) {
        case "SET_IS_INITIALIZED":
            return { ...state, isInitialized: action.payload.isInitialized };
        case "SET_IS_FETCHING":
            return { ...state, isFetching: action.payload.isFetching };
        case "SET_ERROR":
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
};
// Actions
export const setIsInitialized = (isInitialized: boolean) => {
    return {
        type: "SET_IS_INITIALIZED",
        payload: {
            isInitialized
        }
    } as const;
};

export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "SET_IS_FETCHING",
        payload: {
            isFetching
        }
    } as const;
};
export const setErrorAC = (error: string | null) => {
    return {
        type: "SET_ERROR",
        payload: {
            error
        }
    } as const;
};

// Types
export type AppReducerActions =
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof setErrorAC>