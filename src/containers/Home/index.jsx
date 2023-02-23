import React from 'react'
import Button from '../../components/buttons'

export default function Home({user}) {
  return (
    <div>
      <Button onClick = {()=>{user.deleteUser()}} >delete</Button>
    </div>
  )
}





