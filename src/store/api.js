import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {setUser} from "./authSlice";

const baseQuery = fetchBaseQuery({
        baseUrl: 'http://localhost:3555/',
        prepareHeaders: (headers, {getState}) => {
            console.log('getState()', getState());
            const accessToken = (getState()).authData.accessToken; // достаем токен
            if (accessToken) {
                headers.set('authorization', accessToken) //ken) // вставим заголовки
            }
            console.log('accessToken', accessToken)
            return headers
        },
        credentials: 'include',
    })

// добовляем в  baseQuery для повторной авторизации
async function baseQueryWithReauth(args, api, extraOptions) {
    console.log('Совершается запрос')
    const rez = await baseQuery(args, api, extraOptions)
    // проверяем 403 на живучесть токена
    if(rez?.error?.originalStatus === 403){
        console.log('Токен истек')
        console.log('токен на данный момент', api.getState().authData.accessToken)
        const rez2 = await baseQuery('/refresh', api, extraOptions)
        if(rez2?.data){api.dispatch(setUser(rez2.data))
            console.log('Токен обновлен')
        }
        console.log('токен обновился', api.getState().authData.accessToken)
        const rez3 = await baseQuery(args, api, extraOptions)
        console.log('Совершается запрос с обновленном токеном')
    }
    return rez
}
export const api = createApi({
    reducerPath: 'api', // аналог названия
    tagTypes: ['Text'], // заявили все которы есть для перезагрузки страницы
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({})
})
