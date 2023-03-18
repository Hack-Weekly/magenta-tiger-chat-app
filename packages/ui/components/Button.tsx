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
  ${({ active, danger, size }) =>
    css`
      color: 
        ${danger === true
          ? 'var(--btn-danger)'
          : active === true 
          ? 'var(--btn-icon-active)' 
          : 'var(--btn-icon)'
        };
      font-size: 
        ${size === 'small'
          ? '0.8rem'
          : size === 'middle'
          ? '1.5rem'
          : '2rem'
        };
    `
  }
`

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 15px;
  padding: 9px 14px;
  font-family: 'Poppins';
  font-weight: 500;
  cursor: pointer;
  ${({ variant, active, danger, disabled, size }) => 
    css`
      background-color: 
        ${danger === true || variant === 'icon' || variant === 'navIcon'
          ? 'transparent'
          : variant === 'primary'
          ? 'var(--btn-primary)'
          : variant === 'dim'
          ? 'var(--btn-dim)'
          : 'transparent'
        };
      border: 
        ${variant === 'icon' 
          ? 'none'
          : danger === true
          ? '1px solid var(--btn-danger)'
          : 'none'
        };
      color: 
        ${danger === true 
          ? 'var(--btn-danger)'
          : disabled === true
          ? 'var(--btn-disabled)'
          : variant === 'primary'
          ? 'var(--btn-primary-text)'
          : variant === 'icon' && active === true 
          ? 'var(--btn-icon-active)' 
          : variant === 'icon' 
          ? 'var(--btn-icon)'
          : variant === 'navIcon' && active === true
          ? 'var(--btn-primary)'
          : 'var(--btn-nav_icon)'
        };
      font-size: 
        ${size === 'small'
          ? '0.8rem'
          : size === 'middle'
          ? '1.5rem'
          : '2rem'
        };
    `
  }
`

function Button(
  {
    text='boop', 
    variant='icon', 
    icon=faCoffee,
    danger=true, 
    disabled=false,
    size='small',
    active=true,
    onClick
  }: ButtonProps) {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        {icon && <StyledIcon 
          icon={icon} 
          active={active}
          danger={danger}
          size={size}
          />
        }
        <StyledButton
          variant={variant}
          danger={danger}
          disabled={disabled}
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