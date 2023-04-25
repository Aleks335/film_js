import {api} from "./api";


export const authApi = api.injectEndpoints({ //расcшерение базгово api
    endpoints: build => ({
        userAuthorization: build.mutation({
            query: (body) => ({
                url: "/sign_in",
                method: "POST",
                body: body
            })
        }),
        addNewUser: build.mutation({
            query: (body) => ({
                url: "/sign_up",
                method: "POST",
                body: body
            })
        }),
        addNewUserPassword: build.mutation({
            query: (body) => ({
                url: "/sign_restore_user_password",
                method: "POST",
                body: body
            })
        }),
        addCodeUserRecovery: build.mutation({
            query: (body) => ({
                url: "/sign_restore_user_code",
                method: "POST",
                body: body
            })
        }),
    })

    
})
export const {useUserAuthorizationMutation, useAddNewUserMutation, useAddNewUserPasswordMutation, useAddCodeUserRecoveryMutation} = authApi