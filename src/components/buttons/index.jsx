import React from 'react'
import classNames from 'classnames'
import { PulseLoader } from 'react-spinners'

const VARIANT_TO_BTN = {
    outline: 'border border-primary border-1 text-primary',
    solid: 'bg-primary text-white',
    text: '',
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
    text: '#524F4F'
}

function Button({ grow, variant, className, disabled, children, href, loading, size, ...restProps }) {
    let Tag = href ? 'a' : 'button'
    if (href) {
        restProps = { ...restProps, href }
    }
    return (
        <Tag {...restProps} className={classNames(
            'rounded-md ',
            VARIANT_TO_BTN[vargit remote iant],
            {
                'w-full': grow
            },
            SIZE_TO_BTN[size],
            {
                'cursor-not-allowed opacity-50': disabled,
            },
            disabled ? DISABLED_BTN_STYLE[variant] : ''
        )}>
            {loading ? (<PulseLoader color={VARIENT_TO_SPINNER[variant]} size={5} />) : (children)}
        </Tag>
    )
}

Button.defaultProps={
    variant: 'solid',
    size: 'medium'
}

export default Button