import styled from "styled-components"
import GlobalStyle from "./globalStyle/GlobalStyling"
import SearchIcon from "@mui/icons-material/Search"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Email } from "@mui/icons-material"

interface InputProps {
    typeOfInput: "search" | "edit" | "send" | "email" | "password"
    border: true | false
    width: "100%" | "20rem" | "15rem" | "10rem"
}

const Wrapper = styled.div<InputProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
    background-color: #e8e7e7;
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
    height: 2rem;

    &:hover {
        background-color: #e8e7e7da;
    }
    &:focus-within {
        background-color: #e8e7e7da;
        box-shadow: 0 0 4px #e8e7e7;
    }
`
const Icon = styled.div`
    width: 100%;
`

const UserInput = styled.input<InputProps>`
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
    background: none;
    color: #535353;
    font-size: 1rem;

    &:focus {
        outline: none;
        border: none;

        &::-webkit-clear-button {
            color: red;
        }
    }
`

function Input({ typeOfInput, border, width }: InputProps) {
    const setInputType = () => {
        const textInputs = ["search", "edit", "send"]

        if (textInputs.includes(typeOfInput)) {
            return "text"
        } else if (typeOfInput === "email") {
            return "email"
        }
        return "password"
    }
    const dynamicType: string = setInputType()

    return (
        <>
            <GlobalStyle />
            <Wrapper width={width} border={border} typeOfInput={typeOfInput}>
                {typeOfInput === "search" ? (
                    <SearchIcon fontSize="medium" color="action" />
                ) : typeOfInput === "edit" ? (
                    <AccountCircleIcon fontSize="medium" color="action" />
                ) : null}
                <UserInput
                    type={dynamicType}
                    width={width}
                    border={border}
                    typeOfInput={typeOfInput}
                />
            </Wrapper>
        </>
    )
}

export { Input }
