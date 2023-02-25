import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from '../../components/navbar'

import SideBar from '../../components/sidebar'
import Councelling from '../Councelling'
import DCSSessions from '../DCSSessions'
import ImportantResources from '../ImportantResources'
import NonTechnicalResources from '../NonTechnicalResources'
import TechnicalResources from '../TechnicalResources'

export default function Home({ user }) {

  const [collapsed, setCollapsed] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    navigate(TABS[activeIndex].path)
  }, [])

  return (
    <div className='bg-secondry w-full h-screen flex'>
      <SideBar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        component={{ activeIndex, setActiveIndex }}
        tabs={TABS}
        navigate={navigate}
      />
      <div className='flex grow flex-col'>
        <NavBar collapsable={collapsed} setCollapse={setCollapsed} user={user} navigate={navigate}/>
        <Routes>
          {
            TABS.map((tab, ind) => (
              <Route
                key={ind}
                element={<tab.component user={user} />}
                path={tab.path}
                navigate={navigate}
                index={ind === activeIndex}
              />
            ))
          }
        </Routes>
      </div>
    </div>
  )
}

const TABS = [
  {
    label: 'Important Resources',
    path: '/important-resorces',
    component: ImportantResources,
  },
  {
    label: 'Technical Resources',
    path: '/technical-resources',
    component: TechnicalResources
  },
  {
    label: 'Non-Technical Resources',
    path: '/non-technical-resources',
    component: NonTechnicalResources
  },
  {
    label: '1 on 1 Councelling',
    path: '/councelling',
    component: Councelling
  },
  {
    label: 'DCS Session',
    path: '/dcs-session',
    component: DCSSessions
  }
]



