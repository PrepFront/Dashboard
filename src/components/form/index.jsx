import React from 'react'
import Input from './fields/input'

function Form({ children }) {
    return (
        <>
            {children}
        </>
    )
}

Form.Input = Input

export default Form