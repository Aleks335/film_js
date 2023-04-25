// только для файлов типа Slice
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import {api} from "./api";
import popupsSlice from "./popupsSlice";


export default configureStore({// глобальное хранилище из срезов
    // соединяем reducer - срез
    reducer: {
        popupsSlice: popupsSlice,
        authData: authSlice,
        [api.reducerPath]: api.reducer  //подключаем слайс
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(api.middleware) //
})
