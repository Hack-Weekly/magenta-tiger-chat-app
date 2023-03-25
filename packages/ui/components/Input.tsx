import styled, { css } from "styled-components"

import {
    faCircleUser,
    faPaperPlane,
    faEnvelope,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-regular-svg-icons"

import {
    faMagnifyingGlass,
    faKey,
    faClose,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { InputProps } from "../../types/src/styled-components/input-props.types"

const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />
const clearIcon = <FontAwesomeIcon icon={faClose} />
const eyeIcon = <FontAwesomeIcon icon={faEye} />
const eyeIconSlash = <FontAwesomeIcon icon={faEyeSlash} />
const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />

const profileIcon = <FontAwesomeIcon icon={faCircleUser} />
const keyIcon = <FontAwesomeIcon icon={faKey} />
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />

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
            width: ${width === "100%"
                ? "100%"
                : width === "20rem"
                ? "20rem"
                : width === "15rem"
                ? "15rem"
                : "10rem"};
            background-color: ${variant === "search" || variant === "send"
                ? "#e8e7e7"
                : "transparent"};
            :hover {
                background-color: ${variant === "search" || variant === "send"
                    ? "#dadadada"
                    : "transparent"};
                border-color: ${variant === "search" || variant === "send"
                    ? "none"
                    : error == true
                    ? "#f1404097"
                    : "#99999971"};
            }
            border: ${variant === "search" || variant === "send"
                ? "none"
                : error == true
                ? "2px solid #e42222cc"
                : "2px solid #9999999e"};
            border-radius: ${variant === "search" || variant === "send"
                ? "4px"
                : "10px "};
        `}
    span {
        transition: 0.2s;
        position: absolute;
        left: 0.3rem;
        ${({ variant, error }) =>
            css`
                color: ${variant === "search" || variant === "send"
                    ? "#7c7c7c"
                    : error == true
                    ? "#e42222cc"
                    : "#999999"};
                font-size: ${variant === "search" || variant === "send"
                    ? "1rem"
                    : "1.4rem"};
            `}
    }
`

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
            color: ${variant === "search" || variant === "send"
                ? "#535353"
                : "#2c2c2c"};
        `}
`

const StyledInput = styled.input<InputProps>`
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    width: 100%;
    border: none;
    margin: 0;
    background-color: transparent;
    font-size: 1rem;
    ${({ variant, error }) =>
        css`
            color: ${variant === "search" || variant === "send"
                ? "#535353"
                : "#2c2c2c"};
            ::placeholder {
                color: ${variant === "search" || variant === "send"
                    ? "#6d6d6dab"
                    : "#2c2c2c92"};
            }
            padding: ${variant === "search"
                ? ".5rem 2rem .5rem 2rem"
                : variant === "send"
                ? ".5rem 2rem .5rem .3rem"
                : ".7rem 2rem .7rem 2.2rem"};
            :focus-visible {
                background-color: ${variant === "search" || variant === "send"
                    ? "#dadadada"
                    : "transparent"};
                border-radius: ${variant === "search" || variant === "send"
                    ? "4px"
                    : "10px "};
                border-color: ${variant === "search" || variant === "send"
                    ? "none"
                    : error == true
                    ? "#f1404097"
                    : "#99999971"};
            }
            :active {
                background-color: ${variant === "search" || variant === "send"
                    ? "#dadadada"
                    : "transparent"};
            }
        `}

    &:focus {
        outline: none;
    }
`

function Input({
    variant,
    width,
    onClick,
    onChange,
    value = "",
    error = false,
    required = false,
    isPassShowed = false,
}: InputProps) {
    return (
        <StyledWrapper variant={variant} width={width} error={error}>
            {variant !== "send" && (
                <span>
                    {variant === "search"
                        ? searchIcon
                        : variant === "user"
                        ? profileIcon
                        : variant === "email"
                        ? emailIcon
                        : variant === "password"
                        ? keyIcon
                        : null}
                </span>
            )}
            <StyledInput
                type={
                    variant === "email"
                        ? "email"
                        : variant === "password" && !isPassShowed
                        ? "password"
                        : variant === "password" && isPassShowed
                        ? "text"
                        : "text"
                }
                variant={variant}
                value={value}
                name={variant}
                placeholder={
                    variant === "search"
                        ? "Search by username"
                        : variant === "send"
                        ? "Send message"
                        : variant === "user"
                        ? "Enter name"
                        : variant === "email"
                        ? "Enter email"
                        : variant === "password"
                        ? "Enter password"
                        : ""
                }
                title={
                    variant === "search"
                        ? "Search by username"
                        : variant === "send"
                        ? "Send message"
                        : variant === "user"
                        ? "Enter name"
                        : variant === "email"
                        ? "Enter email"
                        : variant === "password"
                        ? "Enter password"
                        : ""
                }
                onChange={onChange}
                autoComplete="false"
                autoCorrect="false"
                required={required}
            />
            {(variant === "send" ||
                (variant === "search" && value.length > 0) ||
                (variant === "password" && value.length > 0)) && (
                <StyledBtn
                    type="button"
                    variant={variant}
                    onClick={onClick}
                    title={
                        variant === "search"
                            ? "Clear"
                            : variant === "send"
                            ? "Send message"
                            : ""
                    }
                >
                    {variant === "search" && value.length > 0
                        ? clearIcon
                        : variant === "send"
                        ? sendIcon
                        : variant === "password" && !isPassShowed
                        ? eyeIcon
                        : variant === "password" && isPassShowed
                        ? eyeIconSlash
                        : null}
                </StyledBtn>
            )}
        </StyledWrapper>
    )
}

export { Input }
