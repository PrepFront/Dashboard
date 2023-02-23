import React from 'react'
import classNames from 'classnames'

function Text() {
  return (
    <></>
  )
}

function Heading({ children, className , ...restProps}){
    return(
        <h1
            className={classNames(
                'text-2xl font-semibold text-primary m-4',
                className
            )}
            {...restProps}
        >{children}</h1>
    )
}

Text.Heading = Heading

export default Text