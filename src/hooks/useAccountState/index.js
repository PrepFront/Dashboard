import { useState, useCallback } from 'react'
import { getUserDetails } from '../../api/account'
import Keys from '../../constants/keys'
import { getItemFromStorage, setItemIntoStorage } from "../../utils/native"

const tokens = getItemFromStorage(Keys.storageKey)

let accountDetails = null

if (tokens) {
    getUserDetails(tokens)
        .then(({ data }) => {
            accountDetails = data
        })
}

export default function () {
    const [user, setUser] = useState(accountDetails)

    const saveUser = async (tokens) => {
        setItemIntoStorage(Keys.storageKey, tokens)
        try {
            const { data } = await getUserDetails(tokens)
            setUser(data)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteUser = () => {
        setItemIntoStorage(Keys.storageKey, null)
        setUser(null)
    }

    return {
        user,
        saveUser,
        deleteUser
    }
}
