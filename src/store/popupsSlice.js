import {createSlice} from "@reduxjs/toolkit";
import {api} from "./api";
import PopupRestorePassword from "../components/popup/PopupRestorePassword";

// создать файл authSlice.js

const popupsSlice = createSlice({
    // как выглядит срез
    name: 'popupsSlice',// название
    // tagTypes: ['Text'],
    initialState: {
        isRestorePasswordOpen: false,
    }, // как выглядит изначально

    reducers: {
        popupRestorePassword: (state, action) => {
            state.isRestorePasswordOpen = action.payload
        }
    }
})

export const {popupRestorePassword} = popupsSlice.actions
export default popupsSlice.reducer