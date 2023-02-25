import React from 'react'
import Spinner from '../spinner'

function Loader({ children, loading }) {
    if (!loading) {
        return (
            <div className='w-full h-screen bg-secondry flex justify-center items-center absolute'>
                <Spinner />
            </div>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export default Loader