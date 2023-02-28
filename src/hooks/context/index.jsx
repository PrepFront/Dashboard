import React, { createContext, useContext, useEffect, useState } from 'react'

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