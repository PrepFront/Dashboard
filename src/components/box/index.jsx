import React from 'react'
import classNames from 'classnames'

function Box({ className, children }) {
  return (
    <div className={classNames(
        ' bg-white p-4 rounded-md shadow-xs',
        className
    )}>{children}</div>
  )
}

export default Box