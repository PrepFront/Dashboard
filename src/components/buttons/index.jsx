import React from 'react'
import classNames from 'classnames'
import { PulseLoader } from 'react-spinners'

const VARIANT_TO_BTN = {
    outline: 'border border-primary border-1 text-primary',
    solid: 'bg-primary text-white bg-opacity-95 hover:bg-opacity-100',
    text: 'bg-primary bg-opacity-5 text-primary hover:bg-opacity-10',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-lime-500 text-white hover:bg-lime-600'
}

const DISABLED_BTN_STYLE = {
    outline: '',
    solid: '',
    text: '',
}

const SIZE_TO_BTN = {
    medium: 'py-2 px-6 ',
}

const VARIENT_TO_SPINNER = {
    outline: '#524F4F',
    solid: 'white',
    text: '#524F4F',
    success: 'white'
}

function Button({ grow, variant, className, disabled, children, href, loading, size, ...restProps }) {
    let Tag = href ? 'a' : 'button'
    if (href) {
        restProps = { ...restProps, href }
    }
    return (
        <Tag
            {...restProps}
            className={classNames(
                'rounded-md transition-all duration-300 ease-in-out',
                VARIANT_TO_BTN[variant],
                {
                    'w-full': grow
                },
                SIZE_TO_BTN[size],
                {
                    'cursor-not-allowed opacity-50': disabled,
                },
                disabled ? DISABLED_BTN_STYLE[variant] : '',
                className
            )}
            >
            {loading ? (<PulseLoader color={VARIENT_TO_SPINNER[variant]} size={5} />) : (children)}
        </Tag>
    )
}

Button.defaultProps = {
    variant: 'solid',
    size: 'medium'
}

export default Button