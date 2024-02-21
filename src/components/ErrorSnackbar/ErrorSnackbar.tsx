import React, { FC } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { setErrorAC } from "store/reducers/appReducer/appReducer";
import { selectError } from "store/reducers/appReducer/appSelectors";

export const ErrorSnackbar: FC = () => {
    const error = useAppSelector(selectError);
    const dispatch = useAppDispatch();
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(setErrorAC(null));
    };

    return (
        <div>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: "100%" }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};