import React from 'react'
import { useForm } from 'react-hook-form'
import { signUp } from '../../api/account'
import { toast } from 'react-hot-toast'

import Box from '../../components/box'
import Button from '../../components/buttons'
import Form from '../../components/form'
import Text from '../../components/text'

function SignUp({ navigate }) {
  const { register, watch } = useForm({
    mode: 'onChange',
  })

  const userDetail = watch()

  async function handleSignUp() {
    try {
      await signUp(userDetail)
      toast.success('Signup successfull!! Now Login :)')
      navigate('/login')
    } catch(e){
      toast.error('Kuchh toh gadbad hai')
    }
  }

  function handleLogin(){
    navigate('/login')
  }

  return (
    <div className='bg-secondry flex justify-center items-center w-full h-screen '>
      <Box className={'w-full h-screen md:w-96 md:h-max md:py-8 flex items-center justify-center flex-col'}>
        <Text.Heading className={'text-center'}>SignUp</Text.Heading>
        <div className='w-full px-8'>
          <Form.Input placeholder='Email' type='email' {...register('email')} name='email' label="Email" />
          <Form.Input placeholder='Full Name' type='email' {...register('full_name')} name='full_name' label="full_name" />
          <Form.Input placeholder='Qualification' type='email' {...register('qualification')} name='qualification' label="qualification" />
          <Form.Input placeholder='College' type='email' {...register('college')} name='college' label="college" />
          <Form.Input placeholder='Password' type='password' {...register('password')} name='password' label="Password" />
        </div>
        <div className='flex item w-full px-8 mt-1 gap-1'>
          <Button variant='outline' grow size='medium' onClick={handleLogin}>Login</Button>
          <Button variant='solid' grow size='medium' onClick={() => {
            handleSignUp()
          }}>Signup</Button>
        </div>
      </Box>
    </div>
  )
}

export default SignUp