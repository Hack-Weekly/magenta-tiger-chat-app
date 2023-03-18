import styled, {css} from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ButtonProps, StyledButtonProps, StyledIconProps } from '../../types/src/ButtonTypes';
import GlobalStyle from "./globalStyle/GlobalStyling"

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  max-width: fit-content;
  width: 100%;
`

const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  ${({ active }) =>
    css`
      color: ${active === true ? 'var(--btn-icon-active)' : 'var(--btn-icon)'};
    `
  }
`

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 15px;
  padding: 9px 14px;
  font-family: 'Poppins';
  font-weight: 500;
  cursor: pointer;
  ${({ variant }) => 
    variant === 'primary' &&
    css`
      background-color: var(--btn-primary);
      color: var(--btn-primary-text);
      border: none;
    `
  }
  ${({ variant, active }) => 
    variant === 'icon' && 
    css`
      background-color: transparent;
      border: none;
      color: ${active === true ? 'var(--btn-icon-active)' : 'var(--btn-icon)'};
    `
  }
  ${({ variant }) => 
    variant ==='navIcon' &&
    css` 
      background-color: transparent;
      border: none;
      color: var(--btn-nav_icon);
    `
  }
`

function Button(
  {
    text="Boop", 
    variant='icon', 
    icon=faCoffee,
    danger=false, 
    disabled=false,
    ghost=false, 
    size='middle',
    active=true,
    onClick
  }: ButtonProps) {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        {icon && <StyledIcon icon={icon} active={active}></StyledIcon>}
        <StyledButton
          variant={variant}
          danger={danger}
          disabled={disabled}
          ghost={ghost}
          active={active}
          size={size}
        >
          {text}
        </StyledButton>
      </Wrapper>
    </>
  )
}

export { Button }