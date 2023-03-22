import styled from "styled-components"
import GlobalStyle from "./global-styles/GlobalStyle"
import {
    faCircleUser,
    faPaperPlane,
    faPenToSquare,
} from "@fortawesome/free-regular-svg-icons"
import { faMagnifyingGlass, faKey } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BtnProps, InputProps } from "../../types/src/props/input-props.types"

const profileIcon = <FontAwesomeIcon icon={faCircleUser} color={"#535353"} />
const sendIcon = <FontAwesomeIcon icon={faPaperPlane} color={"#535353"} />
const penIcon = <FontAwesomeIcon icon={faPenToSquare} color={"#535353"} />
const searchIcon = (
    <FontAwesomeIcon icon={faMagnifyingGlass} color={"#535353"} />
)
const keyIcon = <FontAwesomeIcon icon={faKey} />

const StyledWrapper = styled.div<InputProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-left: 0.5rem;
    padding-right: 0.5rem;

    background-color: "#e8e7e7";
    border: ${props => (props.border ? "1px solid grey" : "none")};
    border-radius: 4px;
    width: ${props =>
        props.width === "100%"
            ? "100%"
            : props.width === "20rem"
            ? "20rem"
            : props.width === "15rem"
            ? "15rem"
            : "10rem"};
    padding: 0.1rem;

    &:hover {
        box-shadow: 0 0 4px #c1c1c1;
    }

    &:focus-within {
        background-color: "#e8e7e7da";

        box-shadow: 0 0 4px #c1c1c1;
    }
    &:active {
        background-color: "#e8e7e7da";

        box-shadow: 0 0 4px #c1c1c1;
    }
    &::before {
        content: ${props =>
            props.typeOfInput === "search"
                ? `"\\F002"`
                : props.typeOfInput === "email"
                ? `"\\F2BD"`
                : props.typeOfInput === "edit"
                ? `"\\F2BD"`
                : props.typeOfInput === "password"
                ? `"\\F084"`
                : "none"};
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
    }
`

const StyledBtn = styled.button<BtnProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    margin-left: 0.2rem;
    margin-right: 0.4rem;
`

const StyledInput = styled.input<InputProps>`
    background-color: ${props =>
        props.typeOfInput === "search"
            ? "white"
            : props.typeOfInput === "edit"
            ? "green"
            : props.typeOfInput === "send"
            ? "blue"
            : props.typeOfInput === "email"
            ? "white"
            : "white"};
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 4px;
    border-left: ${props =>
        props.typeOfInput === "search"
            ? "none"
            : props.typeOfInput === "edit"
            ? "1px solid grey"
            : props.typeOfInput === "send"
            ? "none"
            : props.typeOfInput === "email"
            ? "1px solid grey"
            : "none"};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    background: none;
    color: #535353;
    font-size: 1rem;

    &:focus {
        outline: none;
    }
`

function Input(
    { typeOfInput, border, width }: InputProps,
    { onClick }: BtnProps
) {
    const dynamicType: string = setInputType()

    function setInputType() {
        const textInputs = ["search", "edit", "send"]

        if (textInputs.includes(typeOfInput)) {
            return "text"
        } else if (typeOfInput === "email") {
            return "email"
        }
        return "password"
    }

    return (
        <>
            <GlobalStyle />
            <StyledWrapper
                width={width}
                border={border}
                typeOfInput={typeOfInput}
            >
                <StyledInput
                    type={dynamicType}
                    typeOfInput={typeOfInput}
                    width={width}
                    border={border}
                />

                {typeOfInput === "send" ? (
                    <StyledBtn onClick={onClick}>{sendIcon}</StyledBtn>
                ) : (
                    ""
                )}
            </StyledWrapper>
        </>
    )
}

Input.defaultProps = {
    typeOfInput: "search",
    border: false,
    width: "15rem",
    onClick: undefined,
}
export { Input }
