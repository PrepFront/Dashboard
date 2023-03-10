import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import React from 'react'

function DropDown({ Button, Item, buttonClassName, itemsClassName, buttonProps, itemsProps, commonProps }) {
    return (
        <Menu as={'div'}>
            <Menu.Button 
            className={classNames(
                "inline-flex w-max justify-center rounded-md bg-white bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
                buttonClassName
            )}>
                <Button {...buttonProps} {...commonProps}/>
            </Menu.Button>
            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={classNames(
                    "absolute right-0 mt-3 w-max z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    itemsClassName
                )}>
                    <Item {...itemsProps} {...commonProps}/>
                </Menu.Items>
            </Transition>
        </Menu >
    )
}

export default DropDown