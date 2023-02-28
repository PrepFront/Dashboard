import classNames from 'classnames'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'
import { capitalize } from 'lodash'
import { FaSignOutAlt } from 'react-icons/fa'
import { AiTwotoneSetting } from 'react-icons/ai'
import { toast } from 'react-hot-toast'

import DropDown from '../dropdown'
import Text from '../text'
import { useAppContext } from '../../hooks/context'

export default function NavBar({ collapsable, setCollapse, navigate }) {
    const { user, deleteUser } = useAppContext()
    return (
        <nav className='h-16 w-full bg-primary relative flex justify-between items-center px-4'>
            <div
                className={classNames(
                    'p-2 hover:bg-primary-dark cursor-pointer transition-all duration-300 ease-in-out rounded-full w-max',
                    {
                        'hover:bg-primary-dark bg-primary text-white': collapsable,
                        'bg-white text-primary hover:bg-secondry': !collapsable
                    }
                )}
                onClick={() => { setCollapse(!collapsable) }}
            >
                <GiHamburgerMenu size={25} />
            </div>
            <DropDown Button={DropDownButton} Item={DropDownItem} itemsProps={{
                user: user,
                functions: {
                    onDelete: deleteUser,
                },
                navigate: navigate
            }} />
        </nav>
    )
}

function DropDownButton() {
    return (
        <div className='rounded flex items-center'>
            Account
            <IoIosArrowDown size={15} className='ml-2' />
        </div>
    )
}

function DropDownItem({ user, functions }) {
    return (
        <div className=' w-48 bg-white m-1'>
            <div className='w-full h-max flex justify-center items-center flex-col pt-10'>
                <RiAccountCircleFill size={60} />
                <Text.Heading>{capitalize(user?.full_name)}</Text.Heading>
                {
                    ACCOUNT_BUTTONS.map((item) => {
                        return (
                            <div
                                className='w-full py-2 rounded-lg px-8 text-sm flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:bg-opacity-10 bg-primary bg-opacity-5 first:mt-0 mt-1'
                                onClick={() => item.onClick(functions)}
                                key={item.name}
                            >
                                <div className='flex items-center justify-center'>
                                    {item.label}
                                    <item.icon size={15} className='ml-2' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ACCOUNT_BUTTONS = [
    {
        name: 'settings',
        label: 'Settings',
        icon: AiTwotoneSetting,
        onClick: () => {

        }
    },
    {
        name: 'sign_out',
        label: 'SignOut',
        icon: FaSignOutAlt,
        onClick: ({ onDelete }) => {
            onDelete()
            toast.success('You are now logged out!')
        }
    }
]