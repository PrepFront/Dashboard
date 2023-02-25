import React, { createContext, useContext, useEffect, useState } from 'react'
import Loader from '../../components/loader';
import keys from '../../constants/keys';
import { getItemFromStorage } from '../../utils/native';
import useAccountState from '../useAccountState';

const AppContext = createContext();

function useAppContext() {
    return useContext(AppContext)
}

function ContextWrapper({ children }) {

    const { user, saveUser, deleteUser } = useAccountState()

    return (
        <AppContext.Provider value={{
            user,
            deleteUser,
            saveUser
        }} >
            {children}
        </AppContext.Provider>
    )
}

export { useAppContext, ContextWrapper }