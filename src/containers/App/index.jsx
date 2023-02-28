import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { useAppContext } from '../../hooks/context'
import Home from '../Home'
import { Login } from '../Login'
import SignUp from '../SignUp'

export default function AppRoot() {
  const navigate = useNavigate()
  const { user } = useAppContext()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [user])

  return (
    <Routes>
      <Route
        index
        path='/login'
        element={<Login user={user} navigate={navigate} />}
      />
      <Route
        path='/signup'
        element={<SignUp navigate={navigate} />}
      />
      <Route
        index
        path='*'
        element={<Home user={user} />}
      />
    </Routes>
  )
}
