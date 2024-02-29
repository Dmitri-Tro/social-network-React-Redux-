type AppReducerState = {
    isInitialized: boolean;
    isFetching: boolean;
    error: string | null;
    editMode: boolean;
};
const initialState = {
    isInitialized: false,
    isFetching: true,
    error: null,
    editMode: false,
};
export const appReducer = (state: AppReducerState = initialState, action: AppReducerActions) => {
    switch (action.type) {
        case "SET_IS_INITIALIZED":
            return { ...state, isInitialized: action.payload.isInitialized };
        case "SET_IS_FETCHING":
            return { ...state, isFetching: action.payload.isFetching };
        case "SET_ERROR":
            return { ...state, error: action.payload.error };
        case "SET_EDIT_MODE":
            return { ...state, editMode: action.payload.isEditMode };
        default:
            return state;
    }
};
// Actions
export const setIsInitialized = (isInitialized: boolean) => {
    return {
        type: "SET_IS_INITIALIZED",
        payload: {
            isInitialized,
        },
    } as const;
};

export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "SET_IS_FETCHING",
        payload: {
            isFetching,
        },
    } as const;
};
export const setErrorAC = (error: string | null) => {
    return {
        type: "SET_ERROR",
        payload: {
            error,
        },
    } as const;
};

export const setEditModeAC = (isEditMode: boolean) => {
    return {
        type: "SET_EDIT_MODE",
        payload: {
            isEditMode,
        },
    } as const;
};

// Types
export type AppReducerActions =
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setEditModeAC>;
