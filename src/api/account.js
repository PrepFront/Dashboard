import api from './index'
import URLS from '../constants/urls'
import { getItemFromStorage } from "../utils/native"
import Keys from '../constants/keys'

export async function loginUser({ email, password }) {
    return await api.post(URLS.ROUTES.USER.LOGIN, { email, password })
}

export async function signUp(user_details){
    return await api.post(URLS.ROUTES.USER.SIGNUP, user_details)
}

export async function getUserDetails(tokens) {
    return await api.get(URLS.ROUTES.USER.USER_DETAIL, {
        headers: {
            "authorization": `Bearer ${tokens.access_token}`
        }
    })
}

