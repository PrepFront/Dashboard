import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import moment from 'moment'

import { getExperts, scheduleMeeting } from '../../api/councelling'
import Box from '../../components/box'
import Form from '../../components/form'
import Text from '../../components/text'
import WaitForData from '../../components/waitForData'
import Button from '../../components/buttons'
import Modal from '../../components/modal'

export default function Councelling() {

  const expertQuery = useQuery(['experts'], getExperts, { staleTime: 1000 * 60 * 10 })
  const [isModalOpen, setOpen] = useState(false)
  const [expert, setExpert] = useState(null)
  const timeRef = useRef()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleAppointments() {
    setLoading(true)
    try {
      await scheduleMeeting(expert, timeRef.current.value)
      toast.success('An email has been sent to your registered Email address.')
    } catch (e) {
      toast.error('Some error occured. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <WaitForData dependencies={[expertQuery]}>
      <Box className={'flex grow m-10 p-10 flex-col z-0'}>
        <Text.Heading>Book Appointments with Experts</Text.Heading>
        <Text.SubHeading className={'mt-0 self-start'}>Book appointments with any of the mentors to discuss what really is most important!</Text.SubHeading>
        <Text.SubHeading className={'mt-0 self-start italic text-red-500'}>*Select any mentor from list, select time and date and book the appointment*</Text.SubHeading>
        <div className='flex flex-grow h-0'>
          <div className='w-1/2 h-full px-2 overflow-y-scroll'>
            {
              expertQuery.data?.data.map((elem, indx) => {
                return <ExpertCard key={indx} expert={elem} onClick={() => { setExpert(elem) }} />
              })
            }
          </div>
          <form className='w-1/2 h-full p-4' onSubmit={(e) => {
            e.preventDefault()
            if (!Boolean(timeRef.current?.value)) {
              setError('This Field is Required')
              setTimeout(() => { setError(null) }, 2000)
              return
            }
            if (!expert) {
              toast.error("You need to select an expert.")
              return
            }
            setOpen(true)
          }}>
            <h1 className='text-xl font-semibold'>Selected Expert</h1>
            {
              expert ? (
                <ExpertCard expert={expert} />
              ) : (
                <div className='w-full p-4 first:mt-0 mt-2 rounded-md shadow'>
                  <p className='italic text-slate-500 text-sm opacity-60'>Selected Expert Info will go here</p>
                </div>
              )
            }
            <Form.Input type={'datetime-local'} outerClossName='mt-2' ref={timeRef} name='time' label='Time' error={error} />
            <Button grow> Submit </Button>
          </form>
        </div>
      </Box>
      <Modal
        title={'Meeting Join Confirmation'}
        isOpen={isModalOpen}
        BodyComponent={ModalBody}
        closeModal={() => setOpen(!isModalOpen)}
        BodyComponentProps={{
          name: expert?.name,
          time: timeRef.current?.value
        }}
        Buttons={[
          () => (<Button variant={'danger'} className='m-1' onClick={() => setOpen(!isModalOpen)}>Cancel</Button>),
          () => (<Button variant={'success'} className='m-1' loading={loading} onClick={() => { 
            handleAppointments().then(()=>setOpen(false))
          }}>Confirm</Button>),
        ]}
      />
    </WaitForData>
  )
}

function ModalBody({ name, time }) {
  return (
    <div className=' text-primary'>
      Would you like to schedule call with {name} at {moment(time).calendar()}?
    </div>
  )
}

function ExpertCard({ expert, onClick }) {
  return (
    <div onClick={() => { onClick && onClick() }} className='w-full p-4 first:mt-0 mt-2 rounded-md shadow transition-all duration-300 ease-in-out hover:bg-primary hover:bg-opacity-[.05] cursor-pointer'>
      <h1 className=' text-primary-dark text-xl'>
        {expert.name}
        <span className=" text-gray-500 text-sm italic" >{` (${expert.profession})`}</span>
      </h1>
      <h2 className='text-primary opacity-75 text-sm'>{expert.email}</h2>
      <h3 className='text-primary opacity-70 text-xs'>{expert.position} at</h3>
      <h3 className='text-primary opacity-70 text-xs'>{expert.organization}</h3>
    </div>
  )
}