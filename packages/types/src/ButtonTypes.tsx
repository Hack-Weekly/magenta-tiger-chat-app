import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ButtonProps = {
    text: string,
    variant: string, //primary, dim, icon, navicon
    icon: IconProp,
    danger: boolean,
    disabled: boolean,
    active: boolean,
    size: 'large' | 'middle' | 'small',
    onClick: (event: MouseEvent) => void
}

export type StyledButtonProps = {
    variant: string, //primary, dim, icon, navicon
    danger: boolean,
    disabled: boolean,
    active: boolean,
    size: 'large' | 'middle' | 'small'
}

export type StyledIconProps = {
    active: boolean,
    danger: boolean,
    size: 'large' | 'middle' | 'small'
}