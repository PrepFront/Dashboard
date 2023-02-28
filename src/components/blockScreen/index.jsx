import React from 'react'
import alertPic from '../../assets/alert.svg'

function ScreenBlocker() {
  return (
    <div className='flex w-full h-screen justify-center items-center bg-secondry flex-col p-4'>
        <img src={ alertPic }  alt="" className='w-3/4 sm:w-1/2'/>
        <span className='text-xs mt-10 text-primary'>
            <h1 className=' font-semibold'>This dashboard best supports bigger screen types. Try following things to make best use of this platform.</h1>
            <ol className=' list-disc px-4 py-2 text-primary opacity-75 italic'>
                <li>Rotate your screen to horizontal orientation.</li>
                <li>Reduce zoom in your browser.</li>
                <li>Switch to beggier screens like tablets, laptops, desktops etc.</li>
            </ol>
        </span>
    </div>
  )
}

export default ScreenBlocker