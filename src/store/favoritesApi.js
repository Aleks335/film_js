import {api} from "./api";


export const favoritesApi = api.injectEndpoints({ //расcшерение базгово api
    endpoints: build => ({
        addFavoritesFilms: build.mutation({
            query: (body) => ({
                url: "/favorites",
                method: "POST",
                body: body
            })
            , invalidatesTags: ['Text'] // перезагрузка страницы после выполниения
        }),
        getFavoritesFilms: build.query({
            query: () => {
                return `favorites`
            },
            providesTags: ['Text'],// get запросе
        }),
        delFavoritesFilms: build.mutation({
            query: (body) => ({
                url: "/favorites",
                method: "DELETE",
                body: body
            })
            , invalidatesTags: ['Text'] // перезагрузка страницы после выполниения
        }),
    })


})


export const {useDelFavoritesFilmsMutation, useAddFavoritesFilmsMutation, useGetFavoritesFilmsQuery} = favoritesApi