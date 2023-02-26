import React from 'react'
import Loader from '../loader'

function WaitForData({ dependencies, children }) {

    const loading = dependencies.reduce((prev, curr) => (prev || curr.isLoading), false)

    if (loading) {
        return <Loader text='Loading....' />
    }

    return (
        <>
            {children}
        </>
    )
}

export default WaitForData