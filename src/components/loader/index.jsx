import React from 'react'

import Spinner from '../spinner'

function Loader({ children, loading, text }) {
    if (!loading) {
        return (
            <div className='w-full h-screen bg-secondry flex justify-center items-center absolute flex-col'>
                <Spinner />
                {
                    text && (<h1 className=' text-gray-800 font-bold mt-4'>{text}</h1>)
                }
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