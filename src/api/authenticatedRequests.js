import { getItemFromStorage } from "../utils/native"
import Keys from '../constants/keys'
import api from "."

export async function makeAuthenticatedPostRequests(url, data) {
    return await api.post(url, data, {
        headers: {
            "authorization": `Bearer ${getItemFromStorage(Keys.storageKey).access_token}`
        }
    })
}

export async function makeAuthenticatedGetRequests(url){
    return await api.get(url, {
        headers: {
            "authorization": `Bearer ${getItemFromStorage(Keys.storageKey).access_token}`
        }
    })
}