import { useQuery } from '@tanstack/react-query'
import { capitalize, times } from 'lodash'
import moment from 'moment'
import React, { useState } from 'react'
import { getDCSLinks } from '../../api/dcs'
import Box from '../../components/box'
import Text from '../../components/text'
import WaitForData from '../../components/waitForData'
import Button from '../../components/buttons'
import Modal from '../../components/modal'

export default function DCSSessions() {

  const [isModalOpen, setOpen] = useState(false)
  const [dcsLink, setLink] = useState(null)

  const dcsQuery = useQuery(['dcs_links'], getDCSLinks, { staleTime: 1000 * 60 * 10 })
  return (
    <WaitForData dependencies={[dcsQuery]}>
      <Box className={'flex grow m-10 p-10 flex-col z-0'}>
        <Text.Heading className={'m-0'}>Doubt Clarification Sessions</Text.Heading>
        <Text.SubHeading className={'mt-0 self-start'}>Join any of the upcoming Sessions to resolve your queries regarding anything!</Text.SubHeading>
        <div className='flex grow h-0 px-4 pb-4 rounded-md overflow-y-auto mt-4'>
          <table className="w-full text-sm text-left border-collapse border rounded-md border-primary text-gray-500 h-max">
            <thead className="text-xs text-white uppercase h-max bg-primary rounded-t-md sticky top-0">
              <tr>
                {
                  TABLE_HEAD.map(({ name, label }) => (
                    <th scope="col" className="px-6 py-3 text-center border border-collapse border-gray-800 border-opacity-25" key={name}>
                      {label}
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                dcsQuery.data?.data.map((item, index) => (
                  <CreateTableRow modalProps={{ setOpen, isModalOpen, setLink }} data={item} key={index} />
                ))
              }
            </tbody>
          </table>
        </div>
      </Box>
      <Modal
        title={'Meeting Join Confirmation'}
        isOpen={isModalOpen}
        BodyComponent={ModalBody}
        closeModal={() => setOpen(!isModalOpen)}
        Buttons={[
          () => (<Button variant={'danger'} className='m-1' onClick={() => setOpen(!isModalOpen)}>Cancel</Button>),
          () => (<Button variant={'solid'} className='m-1' href={dcsLink} target='_blank'>Join 👉</Button>),
        ]}
      />
    </WaitForData>
  )
}

const CreateTableRow = ({ data, modalProps }) => (
  <tr>
    {
      DCS_INFO.map((item, idx) => {
        let content = item.type === 'text' ?
          <h1 className='text-sm font-semibold' >{item.label(data)}</h1> : <item.component modalProps={modalProps} data={data} />
        return (
          <th key={idx} scope="col" className="px-6 py-3 text-primary text-center border border-collapse border-gray-800 border-opacity-25">
            {content}
          </th>
        )
      })
    }
  </tr>
)

function ModalBody() {
  return (
    <div className=' text-primary'>
      Would you like to join this meeting?
    </div>
  )
}

const DCS_INFO = [
  {
    name: 'title',
    label: (data) => (capitalize(data.name)),
    type: 'text'
  },
  {
    name: 'author',
    label: (data) => (capitalize(data.expert.name)),
    type: 'text'
  },
  {
    name: 'status',
    label: (data) => {
      const currentTime = new Date()
      const meetingTime = new Date(data.time)
      if (meetingTime < currentTime) {
        return "Meeting is Ended!😔"
      }
      return "Meeting is Starting Soon!😃"
    },
    type: 'text'
  },
  {
    name: 'time',
    label: (data) => {
      const meetingTime = new Date(data.time)
      return moment(meetingTime, "YYYYMMDD").fromNow()
    },
    type: 'text'
  },
  {
    name: 'button',
    type: 'Button',
    component: ({ data, modalProps }) => {
      const { isModalOpen, setOpen, setLink } = modalProps
      const currentTime = new Date()
      const meetingTime = new Date(data.time)
      return (
        <>
          <Button variant='text' disabled={currentTime > meetingTime} onClick={() => {
            setLink(data.meetingUrl)
            setOpen(!isModalOpen)
          }}>Join 🚀</Button>
        </>
      )
    }
  }
]

const TABLE_HEAD = [
  {
    name: 'title',
    label: 'Title'
  },
  {
    name: 'author',
    label: 'Taken by'
  },
  {
    name: 'status',
    label: 'Status'
  },
  {
    name: 'time',
    label: 'Time'
  },
  {
    name: 'meeting',
    label: 'Meeting'
  }
]