import { useState, useCallback } from 'react'
import { getUserDetails } from '../../api/account'
import Keys from '../../constants/keys'
import { setItemIntoStorage } from "../../utils/native"

export default function () {
    const [user, setUser] = useState(null)

    const saveUser = async (tokens) => {
        if (tokens) {
            setItemIntoStorage(Keys.storageKey, tokens)
        }
        try {
            const { data } = await getUserDetails(tokens)
            setUser(data)
        } catch (e) { }
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
