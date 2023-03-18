import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ButtonProps = {
    text: string,
    variant: string, //filled, icon, navicon
    icon: IconProp,
    danger: boolean,
    disabled: boolean,
    ghost: boolean,
    active: boolean,
    size: 'large' | 'middle' | 'small',
    onClick: (event: MouseEvent) => void
}

export type StyledButtonProps = {
    variant: string, //filled, icon, navicon,
    danger: boolean,
    disabled: boolean,
    ghost: boolean,
    active: boolean,
    size: 'large' | 'middle' | 'small'
}

export type StyledIconProps = {
    active: boolean
}