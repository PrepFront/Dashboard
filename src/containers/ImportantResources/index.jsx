import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { getResources } from '../../api/resource'
import Box from '../../components/box'
import Card from '../../components/card'
import Text from '../../components/text'
import WaitForData from '../../components/waitForData'

function getImportantResources() {
  return getResources('init')
}

function NonTechnicalResources() {
  const query = useQuery(['init'], getImportantResources)
  return (
    <WaitForData dependencies={[query]}>
      <Box className={'flex m-10 flex-1 flex-col z-0 h-0 p-10'}>
        <Text.Heading>Important Resources</Text.Heading>
        <div className='flex-1 overflow-y-scroll p-4'>
          {
            query.data?.data.map((item, idx) => {
              return <Card item={item} key={idx} />
            })
          }
        </div>
      </Box>
    </WaitForData>
  )
}

export default NonTechnicalResources