import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { getResources } from '../../api/resource'
import Box from '../../components/box'
import Card from '../../components/card'
import Text from '../../components/text'
import WaitForData from '../../components/waitForData'

function getNonTechResources(){
  return getResources('non-tech')
}

function NonTechnicalResources() {

  const query = useQuery(['non-tech-resources'],getNonTechResources,{ staleTime: 1000*60*10 })

  return (
    <WaitForData dependencies={[query]}>
      <Box className={'flex m-10 flex-1 flex-col z-0 h-0 p-10'}>
        <Text.Heading>Non Technical Resources</Text.Heading>
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