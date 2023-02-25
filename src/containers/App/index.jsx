import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import useAccountState from '../../hooks/useAccountState'
import Home from '../Home'
import { Login } from '../Login'
import SignUp from '../SignUp'

export default function AppRoot() {
  const user = useAccountState()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!user.user){
      navigate('/login')
    }
  },[user.user])

  return (
    <Routes>
      <Route
        index
        path='/login'
        element={<Login user={user} navigate={navigate}/>}
      />
      <Route
        path='/signup'
        element={<SignUp navigate={navigate}/>}
      />
      <Route
        index
        path='*'
        element={<Home user={user}/>}
      />
    </Routes>
  )
}
