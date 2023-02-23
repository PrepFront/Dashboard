import { getItemFromStorage } from "../utils/native"
import Keys from '../constants/keys'

export async function makeAuthenticatedRequests(url, data) {
    return await API.post(url, data, {
        headers: {
            "authorization": `Bearer ${getItemFromStorage(Keys.storageKey).access_token}`
        }
    })
}