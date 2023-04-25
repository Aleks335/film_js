import {api} from "./api";
import {authApi} from "./authApi";

export const filmsApi = api.injectEndpoints({ //расcшерение базгово api
    endpoints: build => ({

        getAllFilms: build.query({
            query: (objParam) => {
                return `films?sorting=${objParam.sorting}&column=${objParam.column}&year=${objParam.year}`
            },
            providesTags: ['Text'],// get запросе
        }),
        getCommFilms: build.query({
            query: (id) => {
                return `comments/${id}`
            },
            providesTags: ['Text'],// get запросе
        }),
        getInfoFilm: build.query({
            query: (id) => {
                return `films/${id}`
            },
            providesTags: ['Text'],// get запросе
        }),

        // POST запрос
        addFilms: build.mutation({
            query: (body) => ({
                url: "/films ",
                method: "POST",
                body: body
            })
            , invalidatesTags: ['Text'] // перезагрузка страницы после выполниения
        }),
        addComment: build.mutation({
            query: (body) => ({
                url: "/comments",
                method: "POST",
                body: body
            })
            , invalidatesTags: ['Text'] // перезагрузка страницы после выполниения
        }),

    })
})

export const {
    useGetAllFilmsQuery, useGetInfoFilmQuery, useGetCommFilmsQuery, useAddFilmsMutation,
    useAddCommentMutation
} = authApi