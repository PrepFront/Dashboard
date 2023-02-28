import classNames from 'classnames'
import React from 'react'

import Text from '../text'

function Card({ item }) {
    return (
        <div className='w-full cursor-pointer border hover:shadow-xl grid grid-row-1 grid-cols-4 lg:grid-cols-6 bg-white hover:bg-gray-400 transition-all duration-300 ease-in-out hover:bg-opacity-10 first:mt-0 mt-4 rounded-xl overflow-hidden'>
            <div className='col-span-1 w-full h-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url('${item.image}')` }} />
            <div className='col-span-3 lg:col-span-5 h-full p-6'>
                <h1 className='mb-1 text-primary-dark font-medium'>{item.title}</h1>
                <p className='text-xs opacity-75'>{item.description}</p>
            </div>
        </div>
    )
}

export default Card