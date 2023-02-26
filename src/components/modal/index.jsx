import { Fragment } from "react"
import React from 'react'
import classNames from "classnames"
import { Dialog, Transition } from "@headlessui/react"

export default function Modal({ isOpen, closeModal, title, BodyComponent, BodyComponentProps, Buttons, className, panelClassName }) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className={classNames(
                        "flex min-h-full items-center justify-center p-4 text-center",
                        className
                    )}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={classNames(
                                "w-max transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                panelClassName
                            )}>
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-semibold leading-6 text-primary-dark"
                                >
                                    {title}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <BodyComponent {...BodyComponentProps} />
                                </div>

                                <div className="mt-4 flex justify-end items-center">
                                    {
                                        Buttons && Buttons.map((Component, index) => (
                                            <Component key={index} />
                                        ))
                                    }
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}