import styled, {css} from "styled-components"
import GlobalStyle from "./globalStyle/GlobalStyling"
import { ButtonProps } from '../../types/src/ButtonTypes';

const StyledButton = styled.button<ButtonProps>`
  border-radius: 15px;
  padding: 9px 14px;
  font-family: 'Poppins';
  font-weight: 500;
  ${({ variant }) => 
    variant === 'primary' &&
    css`
      background-color: var(--btn-primary);
      color: var(--btn-primary-text);
      border: none;
    `
  }
  ${({ variant }) => 
    variant === 'default' && 
    css`
      background-color: transparent;
      color: var(--btn-primary);
      border: 1px solid var(--btn-primary)
    `
  }
`

function Button(
  {
    text="Boop", 
    variant='default', 
    danger=false, 
    disabled=false, 
    loading=false, 
    ghost=false, 
    size='middle',
    onClick
  }: ButtonProps) {
  return (
    <StyledButton
      text={text} 
      variant={variant}
      danger={danger}
      disabled={disabled}
      loading={loading}
      ghost={ghost}
      size={size}
      onClick={() => console.log('button clicked!')}
    >
      {text}
    </StyledButton>
  )
}

export { Button }