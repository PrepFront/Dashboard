import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { loginUser } from '../../api/account'
import Box from '../../components/box'
import Button from '../../components/buttons'
import Form from '../../components/form'
import Text from '../../components/text'

export function Login({ user: { saveUser: onLogin }, navigate }) {

  const { register, watch } = useForm({
    mode: 'onChange',
  })

  const userDetails = watch()

  async function handleLogin() {
    try {
      const { data } = await loginUser(userDetails)
      onLogin(data)
      toast.success('Login Successfull!!')
      navigate('/')
    } catch (e) {
      console.log(e)
      toast.error('Something went Wrong. Check Email or Password')
    }
  }

  function handleSignUp(){
    navigate('/signup')
  }

  return (
    <div className='bg-secondry flex justify-center items-center w-full h-screen '>
      <Box className={'w-full h-screen md:w-96 md:h-max md:py-8 flex items-center justify-center flex-col'}>
        <Text.Heading className={'text-center'}>Login</Text.Heading>
        <div className='w-full px-8'>
          <Form.Input placeholder='Email' type='email' {...register('email')} name='email' label="Email" />
          <Form.Input placeholder='Password' type='password' {...register('password')} name='password' label="Password" />
        </div>
        <div className='flex item w-full px-8 mt-1 gap-1'>
          <Button variant='outline' grow size='medium' onClick={handleSignUp}>SignUp</Button>
          <Button variant='solid' grow size='medium' onClick={() => {
            handleLogin()
          }}>Login</Button>
        </div>
      </Box>
    </div>
  )
}