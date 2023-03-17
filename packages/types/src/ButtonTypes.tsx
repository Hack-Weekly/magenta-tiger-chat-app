export type ButtonProps = {
    text: string,
    variant: string, //filled, icon, navicon
    danger: boolean,
    disabled: boolean,
    loading: boolean | { delay: number },
    ghost: boolean,
    size: 'large' | 'middle' | 'small',
    onClick: (event: MouseEvent) => void
}