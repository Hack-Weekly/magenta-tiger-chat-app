import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import {
  ButtonProps,
  StyledButtonProps,
} from '../../types/src/styled-components/button.types';

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  border-radius: 15px;
  padding: 0.55rem 0.86rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  ${({ variant, active, danger, disabled, size }) =>
    css`
      &:hover,
      &:focus-visible {
        color: ${(variant === 'navIcon' || variant === 'icon') && !active
          ? 'var(--btn-icon-hover)'
          : (variant === 'navIcon' || variant === 'icon') && active
          ? 'var(--btn-icon-hover-active)'
          : variant === 'primary' && !danger
          ? 'var(--btn-primary-text)'
          : variant === 'dim' && !danger
          ? 'var(--btn-disabled-text)'
          : danger === true
          ? 'var(--btn-danger-hover)'
          : 'var(--btn-disabled-text)'};
        background-color: ${variant === 'primary' && !danger
          ? 'var(--btn-primary-hover)'
          : variant === 'dim' && !danger
          ? 'var(--btn-dim-hover)'
          : danger === true || variant === 'icon' || variant === 'navIcon'
          ? 'transparent'
          : ''};
        border: ${variant === 'icon'
          ? 'none'
          : danger === true
          ? '2px solid var(--btn-danger-hover)'
          : 'none'};
      }

      &:active {
        color: ${(variant === 'navIcon' || variant === 'icon') && !active
          ? 'var(--btn-icon-active)'
          : (variant === 'navIcon' || variant === 'icon') && active
          ? 'var(--btn-icon-active)'
          : variant === 'primary'
          ? 'var(--btn-primary-text)'
          : variant === 'dim' && !danger
          ? 'var(--btn-disabled-text)'
          : danger === true
          ? 'var(--btn-danger)'
          : 'var(--btn-disabled-text)'};
        background-color: ${variant === 'primary'
          ? 'var(--btn-primary-active)'
          : variant === 'dim' && !danger
          ? 'var(--btn-dim)'
          : danger === true || variant === 'icon' || variant === 'navIcon'
          ? 'transparent'
          : ''};
        border: ${variant === 'icon'
          ? 'none'
          : danger === true
          ? '2px solid var(--btn-danger)'
          : 'none'};
      }

      background-color: ${disabled === true && variant === 'primary'
        ? 'var(--btn-disabled)'
        : danger === true || variant === 'icon' || variant === 'navIcon'
        ? 'transparent'
        : variant === 'primary'
        ? 'var(--btn-primary)'
        : variant === 'dim'
        ? 'var(--btn-dim)'
        : 'transparent'};
      border: ${variant === 'icon'
        ? 'none'
        : danger === true
        ? '2px solid var(--btn-danger)'
        : 'none'};
      color: ${disabled === true
        ? 'var(--btn-disabled-text)'
        : danger === true
        ? 'var(--btn-danger)'
        : variant === 'primary'
        ? 'var(--btn-primary-text)'
        : variant === 'icon' && active === true
        ? 'var(--btn-primary)'
        : variant === 'icon'
        ? 'var(--btn-icon)'
        : variant === 'navIcon' && active === true
        ? 'var(--btn-primary)'
        : 'var(--btn-icon)'};
      font-size: ${size === 'small'
        ? '0.8rem'
        : size === 'middle'
        ? '1.4rem'
        : '2rem'};

      span {
        ${variant === 'navIcon' && `font-size: .9rem`}
      }
    `};
`;

function Button({
  text,
  variant = 'primary',
  icon,
  danger,
  disabled,
  size = 'middle',
  active,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      danger={danger}
      disabled={disabled}
      active={active}
      size={size}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text && <span>{text}</span>}
    </StyledButton>
  );
}

export { Button };
