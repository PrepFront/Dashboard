import classNames from 'classnames'
import React from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'

import logo from '../../assets/logo.svg'


export default function SideBar({ collapsed, setCollapsed, component, tabs, navigate }) {
  return (
      <div className={classNames(
        'bg-primary h-screen transition-all ease-in-out duration-300 relative overflow-hidden flex flex-col',
        {
          'w-0': collapsed,
          'w-64': !collapsed
        }
      )}>
        <Header />
        <div className='w-full h-0.5 bg-secondry opacity-5' />
        <div className='items-center justify-center flex flex-col flex-grow'>
          {
            tabs.map((comp, index) => (
              <Item title={comp.label} key={index} active={component.activeIndex === index} onClick={() => {
                component.setActiveIndex(index)
                navigate(comp.path)
              }} />
            ))
          }
        </div>
        <div className='w-full h-32'></div>
      </div>
  )
}

function Item({ title, onClick, active }) {
  return (
    <div className={classNames(
      ' mx-2 p-4 w-60 rounded-md mt-2 cursor-pointer  transition-all ease-in-out duration-300',
      {
        ' bg-white text-primary font-semibold': active,
        'text-white hover:bg-primary-dark':!active
      }
    )}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

function Header() {
  return (
    <div className='w-64 h-24 flex items-center justify-center sticky'>
      <img alt='logo' src={logo} />
    </div>
  )
}

function CollapseButton({ collapsed, setCollapsed }) {
  return (
    <div className={classNames(
      'bg-primary p-4 cursor-pointer rounded-r-full overflow-visible'
    )}
      onClick={() => { setCollapsed(!collapsed) }}
    >
      <FiArrowLeftCircle color='white' size={24} className={classNames(
        'transition-all ease-in-out duration-500',
        {
          'rotate-180': collapsed
        }
      )} />
    </div>
  )
}