import React from 'react'
import Box from '../../components/box'
import Text from '../../components/text'

function Councelling() {
  return (
    <Box className={'flex grow m-10 p-10 flex-col z-0'}>
      <Text.Heading>Book Appointments with Experts</Text.Heading>
      <Text.SubHeading className={'mt-0 self-start'}>Book appointments with any of the mentors to discuss what really is most important!</Text.SubHeading>
      <Text.SubHeading className={'mt-0 self-start italic text-red-500'}>*Select any mentor from list, select time and date and book the appointment*</Text.SubHeading>
    </Box>
  )
}

export default Councelling