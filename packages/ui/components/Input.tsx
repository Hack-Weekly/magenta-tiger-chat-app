import styled, { css } from 'styled-components';

import {
  faCircleUser,
  faPaperPlane,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import {
  faMagnifyingGlass,
  faKey,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputProps } from '../../types/src/styled-components/input-props.types';

const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />;
const clearIcon = <FontAwesomeIcon icon={faClose} />;

const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const profileIcon = <FontAwesomeIcon icon={faCircleUser} />;
const keyIcon = <FontAwesomeIcon icon={faKey} />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;

const StyledWrapper = styled.div<InputProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  padding: 0;
  margin: 0;
  ${({ width, variant, error }) =>
    css`
      width: ${width === '100%'
        ? '100%'
        : width === '20rem'
        ? '20rem'
        : width === '15rem'
        ? '15rem'
        : '10rem'};
      background-color: ${variant === 'search' || variant === 'send'
        ? '#e8e7e7'
        : 'transparent'};
      :hover {
        background-color: ${variant === 'search' || variant === 'send'
          ? '#dadadada'
          : 'transparent'};
        border-color: ${variant === 'search' || variant === 'send'
          ? 'none'
          : '#99999971'};
      }
      :focus-visible {
        background-color: ${variant === 'search' || variant === 'send'
          ? '#dadadada'
          : 'transparent'};
      }
      :active {
        background-color: ${variant === 'search' || variant === 'send'
          ? '#dadadada'
          : 'transparent'};
      }
      border: ${variant === 'search' || variant === 'send'
        ? 'none'
        : error == true
        ? '2px solid #e42222cc'
        : '2px solid #9999999e'};
      border-radius: ${variant === 'search' || variant === 'send'
        ? '4px'
        : '10px '};
    `}
  span {
    transition: 0.2s;
    position: absolute;
    left: 0.3rem;
    ${({ variant }) =>
      css`
        color: ${variant === 'search' || variant === 'send'
          ? '#7c7c7c'
          : '#999999'};
        font-size: ${variant === 'search' || variant === 'send'
          ? '1rem'
          : '1.4rem'};
      `}
  }
`;

const StyledBtn = styled.button<InputProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 1rem;
  right: 0.3rem;
  cursor: pointer;
  ${({ variant }) =>
    css`
      color: ${variant === 'search' || variant === 'send'
        ? '#535353'
        : '#2c2c2c'};
    `}
`;

const StyledInput = styled.input<InputProps>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  width: 100%;
  border: none;
  margin: 0;
  background-color: transparent;
  font-size: 1rem;
  ${({ variant }) =>
    css`
      color: ${variant === 'search' || variant === 'send'
        ? '#535353'
        : '#2c2c2c'};
      ::placeholder {
        color: ${variant === 'search' || variant === 'send'
          ? '#6d6d6dab'
          : '#2c2c2c92'};
      }
      padding: ${variant === 'search'
        ? '.5rem 2rem .5rem 2rem'
        : variant === 'send'
        ? '.5rem 2rem .5rem .3rem'
        : '.7rem 2rem .7rem 2.2rem'};
    `}

  &:focus {
    outline: none;
  }
`;

function Input({
  variant,
  width,
  onClick,
  onChange,
  value = '',
  error = false,
}: InputProps) {
  return (
    <StyledWrapper variant={variant} width={width} error={error}>
      {variant !== 'send' && (
        <span>
          {variant === 'search'
            ? searchIcon
            : variant === 'user'
            ? profileIcon
            : variant === 'email'
            ? emailIcon
            : variant === 'password'
            ? keyIcon
            : null}
        </span>
      )}
      <StyledInput
        type={
          variant === 'email'
            ? 'email'
            : variant === 'password'
            ? 'password'
            : 'text'
        }
        variant={variant}
        value={value}
        name={variant}
        placeholder={
          variant === 'search'
            ? 'Search by username'
            : variant === 'send'
            ? 'Send message'
            : variant === 'user'
            ? 'Enter name'
            : variant === 'email'
            ? 'Enter email'
            : variant === 'password'
            ? 'Enter password'
            : ''
        }
        title={
          variant === 'search'
            ? 'Search by username'
            : variant === 'send'
            ? 'Send message'
            : variant === 'user'
            ? 'Enter name'
            : variant === 'email'
            ? 'Enter email'
            : variant === 'password'
            ? 'Enter password'
            : ''
        }
        onChange={onChange}
        autoComplete="false"
        autoCorrect="false"
      />
      {(variant === 'search' || variant === 'send') && (
        <StyledBtn
          variant={variant}
          onClick={onClick}
          title={
            variant === 'search'
              ? 'Clear'
              : variant === 'send'
              ? 'Send message'
              : ''
          }
        >
          {variant === 'search' && value.length > 0
            ? clearIcon
            : variant === 'send'
            ? sendIcon
            : null}
        </StyledBtn>
      )}
    </StyledWrapper>
  );
}

export { Input };
