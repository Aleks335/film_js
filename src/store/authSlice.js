import {createSlice} from "@reduxjs/toolkit";
import {api} from "./api";

// создать файл authSlice.js

const authSlice = createSlice({
    // как выглядит срез
    name: 'authSlice',// название
    // tagTypes: ['Text'],
    initialState: {
        // accessToken
        accessToken: '',
        isAuth: false,
    }, // как выглядит изначально
    extraReducers: ((builder) => {
        // для регестрации
        builder.addMatcher(
            // AuthApi файл getAllFetch - функция
            api.endpoints.userAuthorization.matchFulfilled,// следим имеено за getAllFetch получаем токен для авторизации

            (state, action) => {
                state.accessToken = action.payload.accessToken; // получили токе через action.payload
                state.isAuth = true;

                console.log('extra');
                console.log('tocen', action.payload);
            }
        );


    }),

    reducers:{
        setUser: (state, action) => {
            state.accessToken = action.payload.accessToken; // получили токе через action.payload
            state.isAuth = true;
        }
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer