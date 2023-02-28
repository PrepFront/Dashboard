import React, { forwardRef } from 'react'
import classNames from 'classnames'

export default forwardRef(({ outerClossName, className, error, helpText, ...restProps }, ref) => {
  return (
    <div className={classNames(
      'rounded-md py-1',
      outerClossName
    )}>
      {
        error && <h1 className='text-red-500 text-xs italic text-end py-1'>{error}</h1>
      }
      <input
        className={classNames(
          'border border-gray-400 rounded-md py-1 px-3 w-full',
          className
        )}
        {...restProps}
        ref={ref}
      />
    </div>
  )
})